import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="mt-8">
        <h3 className="text-center text-4xl font-semibold">
          Contact <span className="text-cyan-500">Me</span>
        </h3>
        <p className="mt-3 text-center text-lg text-gray-400">Get in touch</p>

        <div className="grid w-full place-items-center bg-gray-900 py-10">
          <div className="flex w-3/4 max-w-xl flex-col rounded-md bg-white shadow-md lg:max-w-4xl lg:flex-row">
            <div
              className="w-full rounded-md bg-cyan-500 p-8 transition md:block md:hover:scale-y-110 lg:w-1/2"
              id="contact_info"
            >
              <div className="flex justify-start">
                <h2 className="text-xl text-white">Contact Information</h2>
              </div>
              <div className="mt-6 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-8 w-8 text-slate-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs text-slate-200">Name :</h2>
                  <p className="text-xs text-white">Rutam Bhagat</p>
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-8 w-8 text-slate-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs text-slate-200">Email :</h2>
                  <p className="text-xs text-white">rutambhagat@gmail.com</p>
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-8 w-8 text-slate-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs text-slate-200">Phone :</h2>
                  <p className="text-xs text-white">7558239156</p>
                </div>
              </div>

              <div className="mt-5 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-8 w-8 text-slate-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs text-slate-200">Address :</h2>
                  <p className="text-xs text-white">Maharashtra, India</p>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xjvzqyjw"
              method="POST"
              className="w-full px-6 py-8 lg:w-1/2"
              id="contact_us"
            >
              <div className="flex justify-start">
                <h2 className="text-xl text-blue-800">Get In Touch</h2>
              </div>
              <input
                required
                name="Name"
                type="text"
                placeholder="Enter Your Name"
                className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
              />
              <br />
              <input
                required
                name="Email"
                type="email"
                placeholder="Enter Your Email"
                className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
              />
              <br />
              <input
                required
                name="Subject"
                type="text"
                placeholder="Subject"
                className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
              />
              <br />
              <textarea
                required
                name="Message"
                placeholder="Enter your Message here"
                className="my-2 h-20 w-full resize-none rounded-md border bg-gray-300 px-3 py-2 text-xs text-gray-600 outline-none focus:shadow-sm"
              ></textarea>
              <br />
              <button
                type="submit"
                value="Send"
                className="cursor-pointer rounded-md bg-cyan-500 px-4 py-2 text-xs text-white hover:shadow-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
