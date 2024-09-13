import {hash} from 'ohash'
import { message } from 'ant-design-vue';

// 后端返回的数据类型
export interface ResOptions<T> {
    data: T
    code?: number
    msg?: string
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = async (url: string, options?: any, headers?: any) => {

    // console.log(options)

    try {
        // 3.0正式版环境变量要从useRuntimeConfig里的public拿
        const {public: {VITE_API_HOST}} = useRuntimeConfig()
        const reqUrl = VITE_API_HOST + url // 你的接口地址

        // 设置key
        const key = hash(JSON.stringify(options) + url)

        // 可以设置默认headers例如，token的获取最好用useState返回一个useCookie
        const customHeaders = {token: useCookie('token').value, ...headers}

        const {data, error} = await useFetch(reqUrl, {...options, key, headers: customHeaders})
        // console.log(data.value, reqUrl)
        const result = data.value as ResOptions<any>
        // console.log('useFetchResData: ', result)
        if (error.value || !result || (result && result.code !== 200)) {
            // 处理token失效的情况
            if (result && result.code === 401) {
                // token.value = ''
                // await navigateTo('/login')
            }

            // 在客户端的时候抛出错误结果方便捕捉
            if (process.client) {
                message.error(result?.msg || `请求遇到异常,${JSON.stringify(result)}`);
                return Promise.reject(result || error.value)
            }
            // 在服务端就直接渲染错误页面，需要设置一个error.vue接收错误信息
            throw createError({
                statusCode: 500,
                statusMessage: reqUrl,
                message: error.value?.message || '服务器内部错误',
            })
        }
        return result.data // 这里直接返回data或者其他的
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }

}

export default class Http {

    get(url: string, params?: any, headers?: any) {
        return fetch(url, {method: 'get', params}, headers)
    }

    post(url: string, body?: any, headers?: any) {
        return fetch(url, {method: 'post', body}, headers)
    }

    postX(url: string, query?: any, headers?: any) {
        return fetch(url, {method: 'post', query}, {
            'content-type': 'application/x-www-form-urlencoded',
            ...headers
        })
    }

    put(url: string, body?: any, headers?: any) {
        return fetch(url, {method: 'put', body}, headers)
    }

    delete(url: string, body?: any, headers?: any) {
        return fetch(url, {method: 'delete', body}, headers)
    }
}
