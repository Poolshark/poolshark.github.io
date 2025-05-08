
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { resume } from "@/data/resume";

const Index: React.FC = () => {
  React.useEffect(() => {
    // Update document title with the name from resume
    document.title = `${resume.name} | ${resume.title}`;
  }, []);
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main className="pt-16"> {/* Adding padding to account for the fixed header */}
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
