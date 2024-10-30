/* eslint-disable react/prop-types */
function PageTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold capitalize text-textColor">
      {children}
    </h2>
  );
}

export default PageTitle;
