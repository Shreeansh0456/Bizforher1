
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from '@/components/shared/Chatbot';
import { useToast } from '@/hooks/use-toast';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PageLayout;
