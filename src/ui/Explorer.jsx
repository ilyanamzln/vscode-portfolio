import { useState } from "react";
import { FILES_PATH } from "../constants/path";
import { Link } from "react-router-dom";
import ChevronRight from "./icons/ChevronRight";

function Explorer() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex min-w-min flex-col items-start bg-explorerBg p-3 text-white max-sm:hidden">
      <p className="text-xl font-medium uppercase">Explorer</p>

      <div className="flex min-w-44 flex-col">
        <div
          className="flex cursor-pointer items-center pt-2"
          onClick={() => setShow(!show)}
        >
          <ChevronRight
            className="mr-2"
            style={show ? { transform: "rotate(90deg)" } : {}}
          />
          <p htmlFor="portfolio-checkbox" className="text-lg font-semibold">
            Portfolio
          </p>
        </div>

        {show && (
          <div className="px-6">
            {FILES_PATH.map((file) => (
              <Link
                to={file.path}
                key={file.name}
                className="flex gap-x-2 hover:bg-explorerHoverBg"
              >
                <img src={file.icon} alt={file.name} height={20} width={20} />
                <p className="text-lg font-medium">{file.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
