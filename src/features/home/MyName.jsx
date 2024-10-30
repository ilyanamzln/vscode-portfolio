import { JOB_TITLE, NAME } from "../../constants/title";

function MyName() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-[#eee] md:text-2xl xl:text-3xl">
        Hi there!👋 I&apos;m
      </h2>
      <h2 className="text-3xl font-bold text-[#eee] md:text-5xl xl:text-8xl">
        {NAME}
      </h2>
      <div className="typewriter w-max">
        <h2 className="text-xl font-bold text-[#eee] md:text-3xl">
          {JOB_TITLE}
        </h2>
      </div>
    </div>
  );
}

export default MyName;
