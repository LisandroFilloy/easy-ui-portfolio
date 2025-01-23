import { contacts } from '@/constants/contacts';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section className="relative space-y-12 px-6 py-24">

      <div className="flex justify-between xl:ml-48 xl:mr-48 flex-col gap-8 items-center xl:flex-row xl:items-start">

        {contacts.map((contact) => (
          <div className='md:w-96 w-72'>
            <ContactCard
              key={contact.id}
              title={contact.title}
              description={contact.description}
              icon={contact.icon}
              path={contact.path}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contact;
