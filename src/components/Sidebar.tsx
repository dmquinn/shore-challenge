import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faHouse,
  faInbox,
  faUser,
  faChartLine,
  faDiagramProject,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CONTACTS_ROUTE } from "../Routes";
import { FC, useState } from "react";

const Sidebar: FC = () => {
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
    <div>
      <aside className="w-72 h-screen">
        <img
          className="p-14"
          src="data:image/png;base64,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"
          alt=""
        />

        <div className="overflow-y-auto">
          <ul>
            {links.map((link) => {
              return (
                <li
                  key={link.text}
                  className={
                    active === link.text
                      ? "bg-green w-100 p-5 bg-opacity-20 px-10 border-r-2 border-green text-green"
                      : "p-5 px-10"
                  }
                >
                  <Link to={link.path} onClick={() => handleClick(link.text)}>
                    <FontAwesomeIcon icon={link.icon} />
                    <span className="px-3">{link.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
