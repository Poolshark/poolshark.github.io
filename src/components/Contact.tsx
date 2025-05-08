
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { resume } from "@/data/resume";
import * as SimpleIcons from "simple-icons";

// Create simplified icon components using Simple Icons
const SimpleIconComponent = ({ iconName, className }: { iconName: string, className?: string }) => {
  const icon = SimpleIcons[`si${iconName}`];
  
  if (!icon) return null;
  
  return (
    <svg 
      className={className || "h-5 w-5"} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

// Custom LinkedIn icon component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="flex items-center gap-4 mb-10">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Get in Touch</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border border-border bg-card/50 card-hover">
            <CardHeader>
              <CardTitle className="text-center">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-8 text-muted-foreground">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
              </p>
              
              <div className="flex justify-center mb-6">
                <Button size="lg" asChild>
                  <a href={`mailto:${resume.contact.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
              
              <div className="flex justify-center gap-4">
                {resume.contact.github && (
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href={`https://${resume.contact.github}`} target="_blank" rel="noopener noreferrer">
                      <SimpleIconComponent iconName="Github" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                )}
                
                {resume.contact.linkedin && (
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href={`https://${resume.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                )}
                
                {resume.contact.bluesky && (
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href={`https://${resume.contact.bluesky}`} target="_blank" rel="noopener noreferrer">
                      <SimpleIconComponent iconName="Bluesky" />
                      <span className="sr-only">Bluesky</span>
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
