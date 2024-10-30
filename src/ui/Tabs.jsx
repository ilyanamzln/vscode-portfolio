import { Link, useLocation } from "react-router-dom";
import { FILES_PATH } from "../constants/path";

function Tabs() {
  const location = useLocation();

  return (
    <div className="flex overflow-x-auto bg-tabsBg">
      {FILES_PATH.map((file) => (
        <Link
          to={file.path}
          key={file.name}
          className={`${location.pathname === file.path ? "border-t-accentColor bg-tabActiveBg" : "bg-tabBg"} flex min-w-max gap-x-2 border-2 border-transparent border-r-tabBorder px-3 text-textColor md:py-1`}
        >
          <img src={file.icon} height={20} width={20} alt={file.name} />
          <p className="text-lg font-medium">{file.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
