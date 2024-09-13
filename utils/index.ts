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
