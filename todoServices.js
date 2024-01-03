const createTodo = async (todo) => {
    todo.id = crypto.randomUUID();
    const kv = await Deno.openKv();
    await kv.set(["todos", todo.id], todo);
};

const listTodo = async () => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["todos"] });
    const todos = [];
    for await (const entry of entries){
        todos.push(entry.value);
    }
    return todos;
}

const getTodo = async (id) => {
    const kv = await Deno.openKv();
    const todo = await kv.get(["todos",id]);
    return todo?.value??{};
}


export { createTodo, listTodo, getTodo }