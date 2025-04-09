import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen p-8 font-montserrat">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Contact Us
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Have questions or feedback? We'd love to hear from you. Reach out to us through one of the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-4">
              We're always looking to improve and value your input. Whether you have a question, suggestion, or just want to say hello, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">contact@armadarulesetcollective.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💬</span>
                <div>
                  <h3 className="text-lg font-medium text-white">Discord</h3>
                  <p className="text-gray-300">Join our Discord server to chat with the community</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🐦</span>
                <div>
                  <h3 className="text-lg font-medium text-white">Twitter</h3>
                  <p className="text-gray-300">Follow us for updates and announcements</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl ring-1 ring-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-4">Submit Feedback</h2>
            <p className="text-gray-300 mb-4">
              Help us improve by providing feedback on our website, resources, or organized play programs.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C14949]"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#C14949] hover:bg-[#D15A5A] text-white px-6 py-3 rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 