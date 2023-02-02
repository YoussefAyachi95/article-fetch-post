import { useLocation } from "react-router-dom";
import  ContactForm  from '../components/ContactForm'

const ContactPage = () => {
  const queryString = useLocation().search;

  const name2 = queryString.split("=")[1];
  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");

  return (
    <div>
      <h1>Hello {name}, please Contact us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim
        ipsam asperiores autem reprehenderit velit assumenda aliquam ex vero
        iure?
      </p>
      <ContactForm/>
    </div>
  );
};

export default ContactPage;
