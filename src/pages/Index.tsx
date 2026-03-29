import React from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import InteractiveHero from '@/components/Home/InteractiveHero';
import Features from '@/components/Home/Features';
import Timeline from '@/components/Home/Timeline';
import CallToAction from '@/components/Home/CallToAction';
import ButtonFAQ from '@/components/Home/ButtonFAQ';
import Partners from '@/components/Home/Partners';
import NotificationPopup from '@/components/shared/NotificationPopup';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const Index = () => {
  // Private Schools Finalists
  const privateSchoolTeams = [
    { name: "10X", school: "10X International" },
    { name: "Fempreneurs", school: "Scottish High International School" },
    { name: "Future FoundHers", school: "Fravashi International Academy" },
    { name: "Aanya", school: "CS Academy" },
    { name: "Supply and Command", school: "Choithram International School" },
    { name: "Arete Dynamics", school: "KD Ambani Reliance Foundation School" }
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Public Schools Finalists
  const publicSchoolTeams = [
    { name: "Dav Kotbiz", school: "DAV Public School" },
    { name: "LeadHers", school: "ML Khanna DAV Public School" },
    { name: "Team ATL Bharat Bharati Kullu", school: "Bharat Bharathi Senior Secondary School Kullu" },
    { name: "Try Shuls", school: "SSVM" },
    { name: "Unstoppable", school: "Anjuman I Islam, Mustafa Fakhi Junior College" }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const scrollToFinalists = () => {
    const finalistsSection = document.getElementById('finalists');
    if (finalistsSection) {
      finalistsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle URL hash on load
  React.useEffect(() => {
    if (window.location.hash === '#finalists') {
      setTimeout(() => {
        const element = document.getElementById('finalists');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <NotificationPopup />
      <PageLayout>
        <InteractiveHero />
        <Timeline />
        <Features />
        

        {/* Finalists Section */}
        <section id="finalists" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Finalists List
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are the top 11 finalist teams divided by school categories. 
                Congratulations to everyone who made it to the finals!
              </p>
            </AnimatedSection>
            
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-up" delay={200}>
                <Tabs defaultValue="private" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="private" className="text-lg py-3">
                      Private Schools ({privateSchoolTeams.length} Teams)
                    </TabsTrigger>
                    <TabsTrigger value="public" className="text-lg py-3">
                      Public Schools ({publicSchoolTeams.length} Teams)
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="private" className="mt-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary p-6">
                        <h3 className="text-2xl font-bold text-white text-center">Private Schools Finalists</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="font-semibold">Team Name</TableHead>
                              <TableHead className="font-semibold">School</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {privateSchoolTeams.map((team, index) => (
                              <TableRow key={index} className="hover:bg-gray-50">
                                <TableCell className="font-medium text-primary">{team.name}</TableCell>
                                <TableCell>{team.school}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="public" className="mt-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="bg-gradient-to-r from-secondary to-primary p-6">
                        <h3 className="text-2xl font-bold text-white text-center">Public Schools Finalists</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="font-semibold">Team Name</TableHead>
                              <TableHead className="font-semibold">School</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {publicSchoolTeams.map((team, index) => (
                              <TableRow key={index} className="hover:bg-gray-50">
                                <TableCell className="font-medium text-secondary">{team.name}</TableCell>
                                <TableCell>{team.school}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Partners />
        
        {/* WhatsApp Community Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <AnimatedSection animation="fade-up" className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with fellow participants, get updates, and ask questions in our WhatsApp community.
              </p>
              <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join WhatsApp Community
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>
        
        <ButtonFAQ />
        <CallToAction />
      </PageLayout>
    </>
  );
};

export default Index;