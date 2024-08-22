import Http from "~/utils/http";

export default new class server extends Http {

    /**
     * 登录
     */
    public login(data: any) {
        return this.post('/auth/login', data)
    }
}
