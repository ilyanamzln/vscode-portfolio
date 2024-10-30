import Tag from "./Tag";
import GithubIcon from "../../ui/icons/GithubIcon";
import LinkIcon from "../../ui/icons/LinkIcon";
import LinkButton from "./LinkButton";
import CardImage from "./CardImage";

/* eslint-disable react/prop-types */
function ProjectCard({ project }) {
  const { title, description, image, emoji, color, tags, sourceCode, demo } =
    project;

  return (
    <div className="flex flex-col justify-between bg-articleBg text-textColor hover:shadow-lg">
      <div>
        <CardImage image={image} emoji={emoji} color={color} title={title} />

        <div className="flex flex-col gap-y-4 p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-base font-medium">{description}</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-4">
        {sourceCode && (
          <LinkButton to={sourceCode}>
            <GithubIcon />
            Source Code
          </LinkButton>
        )}
        {demo && (
          <LinkButton to={demo}>
            <LinkIcon />
            Live Demo
          </LinkButton>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
