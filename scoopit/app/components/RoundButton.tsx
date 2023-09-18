import React from 'react';

interface RoundButtonProps {
  imageSrc: string;
  altText: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({ imageSrc, altText }) => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked');
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={imageSrc} alt={altText} />
    </button>
  );
};

export default RoundButton;