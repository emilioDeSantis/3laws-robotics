import React from 'react';

const Divider: React.FC = () => {
  return (
    <div 
      className="page-padding" 
      style={{ 
        marginTop: '5rem',
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        height: '2.5px', 
        backgroundColor: '#0A0A0A' 
      }}
    >
      <div 
        style={{ 
          width: '2rem', 
          height: '100%', 
          backgroundColor: 'white' 
        }}
      ></div>
    </div>
  );
};

export default Divider;
