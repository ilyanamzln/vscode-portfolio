import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import ThemeList from "../features/settings/ThemeList";
import PageTitle from "../ui/PageTitle";

function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | Settings ⚙️</title>
      </Helmet>
      <PageTitle>Manage themes ✨</PageTitle>
      <ThemeList />
    </div>
  );
}

export default Settings;
