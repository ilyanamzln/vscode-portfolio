/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function SidebarItem({ items }) {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {items.map(({ Icon, path }) => (
        <Link to={`${path}`} key={path}>
          <div className="p-2 max-sm:pl-2">
            <Icon
              fill={
                location.pathname === path
                  ? "rgb(225, 228, 232)"
                  : "rgb(106, 115, 125)"
              }
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SidebarItem;
