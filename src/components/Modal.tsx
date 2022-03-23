import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
import { UserType } from "../types";
import UpdateContactForm from "../forms/UpdateContactForm";

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  user?: UserType;
};
const Modal: FC<ModalProps> = ({ modalIsOpen, setModalIsOpen, user }) => {
  return (
    <>
      {modalIsOpen && (
        <div className="fixed py-12 transition duration-150 ease-in-out z-10  top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60">
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100">
            <div className="relative py-8 px-5 bg-white opacity-100 rounded-md">
              <div className="mb-5 font-bold p-3 flex justify-between border-b border-mainBorder">
                <h1>
                  Edit Contact "{user?.first_name} {user?.last_name}"
                </h1>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faX}
                  color="gray"
                  onClick={() => setModalIsOpen(false)}
                />
              </div>
              <UpdateContactForm setModalIsOpen={setModalIsOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
