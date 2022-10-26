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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { MessageInput } from '../models';
/**
 * SysMessageApi - axios parameter creator
 * @export
 */
export const SysMessageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} [message] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysEmailSendPost: async (message?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysEmail/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (message !== undefined) {
                localVarQueryParameter['message'] = message;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysMessageAllUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysMessage/allUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysMessageOtherUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysMessage/otherUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysMessageUserPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysMessage/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysMessageUsersPost: async (body?: MessageInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysMessage/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysMessageApi - functional programming interface
 * @export
 */
export const SysMessageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} [message] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysEmailSendPost(message?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).sysEmailSendPost(message, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageAllUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).sysMessageAllUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).sysMessageOtherUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).sysMessageUserPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageUsersPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysMessageApiAxiosParamCreator(configuration).sysMessageUsersPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysMessageApi - factory interface
 * @export
 */
export const SysMessageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} [message] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysEmailSendPost(message?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).sysEmailSendPost(message, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给所有人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageAllUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).sysMessageAllUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给除了发送人的其他人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).sysMessageOtherUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给某个人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageUserPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).sysMessageUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送消息给某些人
         * @param {MessageInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysMessageUsersPost(body?: MessageInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysMessageApiFp(configuration).sysMessageUsersPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysMessageApi - object-oriented interface
 * @export
 * @class SysMessageApi
 * @extends {BaseAPI}
 */
export class SysMessageApi extends BaseAPI {
    /**
     * 
     * @summary 发送邮件
     * @param {string} [message] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async sysEmailSendPost(message?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).sysEmailSendPost(message, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给所有人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async sysMessageAllUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).sysMessageAllUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给除了发送人的其他人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async sysMessageOtherUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).sysMessageOtherUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给某个人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async sysMessageUserPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).sysMessageUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送消息给某些人
     * @param {MessageInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysMessageApi
     */
    public async sysMessageUsersPost(body?: MessageInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysMessageApiFp(this.configuration).sysMessageUsersPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}