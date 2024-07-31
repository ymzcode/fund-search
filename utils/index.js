/*
* 手机号验证方法
* */
export const asyncValidator = (val) => {
    return (/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
};
