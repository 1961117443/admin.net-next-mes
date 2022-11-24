/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TriggerStatus } from './trigger-status';
/**
 * 
 * @export
 * @interface Trigger
 */
export interface Trigger {
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    triggerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    jobId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    triggerType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    assemblyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    args?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trigger
     */
    description?: string | null;
    /**
     * 
     * @type {TriggerStatus}
     * @memberof Trigger
     */
    status?: TriggerStatus;
    /**
     * 
     * @type {Date}
     * @memberof Trigger
     */
    startTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Trigger
     */
    endTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Trigger
     */
    lastRunTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Trigger
     */
    nextRunTime?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    numberOfRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    maxNumberOfRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    numberOfErrors?: number;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    maxNumberOfErrors?: number;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    numRetries?: number;
    /**
     * 
     * @type {number}
     * @memberof Trigger
     */
    retryTimeout?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Trigger
     */
    startNow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Trigger
     */
    runOnStart?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Trigger
     */
    updatedTime?: Date | null;
}