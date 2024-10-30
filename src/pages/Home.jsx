import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import Button from "../ui/Button";
import MyName from "../features/home/MyName";

function Home() {
  return (
    <div className="relative flex min-h-[75svh] items-center overflow-hidden">
      <Helmet>
        <title>{PAGE_TITLE} ✌️</title>
      </Helmet>
      <div className="absolute left-10 z-10 gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
        <p className="uppercase">I build</p>
        <p className="uppercase">Websites</p>
      </div>
      <div className="z-20 gap-y-10 p-4 md:px-10">
        <MyName />
        <Button to="/projects" className="bg-accentColor text-white">
          View Work
        </Button>
        <Button to="/contact" className="text-textColor">
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default Home;
