/* eslint-disable react/prop-types */
function Tag({ tagName }) {
  return (
    <div className="cursor-pointer rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-textColor hover:text-white">
      <span className="p-3">{tagName}</span>
    </div>
  );
}

export default Tag;
