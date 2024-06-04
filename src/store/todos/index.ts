import { makeAutoObservable } from "mobx"
import { Todo } from "./todo"

export class TodoList {
    todos: Todo[] = []
    get unfinishedTodoCount() {
        return this.todos.filter((todo) => todo.finished).length
    }
    constructor(todos: Todo[]) {
        makeAutoObservable(this,
            {  // 自定义各个类属性的mobx注解，如false(不注解)等

            },
            {  //  options参数，autoBind是指自动绑定this
                autoBind: true,
            }
        )
        this.todos = todos
    }
    add(todo: Todo) {
        this.todos.push(todo)
    }
}


export default new TodoList([]);
