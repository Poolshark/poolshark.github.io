
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePicture: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-full w-full relative">
        <div 
          className="absolute right-0 top-0 h-full w-full bg-gradient-to-r from-background via-background/50 to-transparent"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <img 
          src="/me.jpg" 
          alt="Profile background" 
          className="h-full w-full object-cover object-[center_30%] transform scale-x-[-1]" 
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
