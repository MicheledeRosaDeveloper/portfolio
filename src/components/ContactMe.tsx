import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();



  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();

    emailjs
      .sendForm('service_t2qfg0s', 'template_ljekx77', form.current, {
        publicKey: '3asjYRXhA8oV2Sfb7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-4xl mx-auto rounded shadow-lg m-10 border" id="contact">
      <h1 className="text-3xl font-bold text-center m-4">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} >
        <div className='flex justify-between items-start space-x-4 p-4'>
        <div className="flex-1">
          <div className="-mx-2">
            <div className="px-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="grow" placeholder="Username" 
                />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" name ="email_from" required className="grow" placeholder="Email" />
            </label>
          </div>
        </div>
        <div className="flex-1">
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg w-full "
            name='message'
          ></textarea>
        </div>
        </div>
        <div className="flex justify-end m-4">
          <button type="submit" className="btn btn-accent w-32" >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
