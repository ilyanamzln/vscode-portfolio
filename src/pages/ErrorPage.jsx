import { useRouteError } from "react-router-dom";
import PageTitle from "../ui/PageTitle";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex flex-col gap-4">
      <PageTitle>Something went wrong 😓</PageTitle>
      <p className="text-red-500">{error.message}</p>
    </div>
  );
}

export default Error;
