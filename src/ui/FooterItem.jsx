/* eslint-disable react/prop-types */
function FooterItem({ icon, label }) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-1.5 px-2 hover:bg-bottombarHoverBg">
      {icon}
      {label}
    </div>
  );
}

export default FooterItem;
