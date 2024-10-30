import { NAME } from "../constants/title";

const list = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

function NavBar() {
  return (
    <header className="bg-titlebarBg text-textColor">
      <nav className="mx-3 flex h-9 items-center justify-between text-center">
        <div className="mr-auto flex items-center md:gap-x-4">
          <img
            src="/vscode_icon.svg"
            height={20}
            width={20}
            alt="VSCode icon"
          />
          <ul className="flex gap-x-4 max-md:hidden">
            {list.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="md:mr-auto">{NAME} - Visual Studio Code</h1>
        <div className="ml-auto flex gap-x-2">
          <div className="h-3 w-3 rounded-full bg-yellow-200 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-red-400 md:h-4 md:w-4"></div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
