import { Dispatch, FC, SetStateAction } from "react";
import { UserType } from "../types";

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  userToEdit?: UserType;
};
const Modal: FC<ModalProps> = ({ modalIsOpen, setModalIsOpen, userToEdit }) => {
  console.log(userToEdit);

  return (
    <>
      {modalIsOpen && (
        <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50">
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100">
            <div className="relative py-8 px-5 bg-white opacity-100">
              <div className="w-full flex justify-start text-gray-600 mb-3"></div>
              <h1 className="mb-4">Edit Contact {userToEdit?.first_name}</h1>
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Owner Name
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="James"
              />
              <label
                htmlFor="email2"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Card Number
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full"></div>
                <input
                  id="email2"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                />
              </div>
              <label
                htmlFor="expiry"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Expiry Date
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                <input
                  id="expiry"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="MM/YY"
                />
              </div>
              <label
                htmlFor="cvc"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                CVC
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                <input
                  id="cvc"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                aria-label="close modal"
                role="button"
              ></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
