import MyProfileImage from "./MyProfileImage";
import MyProfileText from "./MyProfileText";

function MyProfile() {
  return (
    <div className="flex flex-col items-center gap-x-6 text-textColor xl:flex-row">
      <div className="xl:order-last">
        <MyProfileImage className="xl:order-last" />
      </div>
      <div className="xl:basis-1/2">
        <MyProfileText className="xl:basis-1/2" />
      </div>
    </div>
  );
}

export default MyProfile;
