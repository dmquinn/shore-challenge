import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(fas);

const sidebar = () => {
  return (
    <div>
      <aside
        className="w-64 h-screen bg-gradient-to-b from-[#192842] to-[#382c50]"
        aria-label="Sidebar"
      >
        <img
          className="p-10"
          src="https://www.quantum-partners.de/en/wp-content/uploads/sites/4/2020/07/Inventorum.png"
          alt=""
        />

        <div className="overflow-y-auto px-2">
          <ul className="space-y-10 p-10">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faDesktop} color="white" />
                <span className="ml-3 text-white">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faFileLines} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Invoices & returns
                </span>
              </Link>{" "}
            </li>
            <li>
              <Link to="/">
                {" "}
                <FontAwesomeIcon icon={faUser} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Contacts
                </span>
              </Link>{" "}
            </li>
            <li>
              <Link to="/">
                {" "}
                <FontAwesomeIcon icon={faClipboardList} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Inventory
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Reports
                </span>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default sidebar;
