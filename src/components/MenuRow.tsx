import {
  faBolt,
  faChartLine,
  faClipboardList,
  faDiagramProject,
  faHouse,
  faInbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACTS_ROUTE } from "../Routes";

const MenuRow = () => {
  const [active, setActive] = useState<string>("Contacts");
  const links = [
    { path: "/", icon: faHouse, text: "Home" },
    { path: "/", icon: faClipboardList, text: "Product Management" },
    { path: CONTACTS_ROUTE, icon: faUser, text: "Contacts" },
    { path: "/", icon: faInbox, text: "Orders" },
    { path: "/", icon: faChartLine, text: "Reports" },
    { path: "/", icon: faDiagramProject, text: "API & Apps" },
    { path: "/", icon: faBolt, text: "Integrations" },
  ];
  const handleClick = (e: any) => {
    setActive(e);
  };
  return (
    <div className="flex justify-between px-20 pt-5">
      {links.map((link) => {
        return (
          <Link
            to={link.path}
            onClick={() => handleClick(link.text)}
            key={link.text}
          >
            <FontAwesomeIcon
              icon={link.icon}
              className={
                active === link.text
                  ? "border border-mainBorder rounded-full p-3 w-4 h-4 bg-green bg-opacity-20 text-green"
                  : "border border-mainBorder rounded-full p-3 w-4 h-4"
              }
              key={link.text}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MenuRow;
