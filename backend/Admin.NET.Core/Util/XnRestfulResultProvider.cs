﻿using Furion;
using Furion.DataValidation;
using Furion.FriendlyException;
using Furion.JsonSerialization;
using Furion.UnifyResult;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Admin.NET.Core
{
    /// <summary>
    /// 规范化RESTful风格返回值
    /// </summary>
    [UnifyModel(typeof(XnRestfulResult<>))]
    public class XnRestfulResultProvider : IUnifyResultProvider
    {
        /// <summary>
        /// 异常返回值
        /// </summary>
        /// <param name="context"></param>
        /// <param name="metadata"></param>
        /// <returns></returns>
        public IActionResult OnException(ExceptionContext context, ExceptionMetadata metadata)
        {
            return new JsonResult(RESTfulResult(metadata.StatusCode, errors: metadata.Errors));
        }

        /// <summary>
        /// 成功返回值
        /// </summary>
        /// <param name="context"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public IActionResult OnSucceeded(ActionExecutedContext context, object data)
        {
            return new JsonResult(RESTfulResult(StatusCodes.Status200OK, true, data));
        }

        /// <summary>
        /// 验证失败返回值
        /// </summary>
        /// <param name="context"></param>
        /// <param name="metadata"></param>
        /// <returns></returns>
        public IActionResult OnValidateFailed(ActionExecutingContext context, ValidationMetadata metadata)
        {
            return new JsonResult(RESTfulResult(StatusCodes.Status400BadRequest, errors: metadata.ValidationResult));
        }

        /// <summary>
        /// 处理输出状态码
        /// </summary>
        /// <param name="context"></param>
        /// <param name="statusCode"></param>
        /// <param name="unifyResultSettings"></param>
        /// <returns></returns>
        public async Task OnResponseStatusCodes(HttpContext context, int statusCode, UnifyResultSettingsOptions unifyResultSettings)
        {
            // 设置响应状态码
            UnifyContext.SetResponseStatusCodes(context, statusCode, unifyResultSettings);

            switch (statusCode)
            {
                // 处理 401 状态码
                case StatusCodes.Status401Unauthorized:
                    await context.Response.WriteAsJsonAsync(RESTfulResult(statusCode, errors: "401 登录已过期，请重新登录"),
                        App.GetOptions<JsonOptions>()?.JsonSerializerOptions);
                    break;
                // 处理 403 状态码
                case StatusCodes.Status403Forbidden:
                    await context.Response.WriteAsJsonAsync(RESTfulResult(statusCode, errors: "403 禁止访问，没有权限"),
                        App.GetOptions<JsonOptions>()?.JsonSerializerOptions);
                    break;

                default: break;
            }
        }

        /// <summary>
        /// 返回 RESTful 风格结果集
        /// </summary>
        /// <param name="statusCode"></param>
        /// <param name="succeeded"></param>
        /// <param name="data"></param>
        /// <param name="errors"></param>
        /// <returns></returns>
        private static XnRestfulResult<object> RESTfulResult(int statusCode, bool succeeded = default, object data = default, object errors = default)
        {
            return new XnRestfulResult<object>
            {
                Success = succeeded,
                Code = statusCode,
                Message = JSON.Serialize(errors),
                Data = data,
                Extras = UnifyContext.Take(),
                Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
            };
        }
    }

    /// <summary>
    /// RESTful风格---XIAONUO返回格式
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class XnRestfulResult<T>
    {
        /// <summary>
        /// 执行成功
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// 状态码
        /// </summary>
        public int? Code { get; set; }

        /// <summary>
        /// 错误信息
        /// </summary>
        public object Message { get; set; }

        /// <summary>
        /// 数据
        /// </summary>
        public T Data { get; set; }

        /// <summary>
        /// 附加数据
        /// </summary>
        public object Extras { get; set; }

        /// <summary>
        /// 时间戳
        /// </summary>
        public long Timestamp { get; set; }
    }
}