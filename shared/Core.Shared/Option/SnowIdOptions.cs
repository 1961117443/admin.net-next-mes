﻿using Furion.ConfigurableOptions;

namespace Admin.NET.Core.Shared
{
    /// <summary>
    /// 雪花Id配置选项
    /// </summary>
    public sealed class SnowIdOptions : IConfigurableOptions
    {
        /// <summary>
        /// 机器码
        /// </summary>
        public ushort WorkerId { get; set; }
    }
}