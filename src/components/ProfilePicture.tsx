import React from "react";

/** Framed portrait with a subtle orbit, a small nod to the astrophysics background. */
const ProfilePicture: React.FC = () => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-gradient-to-br from-tech-purple/50 to-tech-blue/40 blur-3xl"
      />

      {/* Orbit ring with a "planet" */}
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30 motion-reduce:animate-none"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-skyBlue shadow-[0_0_16px_4px_rgba(51,195,240,0.6)]" />
      </div>

      {/* Portrait */}
      <div className="absolute inset-[9%] overflow-hidden rounded-full bg-gradient-to-br from-tech-purple to-tech-blue p-[3px] shadow-2xl">
        <img
          src="/me-shirt.jpg"
          alt="Portrait of Flo Ragossnig"
          width={1083}
          height={1316}
          className="h-full w-full scale-x-[-1] rounded-full object-cover object-[center_15%] grayscale"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
