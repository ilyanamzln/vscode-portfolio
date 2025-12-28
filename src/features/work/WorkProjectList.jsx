import { workProjects } from "../../data/work-projects";
import WorkProjectCard from "./WorkProjectCard";

function WorkProjectList() {
  const sorted = [...workProjects].sort((a, b) => a.id - b.id);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {sorted.map((project) => (
        <WorkProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}

export default WorkProjectList;
