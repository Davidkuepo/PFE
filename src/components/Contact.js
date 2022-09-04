import facebook from '../images/icon/facebook.png';
import telegram from '../images/icon/telegram.png';
import gmail from '../images/icon/gmail.png';
import whatsapp from '../images/icon/whatsapp.png';
import React, { useState } from "react";

const FORM_ENDPOINT = ""; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
      <div class="flex space-x-28 shadow-lg shadow-gray-600 rounded-lg ml-72 sm:max-w-[996px] py-6">
          <div class="space-y-3 py-4 ml-28">
              <img src={facebook} alt="" class="h-12 w-12"/>
              <img src={gmail} alt="" class="h-12 w-12"/>
              <img src={telegram} alt="" class="h-12 w-12"/>
              <img src={whatsapp} alt="" class="h-12 w-12"/>
          </div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
     
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;