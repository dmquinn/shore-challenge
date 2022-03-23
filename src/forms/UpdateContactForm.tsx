import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";

type FormProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};
const UpdateContact: FC<FormProps> = ({ setModalIsOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    department: "",
    active: false,
    contribution: "",
  });
  const [resultStatus, setResultStatus] = useState<string | undefined>(
    undefined
  );

  const radioButtons = ["male", "female", "other"];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status >= 200 && response.status < 300) {
        console.log("data", data, response);
        setResultStatus("success");
        setTimeout(() => {
          setModalIsOpen(false);
        }, 2000);
        return data;
      }
    } catch (err) {
      setResultStatus("error");
      setTimeout(() => {
        setModalIsOpen(false);
      }, 2000);

      console.log(err);
    }
  };

  if (resultStatus === "success") {
    return <div className="px-3">Great! User was updated successfully</div>;
  }
  if (resultStatus === "error") {
    return <div className="px-3">Oops! Something went wrong!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="p-3" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="mt-2 border border-mainBorder rounded py-3 px-4 mb-3 focus:outline-none"
            id="firstName"
            type="text"
            placeholder="Enter Name Here"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="p-3" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="mt-2 border border-mainBorder rounded py-3 px-4 focus:outline-none"
            id="lastName"
            type="text"
            placeholder="Enter Name Here"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="p-3" htmlFor="gender">
            Gender:
          </label>
          <div className="flex justify-around w-11/12">
            {radioButtons.map((button) => {
              return (
                <div className="form-check form-check-inline" key={button}>
                  <input
                    className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-green bg-white checked:bg-green focus:outline-green transition duration-200 mt-1 mr-2 cursor-pointer"
                    name="gender"
                    type="radio"
                    id="inlineRadio3"
                    value={button}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    required
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="inlineRadio30"
                  >
                    {button}
                  </label>
                </div>
              );
            })}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
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
            className="form-check-input mx-3 mt-2 px-12 text-textGray border border-mainBorder focus:outline-none rounded px-4 py-3.5 text-center justify-center w-100"
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
          >
            <option className="w-100">Department</option>
            <option className="w-100">Marketing</option>
            <option className="w-100">Sales</option>
            <option className="w-100">IT</option>
            <option className="w-100">Support</option>
          </select>
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label className="p-3" htmlFor="contribution">
            Contribution:
          </label>
          <input
            className="mt-2 border border-mainBorder rounded py-3 px-4 focus:outline-none"
            id="contribution"
            type="number"
            placeholder="e.g. 4.870,65 €"
            onChange={(e) =>
              setFormData({ ...formData, contribution: e.target.value })
            }
            required
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
        <label className="form-check-label inline-block" htmlFor="isActive">
          Is Active?
        </label>
      </div>
      <div className="flex justify-end mt-2">
        <button
          className="p-2 px-4 border border-mainBorder rounded mr-2"
          onClick={() => setModalIsOpen(false)}
        >
          Cancel
        </button>
        <button className="p-2 px-5 bg-green rounded text-white">Save</button>
      </div>
    </form>
  );
};

export default UpdateContact;
