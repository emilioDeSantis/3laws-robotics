import React from 'react';

interface GradientArrowProps {
  color: string;
}

const GradientArrow: React.FC<GradientArrowProps> = ({ color }) => {
  const gradientId = `gradient-${color.replace('#', '')}`;

  return (
    <svg 
      style={{
        width: '100%',
        height: '100%',
      }} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0 }}/>
          <stop offset="40%" stopColor={color} />
        </linearGradient>
      </defs>
      <path
        d="M0 40 V60 H75 V65 L100 50 L75 35 V40 H0 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default GradientArrow;
