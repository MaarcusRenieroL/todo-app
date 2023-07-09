import { ITask } from "@/types/tasks";

import { V4Options } from "uuid";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    cache: "no-store",
  });

  return await response.json();
};

export const addTodo = async (toDo: {
  task: string;
  id: (<T extends OutputBuffer>(
    options: V4Options | null | undefined,
    buffer: T,
    offset?: number
  ) => T) &
    ((options?: V4Options) => string);
}): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(toDo),
  });

  return await response.json();
};

export const editTodo = async (toDo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks/${toDo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(toDo),
  });

  return await response.json();
};

export const deleteTodo = async (id: string) => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
