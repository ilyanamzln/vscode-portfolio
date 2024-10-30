import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import PageTitle from "../ui/PageTitle";
import MyProfile from "../features/about/MyProfile";

function About() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | About 👻</title>
      </Helmet>
      <PageTitle>A little about me 👻</PageTitle>
      <MyProfile />
    </div>
  );
}

export default About;
