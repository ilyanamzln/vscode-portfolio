import { useState } from "react";
import meImage from "../../assets/images/me.png";
import coffee from "../../assets/images/coffee.png";
import matcha from "../../assets/images/matcha.png";
import pizza from "../../assets/images/pizza.png";
import nasiLemak from "../../assets/images/nasi-lemak.png";

function MyProfileImage() {
  const [image, setImage] = useState(coffee);

  function toggleImage() {
    switch (image) {
      case coffee:
        setImage(matcha);
        return;
      case matcha:
        setImage(pizza);
        return;
      case pizza:
        setImage(nasiLemak);
        return;
      case nasiLemak:
        setImage(coffee);
        return;
      default:
        setImage(coffee);
    }
  }

  return (
    <div className="relative">
      <div className="absolute bottom-[10%] left-[5%] h-[90%] w-[90%] rounded-full border-4 bg-accentColor"></div>

      <div className="relative">
        <img src={meImage} alt="My icon" />
      </div>

      <div
        className="image-container absolute left-[60%] top-[65%]"
        onClick={() => toggleImage()}
      >
        <img src={image} width={170} height={170} alt="Snacks" />
      </div>
    </div>
  );
}

export default MyProfileImage;
