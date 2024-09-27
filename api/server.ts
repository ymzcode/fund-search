import Http from "~/utils/http";

export default new class server extends Http {

    /**
     * 登录
     */
    public login(data: any) {
        return this.post('/auth/loginByPwd', data)
    }

    /**
     * 发送注册验证码
     */
    public sendSmsRegister(data: any) {
        return this.postX('/auth/sendSmsRegister', data)
    }

    /**
     * 微信授权码登录
     */
    public loginByWxWeb(data: any) {
        return this.postX('/auth/loginByWxWeb', data)
    }

    public bindByWxWeb(data: any) {
        return this.postX('/userWx/bindByWxWeb', data)
    }

    public sendSmsLogin(data: any) {
        return this.postX('/auth/sendSmsLogin', data)
    }

    public register(data: any) {
        return this.post('/auth/register', data)
    }



}
