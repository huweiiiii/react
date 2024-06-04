import { makeAutoObservable } from "mobx"

export class Todo {
    title = ""
    finished = false
    constructor(title: string) {
        makeAutoObservable(this,
            {  // 自定义各个类属性的mobx注解，如false(不注解)等

            },
            {  //  options参数，autoBind是指自动绑定this
                autoBind: true,
            }
        )
        this.title = title
    }

    toggle() {
        this.finished = !this.finished
    }
}
