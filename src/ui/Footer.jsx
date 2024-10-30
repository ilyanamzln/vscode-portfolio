import SourceControlIcon from "./icons/SourceControlIcon";
import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import ReactIcon from "./icons/ReactIcon";
import CheckIcon from "./icons/CheckIcon";
import BellIcon from "./icons/BellIcon";
import FooterItem from "./FooterItem";

function Footer() {
  return (
    <footer className="flex h-6 justify-between bg-bottombarBg px-2 text-base text-textColor max-sm:text-sm">
      <div className="flex">
        <FooterItem icon={<SourceControlIcon />} label="main" />
        <FooterItem icon={<ErrorIcon />} />
        <FooterItem icon={<WarningIcon />} />
      </div>

      <div className="flex">
        <FooterItem label="UTF-8" />
        <FooterItem icon={<ReactIcon />} label="Reactjs" />
        <FooterItem icon={<CheckIcon />} label="Prettier" />
        <FooterItem icon={<BellIcon />} label="" />
      </div>
    </footer>
  );
}

export default Footer;
