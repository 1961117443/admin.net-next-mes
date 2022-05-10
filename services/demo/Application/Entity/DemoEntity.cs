﻿
 
using SqlSugar;
using System.ComponentModel.DataAnnotations;
using System; 
using ServiceCore.Shared;

namespace Admin.NET.Demo.Application.Entity
{
    /// <summary>
    /// Demo
    /// </summary>
    [SugarTable("d_demo", "Demo")]
    [SqlSugarEntity ]
    public class DemoEntity : EntityBase
    {
        /// <summary>
        /// 姓名
        /// </summary>
        [SugarColumn(ColumnDescription = "姓名", Length = 20)]
        [Required, MaxLength(20)]
        public string Name { get; set; }

        /// <summary>
        /// 年龄
        /// </summary>
        [SugarColumn(ColumnDescription = "年龄")]
        public int Age { get; set; }


        /// <summary>
        /// 出生日期
        /// </summary>
        [SugarColumn(ColumnDescription = "出生日期")]
        public DateTime BirthDate { get; set; }
    }
}
