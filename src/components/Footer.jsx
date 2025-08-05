import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <section id="footer" className="bg-[#212121] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="box">
          <p className="mt-4">
            <strong>Lost & Found</strong> is your go-to platform to reunite people with their lost items.
            Whether you've lost something or found a valuable item, post it here and let the community help. 🤝
            <br /><br />
            Let's bring honesty and kindness back into the world, one item at a time.
          </p>
        </div>

        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#reportlost">Report Lost Item</a></li>
            <li><a href="#reportfound">Report Found Item</a></li>
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#contactus">Contact Us</a></li>
          </ul>
        </div>

        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white-500" />
              <span>+91 809-330-XXXX</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-white-500" />
              <span>lostfound.helpdesk@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-white-500" />
              <span>Bhubaneswar, India - 751030</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />
      <h1 className="text-center text-lg">
        Built with ❤️ by <strong>SomBhav Developers</strong> for a safer, more connected community.
      </h1>
    </section>
  );
};

export default Footer;
