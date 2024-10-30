import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Pages from "./Pages";
import Footer from "./Footer";
import { useTheme } from "../contexts/ThemeContext";

function AppLayout() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <NavBar />
      <main className="flex">
        <Sidebar />
        <Explorer />
        <Pages />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
