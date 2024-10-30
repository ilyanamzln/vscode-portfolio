import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className="w-full overflow-x-auto bg-mainBg">
      <Tabs />
      <section className="h-[85vh] bg-mainBg px-6 py-4">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
