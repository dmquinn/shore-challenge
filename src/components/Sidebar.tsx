import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const sidebar = () => {
  return (
    <div>
      <aside
        className="w-64 h-screen bg-gradient-to-b from-[#192842] to-[#382c50]"
        aria-label="Sidebar"
      >
        <img
          className="p-10 py-5 logo text-2xl"
          src="https://www.quantum-partners.de/en/wp-content/uploads/sites/4/2020/07/Inventorum.png"
        />

        <div className="overflow-y-auto px-3">
          <ul className="space-y-5 p-10">
            <li>
              <a href="#" className="items-center p-2">
                <FontAwesomeIcon icon={faDesktop} color="white" />
                <span className="ml-3 text-white">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faFileLines} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Invoices & returns
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2">
                <FontAwesomeIcon icon={faUser} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Contacts
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2">
                <FontAwesomeIcon icon={faClipboardList} color="white" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Inventory
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2">
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Reports
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default sidebar;
