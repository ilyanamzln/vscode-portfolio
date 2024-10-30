import Code from "./icons/CodeIcon";
import Files from "./icons/FilesIcon";
import Mail from "./icons/MailIcon";
import Account from "./icons/AccountIcon";
import Settings from "./icons/SettingsIcon";
import SidebarItem from "./SidebarItem";

const sidebarTopItems = [
  {
    Icon: Files,
    path: "/",
  },
  {
    Icon: Code,
    path: "/projects",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: Account,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="flex min-h-[calc(100vh-60px)] w-[3vw] min-w-12 flex-col items-center justify-between bg-sidebarBg py-2">
      <SidebarItem items={sidebarTopItems} />
      <SidebarItem items={sidebarBottomItems} />
    </aside>
  );
}

export default Sidebar;
