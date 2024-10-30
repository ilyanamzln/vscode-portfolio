import { Helmet } from "react-helmet";
import { PAGE_TITLE } from "../constants/title";
import ContactSocials from "../features/contact/ContactSocials";
import PageTitle from "../ui/PageTitle";

function Contact() {
  return (
    <div className="line-container flex flex-col gap-4">
      <Helmet>
        <title>{PAGE_TITLE} | Contact ✉️</title>
      </Helmet>
      <PageTitle>Reach Out Via Socials 👋</PageTitle>
      <ContactSocials />
    </div>
  );
}

export default Contact;
