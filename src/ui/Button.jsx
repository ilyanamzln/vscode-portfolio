/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ to, className, children }) {
  return (
    <Link to={to}>
      <button
        className={`mr-3 mt-10 min-w-44 border-2 border-accentColor px-6 py-2.5 font-medium md:mr-6 md:px-9 md:text-xl ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
