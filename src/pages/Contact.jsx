import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailNoti = toast.loading("Please wait...");

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.update(emailNoti, {
            render: "E-mail sent, thanks! 🥰",
            type: "success",
            isLoading: false,
            autoClose: 4000,
          });
        },
        (error) => {
          console.log(error.text);
          toast.update(emailNoti, {
            render: "Something went wrong! 😥",
            type: "error",
            isLoading: false,
            autoClose: 4000,
          });
        }
      );

    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto min-h-full pt-52 px-4 pb-28">
        {/* Page title */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="text-center"
        >
          <h1 className="h1">Contact</h1>
          <h2 className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
            Get in touch with me
          </h2>
        </motion.div>
        {/* Contact info container*/}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="flex flex-col sm:flex-row justify-center gap-x-12 gap-y-4 sm:gap-y-0 mb-8"
        >
          {/* E-mail */}
          <div className="flex items-center gap-x-4 justify-center">
            <FiMail className="text-2xl" />
            <div>
              <h3 className="text-xl">E-mail</h3>
              <p className="text-base text-gray-600">rafalfik9@gmail.com</p>
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex items-center gap-x-4 justify-center">
            <BsTelephoneFill className="text-2xl" />
            <div>
              <h3 className="text-xl">Phone</h3>
              <p className="text-base text-gray-600">+48 123-456-789</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center gap-x-4 justify-center">
            <MdLocationOn className="text-2xl" />
            <div>
              <h3 className="text-xl">Location</h3>
              <p className="text-base text-gray-600">Opole, Wrocław / Poland</p>
            </div>
          </div>
        </motion.div>
        {/* Form */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="w-full bg-white border shadow-xl p-12  xl:p-4 relative"
        >
          <form
            className="flex flex-col gap-8 mt-8"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-primary text-lg font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-primary text-lg font-bold">
                Your E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="message"
                className="font-primary text-lg font-bold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                className="bg-gray-100 py-4 px-6  text-primary rounded-lg outline-none border-none font-medium"
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
