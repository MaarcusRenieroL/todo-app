import React from "react";

import AddTask from "@/components/AddTask";
import { ToDoList } from "@/components/ToDoList";

import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className={"max-w-4xl mx-auto mt-4"}>
      <div className={"text-center my-5 flex flex-col gap-4"}>
        <h1 className={"text-2xl font-bold"}>To Do App</h1>
        <AddTask />
      </div>
      <ToDoList tasks={tasks} />
    </main>
  );
}
