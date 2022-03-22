import Contacts from "./Contacts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FC } from "react";

const BasicLayout: FC = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <main className="main flex flex-col flex-grow">
        <Header />
        <Contacts users={[]} />
      </main>
    </div>
  );
};

export default BasicLayout;
