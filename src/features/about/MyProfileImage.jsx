import { useState } from "react";

function MyProfileImage() {
  const [image, setImage] = useState("coffee");

  function toggleImage() {
    switch (image) {
      case "coffee":
        setImage("matcha");
        return;
      case "matcha":
        setImage("pizza");
        return;
      case "pizza":
        setImage("nasi-lemak");
        return;
      case "nasi-lemak":
        setImage("coffee");
        return;
      default:
        setImage("coffee");
    }
  }

  return (
    <div className="relative">
      <div className="absolute bottom-[10%] left-[5%] h-[90%] w-[90%] rounded-full border-4 bg-accentColor"></div>

      <div className="relative">
        <img src={`/src/assets/images/me.png`} alt="My icon" />
      </div>

      <div
        className="image-container absolute left-[60%] top-[65%]"
        onClick={() => toggleImage()}
      >
        <img
          src={`/src/assets/images/${image}.png`}
          width={170}
          height={170}
          alt="Snacks"
        />
      </div>
    </div>
  );
}

export default MyProfileImage;
