import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
const Header: FC = () => {
  return (
    <div className="p-10 text-2xl">
      <FontAwesomeIcon icon={faBars} />
      <span className="px-5">Contacts</span>
    </div>
  );
};

export default Header;
