import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsHero from "../ContactsHero/ContactsHero";

const ContactsPage = () => {
    return ( 
        <main>
            <ContactsHero/>
            <div className="container">
                <ContactsForm/>
            </div>
        </main>
     );
}
 
export default ContactsPage;