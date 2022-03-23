import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
import { UserType } from "../types";

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  user?: UserType;
};
const Modal: FC<ModalProps> = ({ modalIsOpen, setModalIsOpen, user }) => {
  return (
    <>
      {modalIsOpen && (
        <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60">
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg opacity-100">
            <div className="relative py-8 px-5 bg-white opacity-100 rounded-md">
              <div className="mb-5 font-bold p-3 flex justify-between border-b border-mainBorder">
                <h1>
                  Edit Contact "{user?.first_name}
                  {user?.last_name}"
                </h1>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faX}
                  color="gray"
                  onClick={() => setModalIsOpen(false)}
                />
              </div>
              <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="p-3" htmlFor="name">
                      First Name:
                    </label>
                    <input
                      className="mt-2 border border-mainBorder rounded py-3 px-4 mb-3 focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Enter Name Here"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="p-3" htmlFor="name">
                      Last Name:
                    </label>
                    <input
                      className="mt-2 border border-mainBorder rounded py-3 px-4 focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Enter Name Here"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="p-3" htmlFor="gender">
                      Gender:
                    </label>
                    <div className="flex justify-around w-11/12">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-green bg-white checked:bg-green focus:outline-green transition duration-200 mt-1 mr-2 cursor-pointer"
                          name="gender"
                          type="radio"
                          id="male"
                          value="option1"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="male"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-green bg-white checked:bg-green focus:outline-green transition duration-200 mt-1 mr-2 cursor-pointer"
                          name="gender"
                          type="radio"
                          id="inlineRadio2"
                          value="female"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="female"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-green bg-white checked:bg-green focus:outline-green transition duration-200 mt-1 mr-2 cursor-pointer"
                          name="gender"
                          type="radio"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label
                          className="form-check-label inline-block"
                          htmlFor="inlineRadio30"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="p-3" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="mt-2 border border-mainBorder rounded py-3 px-4 mb-3 focus:outline-none w-full"
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="p-3" htmlFor="name">
                      Department
                    </label>
                    <select
                      id="dropdownDefault"
                      data-dropdown-toggle="dropdown"
                      className="form-check-input mx-3 mt-2 px-12 text-textGray border border-mainBorder focus:outline-none rounded px-4 py-3.5 text-center items-start text-start"
                    >
                      <option className="p-4">Department</option>
                      <option className="p-4">Marketing</option>
                      <option className="p-4">Sales</option>
                      <option className="p-4">IT</option>
                      <option className="p-4">Support out</option>
                    </select>
                  </div>

                  <div className="w-full md:w-1/2 px-3">
                    <label className="p-3" htmlFor="contribution">
                      Contribution:
                    </label>
                    <input
                      className="mt-2 border border-mainBorder rounded py-3 px-4 focus:outline-none"
                      id="contribution"
                      type="text"
                      placeholder="e.g. 4.870,65 €"
                    />
                  </div>
                </div>
                <div className="form-check w-full border-b border-mainBorder">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border-2 border-green rounded-sm checked:bg-green focus:outline-none transition duration-200 mt-1 align-top mx-3 cursor-pointer mb-10"
                    type="checkbox"
                    value=""
                    id="isActive"
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="isActive"
                  >
                    Is Active?
                  </label>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="p-2 px-4 border border-mainBorder rounded mr-2">
                    Cancel
                  </button>
                  <button className="p-2 px-5 bg-green rounded text-white">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
