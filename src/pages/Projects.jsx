import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import ProjectList from "../features/projects/ProjectList";
import PageTitle from "../ui/PageTitle";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | Projects 💼</title>
      </Helmet>
      <PageTitle>Stuff I&apos;ve built so far 🪄</PageTitle>
      <ProjectList />
      <div></div>
    </div>
  );
}

export default Projects;
