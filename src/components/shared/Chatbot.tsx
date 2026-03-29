
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with BizForHer 2025. Ask me about registration, competition details, sample cases, eligibility, or anything else!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();
    let responseText = "I'm sorry, I don't have specific information about that. For detailed questions, please email us at info@bizforher.in or join our WhatsApp community for quick support.";

    // Male/Boys participation - NEW CONDITION
    if (query.includes('boy') || query.includes('boys') || query.includes('male') ||
        query.includes('males') || query.includes('men') || query.includes('man') ||
        (query.includes('can') && (query.includes('boy') || query.includes('male'))) ||
        query.includes('guys') || query.includes('gentleman') || query.includes('gentlemen') ||
        query.includes('co-ed') || query.includes('coed') || query.includes('mixed gender') ||
        query.includes('both gender') || query.includes('all gender')) {
      responseText = "No, BizForHer is exclusively for girls and young women. This competition is specifically designed to empower female high school students (Grades 9-12) and provide them with opportunities in business and entrepreneurship. All team members must be girls currently studying in high school. We believe in creating a dedicated space for girls to shine and develop their business acumen.";
    }

    // Competition basics - enhanced with more keywords
    else if (query.includes('what is bizforher') || query.includes('about bizforher') || query.includes('tell me about') ||
        query.includes('competition') || query.includes('contest') || query.includes('what is this') ||
        query.includes('explain') || query.includes('describe') || query.includes('overview') ||
        query.includes('business case') || query.includes('case study') || query.includes('details') ||
        query.includes('purpose') || query.includes('objective') || query.includes('goal') ||
        query.includes('mission') || query.includes('vision') || query.includes('what does') ||
        query.includes('information') || query.includes('know more') || query.includes('learn more')) {
      responseText = "BizForHer is India's premier business case competition exclusively for high school girls (grades 9-12). It's designed to empower young women by challenging them to analyze real-world business problems and develop strategic solutions. The competition features multiple rounds with exciting prizes, scholarships worth lakhs, and opportunities to showcase your business acumen on a national platform.";
    }

    // Registration - enhanced keywords
    else if (query.includes('register') || query.includes('registration') || query.includes('sign up') ||
             query.includes('apply') || query.includes('application') || query.includes('join') ||
             query.includes('participate') || query.includes('enroll') || query.includes('entry') ||
             query.includes('how to apply') || query.includes('how to register') || query.includes('signup') ||
             query.includes('get started') || query.includes('start') || query.includes('begin')) {
      responseText = "Registration is FREE and completely online! You need to form a team of 2-4 girls from grades 9-12. Visit unstop.com and search for 'BizForHer 2025' or use our direct registration link. Registration deadline is August 5, 2025, 12:00 PM IST. You'll need team details, school information, and contact details for all members.";
    }

    // Cases and solutions - enhanced keywords
    else if (query.includes('semi') || query.includes('finalist') || query.includes('qualified') ||
             query.includes('teams') || query.includes('list')) {
      responseText = "🎉 Congratulations! The semi-finalists have been announced! We have 50 amazing teams that have qualified for the next round. You can view the complete list of semi-finalists on our homepage - just scroll down to see all qualified teams divided by private and public schools.";
    }
    else if (query.includes('sample') || query.includes('mock') || query.includes('practice') ||
             query.includes('example') || query.includes('demo') || query.includes('trial') ||
             query.includes('sample solution') || query.includes('mock solution') || query.includes('solution guide') ||
             query.includes('preparation') || query.includes('prepare') || query.includes('study material') ||
             query.includes('resources') || query.includes('materials') || query.includes('format')) {
      responseText = "Yes! We provide a sample solution guide to help you prepare. You can download the Sample Solution Guide from our website. This gives you a clear understanding of the expected analysis depth and presentation style. It's available for free download on our homepage and apply page.";
    }

    // Eligibility - enhanced keywords
    else if (query.includes('eligible') || query.includes('eligibility') || query.includes('qualify') ||
             query.includes('requirements') || query.includes('criteria') || query.includes('who can') ||
             query.includes('can i') || query.includes('grade') || query.includes('class') ||
             query.includes('age') || query.includes('school') || query.includes('curriculum') ||
             query.includes('cbse') || query.includes('icse') || query.includes('state board') ||
             query.includes('international') || query.includes('age limit') || query.includes('standard')) {
      responseText = "You're eligible if you're a girl currently in grades 9-12 (any curriculum - CBSE, ICSE, State Board, International, etc.) in India. Teams must have 2-4 members, all girls in high school. No prior business knowledge is required! The competition is designed for all skill levels.";
    }

    // Timeline/Dates - enhanced keywords
    else if (query.includes('when') || query.includes('date') || query.includes('deadline') ||
             query.includes('timeline') || query.includes('schedule') || query.includes('time') ||
             query.includes('start') || query.includes('end') || query.includes('august') ||
             query.includes('september') || query.includes('submission') || query.includes('result') ||
             query.includes('final') || query.includes('round') || query.includes('phase') ||
             query.includes('calendar') || query.includes('duration') || query.includes('period')) {
      responseText = "Key dates for BizForHer 2025:\n• Registration Deadline: August 5, 2025 (12:00 PM IST)\n• Round 1: August 5-15, 2025\n• Round 1 Results: August 29, 2025\n• Round 2: August 30 - September 7, 2025\n• Round 2 Results: September 13, 2025\n• Finals: September 14-21, 2025\n\nMark your calendars!";
    }

    // Prizes/Scholarships - enhanced keywords
    else if (query.includes('prize') || query.includes('reward') || query.includes('scholarship') ||
             query.includes('money') || query.includes('cash') || query.includes('win') ||
             query.includes('award') || query.includes('benefit') || query.includes('value') ||
             query.includes('worth') || query.includes('rupee') || query.includes('dollar') ||
             query.includes('college') || query.includes('university') || query.includes('wesleyan') ||
             query.includes('flame') || query.includes('oyi') || query.includes('internship') ||
             query.includes('opportunities') || query.includes('career') || query.includes('future')) {
      responseText = "Amazing prizes await! Winners get cash prizes up to ₹3,00,000, scholarships worth $60,000 USD at Wesleyan College, FLAME University scholarships, OYI program scholarships, guaranteed internships, and much more! Even semi-finalists receive valuable benefits. Total prize pool is worth crores!";
    }

    // Team formation - enhanced keywords
    else if (query.includes('team') || query.includes('member') || query.includes('partner') ||
             query.includes('group') || query.includes('friends') || query.includes('classmates') ||
             query.includes('how many') || query.includes('size') || query.includes('formation') ||
             query.includes('collaborate') || query.includes('together') || query.includes('alone') ||
             query.includes('solo') || query.includes('individual') || query.includes('myself') ||
             query.includes('find team') || query.includes('need team') || query.includes('looking for')) {
      responseText = "Teams must have 2-4 members, all girls in grades 9-12. You can team up with friends, classmates, or students from other schools. If you need help finding teammates, join our WhatsApp community where many participants connect! You cannot participate individually - teamwork is essential for this competition.";
    }

    // Format/Structure - enhanced keywords
    else if (query.includes('format') || query.includes('structure') || query.includes('how does') ||
             query.includes('process') || query.includes('work') || query.includes('round') ||
             query.includes('submission') || query.includes('presentation') || query.includes('analysis') ||
             query.includes('report') || query.includes('ppt') || query.includes('powerpoint') ||
             query.includes('document') || query.includes('file') || query.includes('upload') ||
             query.includes('online') || query.includes('virtual') || query.includes('offline')) {
      responseText = "The competition has 3 rounds:\n• Round 1: Analyze a business case and submit your solution report\n• Round 2: Advanced case study for semi-finalists\n• Round 3: Final presentations and pitches\n\nAll submissions are online through the competition platform. You'll receive detailed guidelines for each round.";
    }

    // Contact/Support - enhanced keywords
    else if (query.includes('contact') || query.includes('help') || query.includes('support') ||
             query.includes('question') || query.includes('email') || query.includes('phone') ||
             query.includes('whatsapp') || query.includes('reach') || query.includes('talk') ||
             query.includes('speak') || query.includes('chat') || query.includes('message') ||
             query.includes('doubt') || query.includes('clarification') || query.includes('assistance') ||
             query.includes('guidance') || query.includes('info') || query.includes('communicate')) {
      responseText = "Need help? Contact us at:\n• Email: support@bizforher.in\n• Phone: +91 81089 40071\n• WhatsApp Community: Join for instant support and updates\n• Website: bizforher.in\n\nOur team is ready to assist you with any questions!";
    }

    // Preparation/Tips - enhanced keywords
    else if (query.includes('prepare') || query.includes('preparation') || query.includes('study') ||
             query.includes('tips') || query.includes('advice') || query.includes('strategy') ||
             query.includes('how to win') || query.includes('success') || query.includes('excel') ||
             query.includes('perform well') || query.includes('best') || query.includes('guidance') ||
             query.includes('coaching') || query.includes('training') || query.includes('workshop') ||
             query.includes('skill') || query.includes('knowledge') || query.includes('learning')) {
      responseText = "Preparation tips:\n• Review our semi-finalists list for inspiration\n• Focus on business fundamentals: market analysis, financial planning, strategy\n• Practice teamwork and presentation skills\n• Stay updated with current business trends\n• Join our workshops and webinars\n• Connect with past participants in our community\n\nRemember, no prior business knowledge is required - we provide all the guidance you need!";
    }

    // Benefits/Why participate - enhanced keywords
    else if (query.includes('why') || query.includes('benefit') || query.includes('advantage') ||
             query.includes('worth') || query.includes('value') || query.includes('gain') ||
             query.includes('learn') || query.includes('experience') || query.includes('growth') ||
             query.includes('development') || query.includes('skill') || query.includes('future') ||
             query.includes('career') || query.includes('college') || query.includes('application') ||
             query.includes('resume') || query.includes('cv') || query.includes('profile')) {
      responseText = "Participating in BizForHer offers incredible benefits:\n• Develop critical business and analytical skills\n• Boost your college applications significantly\n• Network with like-minded peers nationwide\n• Gain recognition and certificates\n• Access to scholarships and internships\n• Mentorship from industry experts\n• Build confidence and leadership skills\n• Real-world business exposure\n\nIt's an investment in your future success!";
    }

    // Greetings - enhanced
    else if (query.includes('hi') || query.includes('hello') || query.includes('hey') ||
             query.includes('good morning') || query.includes('good afternoon') || query.includes('good evening') ||
             query.includes('namaste') || query.includes('greetings')) {
      responseText = "Hello! Welcome to BizForHer 2025! 👋 I'm here to help you with any questions about India's premier business case competition for high school girls. Ask me about registration, eligibility, prizes, sample cases, or anything else you'd like to know!";
    }

    // Thank you responses
    else if (query.includes('thank') || query.includes('thanks') || query.includes('appreciate')) {
      responseText = "You're very welcome! I'm glad I could help. If you have any more questions about BizForHer, feel free to ask. Good luck with your preparation! 🌟";
    }

    return responseText;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-80 h-96'
      }`}>
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold">BizForHer Assistant</span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div id="chat-messages" className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg whitespace-pre-line ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about BizForHer..."
                  className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-10 w-10"
                  disabled={isTyping || !inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
