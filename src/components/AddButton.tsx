import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = () => {
  return (
    <button
      className="flex items-center py-2 px-5 bg-green text-white rounded w-56 ml-10"
      onClick={() => alert("Add Contact")}
    >
      <FontAwesomeIcon icon={faPlus} className="px-3" />
      <span>Add Contact</span>
    </button>
  );
};

export default AddButton;
