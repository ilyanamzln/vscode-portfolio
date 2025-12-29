import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import PageTitle from "../ui/PageTitle";
import Notes from "../features/readme/Notes";

function ReadMe() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | README ℹ️</title>
      </Helmet>
      <PageTitle>README / About this Portfolio</PageTitle>
      <Notes />
    </div>
  );
}
export default ReadMe;
