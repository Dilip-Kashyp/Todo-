import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
import * as todoServices from "./todoServices.js";

const showForm = async (c) => {
    return c.html(eta.render("todos.eta", { todos: await todoServices.listTodo() }),);
};

const createTodos = async (c) => {
    const body = await c.req.parseBody();
    // console.log(body);
    await todoServices.createTodo(body);
    return c.redirect("/todos");
};

const showTodo = async (c) => {
    const id = c.req.param("id");
    const todo = await todoServices.getTodo(id);
    return c.html(
        eta.render("todo.eta", { todo: await todoServices.getTodo(id) }),
    );
};

const updateTodo = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await todoServices.updatedTodo(id, body);
    return c.redirect("/todos");
}

const deleteTodo = async (c) => {
    const id = c.req.param("id");
    await todoServices.deletedTodo(id);
    return c.redirect("/todos");
}
export { showForm, createTodos, showTodo, updateTodo, deleteTodo }