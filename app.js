import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as todoController from "./todoController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();

app.get("/todos", (c) => todoController.showForm(c));
app.get("todos/:id", (c) => todoController.showTodo(c));
app.post("/todos", (c) => todoController.createTodos(c))


export default app;