import { makeAutoObservable } from "mobx"

export class User {
    name: string = ""
    get isLogin() {
        return this.name.length > 0
    }
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }
    login(name: string) {
        console.log("login", name);
        this.name = name
    }
    logout() {
        this.name=""
    }

}
const userStore = new User()
export default userStore
