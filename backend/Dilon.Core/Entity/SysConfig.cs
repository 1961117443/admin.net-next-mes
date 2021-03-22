﻿using Dilon.Core.Service;
using Furion;
using Furion.DatabaseAccessor;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dilon.Core
{
    /// <summary>
    /// 参数配置表
    /// </summary>
    [Table("sys_config")]
    public class SysConfig : DEntityBase, IEntityChangedListener<SysConfig>
    {
        public SysConfig()
        {
            CreatedTime = DateTimeOffset.Now;
            IsDeleted = false;
            Status = (int)CommonStatus.ENABLE;
        }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 编码
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 属性值
        /// </summary>
        public string Value { get; set; }

        /// <summary>
        /// 是否是系统参数（Y-是，N-否）
        /// </summary>
        public string SysFlag { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// 状态（字典 0正常 1停用 2删除）
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 常量所属分类的编码，来自于“常量的分类”字典
        /// </summary>
        public string GroupCode { get; set; }

        /// <summary>
        /// 监听实体更改之后
        /// </summary>
        /// <param name="newEntity"></param>
        /// <param name="oldEntity"></param>
        /// <param name="dbContext"></param>
        /// <param name="dbContextLocator"></param>
        /// <param name="state"></param>
        public void OnChanged(SysConfig newEntity, SysConfig oldEntity, DbContext dbContext, Type dbContextLocator, EntityState state)
        {
            // 刷新配置缓存
            App.GetService<ISysConfigService>().UpdateConfigCache(newEntity.Code, newEntity.Value);
        }
    }
}