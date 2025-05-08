
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-mono font-bold tech-gradient">FR</span>
          </div>
          
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            © {currentYear} Flo Ragossnig. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
