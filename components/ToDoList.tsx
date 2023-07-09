import React from "react";

import { ITask } from "@/types/tasks";

import { Task } from "@/components/Task";

interface TodoListProps {
  tasks: ITask[];
}

export const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
