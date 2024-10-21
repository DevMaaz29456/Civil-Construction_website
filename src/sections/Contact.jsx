import React from "react";

const Contact = () => {
  return (
    <section className="bg-white">
      <div id="contact" className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Section with Image */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Contact Background"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147..."
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Get in Touch with Us!
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              We’d love to hear from you. Send us a message, and we’ll get back
              to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Right Section with Form */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Form */}
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Fill out the form below and we’ll get back to you within 24 hours.
            </p>
            <form className="mt-8 grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Full Name"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-500 p-4 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
