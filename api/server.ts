import Http from "~/utils/http";

export default new class server extends Http {

    /**
     * 登录
     */
    public login(data: any) {
        return this.postX('/auth/login', data)
    }

    /**
     * 发送验证码
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


}
