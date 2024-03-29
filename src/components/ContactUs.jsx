import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact-us" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
                <input type="text" id="name" name="name" className="border border-gray-300 rounded-md w-full px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md w-full px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600">Send Message</button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span> 123 Main Street, City, Country</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> +123 456 7890</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
