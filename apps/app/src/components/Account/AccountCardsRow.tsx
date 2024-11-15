import React, { useState } from 'react';
import styled from 'styled-components';

// Sample images for demonstration (replace these with your actual URLs)
const balanceLogos = ['/path/to/token1.png', '/path/to/token2.png'];
const rewardsLogos = ['/path/to/token3.png', '/path/to/token4.png'];
const frensImages = ['/path/to/profile1.png', '/path/to/profile2.png'];

const gooes = [
  { start: '#FFDA7D', end: '#FF6A3A', title: 'Balance', images: balanceLogos },  
  { start: '#4FD2C3', end: '#4EEECF', title: 'Rewards', images: rewardsLogos },          
  { start: '#F26DE5', end: '#AC53F2', title: 'Frens', images: frensImages },                
];

const CardRow: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <PaletteContainer>
      {gooes.map(({ start, end, title, images }, index) => (
        <ColorCard
          key={`${start}-${end}`}
          start={start}
          end={end}
          isSelected={index === selectedIndex}
          onClick={() => handleSelect(index)}
        >
          <CardTitle>{title}</CardTitle>
          <IconRow>
            {images.map((src, imgIndex) => (
              <Logo key={imgIndex} src={src} alt={`${title} icon ${imgIndex + 1}`} />
            ))}
          </IconRow>
        </ColorCard>
      ))}
    </PaletteContainer>
  );
};

export default CardRow;

interface ColorCardProps {
  start: string;
  end: string;
  isSelected: boolean;
}

const PaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const ColorCard = styled.div<ColorCardProps>`
  flex: 1 1 8%;
  height: 130px;
  width: 100px;
  margin: 7px;
  background-image: linear-gradient(135deg, ${({ start }) => start} 0%, ${({ end }) => end} 100%);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  transition: transform 0.2s ease;
  outline: ${({ isSelected, start }) => (isSelected ? `2px solid ${start}` : 'none')};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const CardTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;

const IconRow = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 8px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
