import React from "react";

export default function Contact() {
  return (
    <div>
      <div class="text-gray-200 bg-black">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <h1 class="text-4xl font-bold mb-12 mt-8 text-center"></h1>

          <div class="grid grid-cols-1  bg-black md:grid-cols-2 gap-10 rounded-2xl shadow-lg p-8">
            <form class="space-y-6  bg-black ">
              <div>
                <label class="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label class="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label class="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label class="block mb-1 font-medium">Message</label>
                <textarea
                  placeholder="Your message"
                  rows="5"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
            <div className="ml-50">
              {" "}
              <img src="src\assets\images\world.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
