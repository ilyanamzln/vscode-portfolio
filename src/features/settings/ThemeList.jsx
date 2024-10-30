import { THEMES } from "../../constants/theme";
import ThemeCard from "./ThemeCard";

function ThemeList() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-5">
      {THEMES.map((theme) => (
        <ThemeCard themeType={theme} key={theme.name} />
      ))}
    </div>
  );
}

export default ThemeList;
