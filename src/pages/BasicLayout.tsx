import Contacts from "./Contacts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import MenuRow from "../components/MenuRow";

const BasicLayout = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function countDeviceWidth() {
      window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    }
    window.addEventListener("resize", countDeviceWidth);
    // Call handler right away so state gets updated with initial window size
    countDeviceWidth();
    return () => window.removeEventListener("resize", countDeviceWidth);
  }, []);

  return (
    <div className="flex flex-row min-h-screen">
      {!isMobile && <Sidebar />}
      <main className="main flex flex-col flex-grow">
        {isMobile && <MenuRow />}
        <Header />
        <Contacts users={[]} />
      </main>
    </div>
  );
};

export default BasicLayout;
