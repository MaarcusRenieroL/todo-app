"use client";

import React, { FormEventHandler, useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { ITask } from "@/types/tasks";

import { Modal } from "@/components/Modal";

import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const [taskToEdit, setTaskToEdit] = useState<string>(task.task);
  const [taskToDelete, setTaskToDelete] = useState<string>("");

  const handleEdit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await editTodo({
      id: task.id,
      task: taskToEdit,
    });

    setTaskToEdit("");
    setOpenModalEdit(false);

    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <>
      <tr key={task.id}>
        <td className={"w-full"}>{task.task}</td>
        <td className={"flex gap-5"}>
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            cursor={"pointer"}
            className={"text-blue-500"}
            size={15}
          />
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleEdit}>
              <h3 className={"font-bold text-lg"}>Edit Task</h3>
              <div className={"modal-action"}>
                <input
                  type="text"
                  placeholder="Add New Task"
                  className="input input-bordered w-full max-w-xs"
                  value={taskToEdit}
                  onChange={(event) => setTaskToEdit(event.target.value)}
                />
                <button type={"submit"} className={"btn"}>
                  Submit
                </button>
              </div>
            </form>
          </Modal>
          <FiDelete
            onClick={() => setOpenModalDelete(true)}
            cursor={"pointer"}
            className={"text-red-500"}
            size={15}
          />
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className={"text-lg"}>
              Are you sure that you want to delete this task?
            </h3>
            <div className={"modal-action"}>
              <button onClick={() => handleDelete(task.id)} className={"btn"}>
                Yes
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
};
