import Contacts from "./Contacts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FC } from "react";

const BasicLayout: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        <Contacts users={[]} />
      </div>
    </div>
  );
};

export default BasicLayout;
