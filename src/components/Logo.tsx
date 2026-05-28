import React from 'react';

interface LogoProps {
  className?: string;
  circleColor?: string;
  boardColor?: string;
}

export default function Logo({ 
  className = "w-12 h-12",
  circleColor = "text-sky-400",
  boardColor = "text-white"
}: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 200 200"
        className={`${className} transition-transform duration-500 hover:rotate-[360deg]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Celeste (sky-blue) background circle to make white silhouettes pop */}
        <circle 
          cx="100" 
          cy="100" 
          r="86" 
          fill="#3de5bd"
        />
        
        {/* Corporate Circle line */}
        <circle 
          cx="100" 
          cy="100" 
          r="86" 
          className={circleColor}
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round"
        />
        
        {/* Upper Surfboard: points right, fin is on the right side pointing upward */}
        <path 
          d="M 45,82 C 65,74 135,74 155,82 C 135,90 65,90 45,82 Z" 
          className={boardColor}
          stroke="currentColor" 
          fill="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Fin of Upper Board: pointing up, oriented on the right near x=135-145 */}
        <path 
          d="M 135,77 C 138,62 144,60 147,62 L 148,77" 
          className={boardColor}
          stroke="currentColor" 
          fill="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower Surfboard: points left, fin is on the left side pointing downward */}
        <path 
          d="M 155,118 C 135,110 65,110 45,118 C 65,126 135,126 155,118 Z" 
          className={boardColor}
          stroke="currentColor" 
          fill="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Fin of Lower Board: pointing downwards, oriented on the left near x=55-65 */}
        <path 
          d="M 65,123 C 62,138 56,140 53,138 L 52,123" 
          className={boardColor}
          stroke="currentColor" 
          fill="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
