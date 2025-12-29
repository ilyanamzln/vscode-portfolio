import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import PageTitle from "../ui/PageTitle";
import WorkProjectList from "../features/work/WorkProjectList";

function Work() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | Professional 💼</title>
      </Helmet>
      <PageTitle>Professional Experience ⭐</PageTitle>
      <WorkProjectList />
      <div></div>
    </div>
  );
}

export default Work;
