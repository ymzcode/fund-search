/*
* 动态加载js
* */
export const loadExternalScript = (src, dom) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // 设置为 false 以同步加载

        script.onload = () => {
            resolve();
        };

        script.onerror = (error) => {
            reject(error);
        };

        (dom ? dom : document.body).appendChild(script);
    });
}

/*
* 手机号验证方法
* */
export const asyncValidator = (val) => {
    return (/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
};
