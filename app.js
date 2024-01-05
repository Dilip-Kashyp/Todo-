import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as todoController from "./todoController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();

app.get("/todos", todoController.showForm);
app.get("todos/:id", todoController.showTodo);
app.post("/todos", todoController.createTodos);
app.post("/todos/:id", todoController.updateTodo);
app.post("/todos/:id/delete", todoController.deleteTodo);


export default app;