import React from 'react';
import { Twitter, Instagram, Twitch, Youtube, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
    >
        {children}
    </a>
);


const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or want to collaborate? Drop us a line or connect with us on social media.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 shadow-2xl shadow-blue-500/10">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <MessageSquare className="w-8 h-8 mr-3 text-blue-500"/>
                    Send a Message
                </h3>
                <form className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="relative">
                         <textarea id="message" name="message" rows={5} placeholder="Your Message" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
                        Submit
                    </button>
                </form>
            </div>

            {/* Socials Section */}
            <div className="flex flex-col items-center justify-center text-center bg-gray-900/50 border border-gray-800 rounded-lg p-8 h-full">
                 <h3 className="text-3xl font-bold text-white mb-6">Connect With Us</h3>
                 <p className="text-gray-400 mb-8 max-w-sm">
                    Follow our journey and stay updated with the latest news on our social platforms. We're active and love to engage with our community!
                 </p>
                 <div className="flex space-x-6">
                    <SocialIcon href="#"><Twitter size={24} /></SocialIcon>
                    <SocialIcon href="#"><Instagram size={24} /></SocialIcon>
                    <SocialIcon href="#"><Twitch size={24} /></SocialIcon>
                    <SocialIcon href="#"><Youtube size={24} /></SocialIcon>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;