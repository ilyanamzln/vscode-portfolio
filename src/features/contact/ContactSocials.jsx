import { Link } from "react-router-dom";
import { SOCIALS } from "../../constants/social";

function ContactSocials() {
  return (
    <div className="flex flex-col gap-1">
      <p className="line text-xl text-textColor">.socials &#123; </p>
      {SOCIALS.map((social) => (
        <div className="line" key={social.social}>
          <span className="pl-5 text-xl text-textColor md:pl-8">
            {social.social}:{" "}
          </span>
          <Link
            to={social.href}
            target="_blank"
            className="text-xl text-accentColor hover:underline"
          >
            {social.un}
          </Link>
        </div>
      ))}
      <p className="line text-base text-textColor">&#125;</p>
    </div>
  );
}

export default ContactSocials;
