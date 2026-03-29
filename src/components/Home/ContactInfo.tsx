
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
          <MessageCircle size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">WhatsApp Contact</h3>
        <p className="text-gray-600">+91 81089 40071</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
          <Mail size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Email</h3>
        <p className="text-gray-600">info@bizforher.in</p>
        <p className="text-gray-600">support@bizforher.in</p>
      </div>
    </div>
  );
};

export default ContactInfo;
