import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vc2ib1j",
        "template_sc3mj4b",
        form.current,
        "Gqqv-f1PPeu27Tpe6"
      )
      .then(
        () => {
          alert("Feedback sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send feedback: " + error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] flex flex-col items-center text-sm"
    >
      <p className="pt-30 text-lg text-blue-600 font-medium pb-2">
        For Feedback
      </p>
      <h1 className="text-2xl font-semibold text-slate-700 text-center pb-4">
        Help us improve NEC Capsule—share your ideas and exam experience! <br />
        Did our pages help in your license exam? <br />
        How many related questions did you find?
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="text-black/70" htmlFor="name">
            Your Name
          </label>
          <input
            name="user_name"
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="text"
            required
          />
        </div>
        <div className="w-full">
          <label className="text-black/70" htmlFor="email">
            Your Email
          </label>
          <input
            name="user_email"
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="email"
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black/70" htmlFor="feedback">
          Feedback
        </label>
        <textarea
          name="message"
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-15 mb-35 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
      >
        Send Feedback
      </button>
    </form>
  );
};

export default Feedback;
