import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
}) => {
  return (
    <>
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className={"modal-box relative"}>
          <label
            className={"btn btn-sm btn-circle absolute right-2 top-2"}
            onClick={() => setModalOpen(false)}
          >
            x
          </label>
          {children}
        </div>
      </div>
    </>
  );
};
