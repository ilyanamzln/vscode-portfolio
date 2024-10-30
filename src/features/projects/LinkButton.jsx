/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LinkButton({ to, className, children }) {
  return (
    <Link
      to={to}
      target="_blank"
      className={`${className} mr-2 flex flex-row items-center justify-center gap-2 border-2 border-transparent p-1.5 hover:border-accentColor`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
