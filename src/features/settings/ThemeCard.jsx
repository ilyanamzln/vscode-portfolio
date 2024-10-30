/* eslint-disable react/prop-types */
import { useTheme } from "../../contexts/ThemeContext";

function ThemeCard({ themeType }) {
  const { changeTheme } = useTheme();
  const { name, publisher, theme, img } = themeType;

  return (
    <div className="flex flex-col items-center gap-y-2 bg-mainBg p-2 text-center text-textColor">
      <img src={img} width={60} height={60} alt={name} />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-base">{publisher}</p>
      </div>
      <button
        className="bg-accentColor px-4 text-lg font-medium"
        onClick={() => {
          changeTheme(theme);
        }}
      >
        Set Theme
      </button>
    </div>
  );
}

export default ThemeCard;
