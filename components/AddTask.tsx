"use client";

import React, { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

import { Modal } from "@/components/Modal";

import { addTodo } from "@/api";

const AddTask = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await addTodo({
      id: uuidv4,
      task: newTask,
    });

    setNewTask("");
    setModalOpen(false);

    router.refresh();
  };

  return (
    <div>
      <button
        className={"btn btn-primary w-full"}
        onClick={() => setModalOpen(true)}
      >
        Add New Task{" "}
        <span>
          <AiOutlinePlus className={"mb-0.5"} />
        </span>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className={"font-bold text-lg"}>Add New Task</h3>
          <div className={"modal-action"}>
            <input
              type="text"
              placeholder="Add New Task"
              className="input input-bordered w-full max-w-xs"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <button type={"submit"} className={"btn"}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
