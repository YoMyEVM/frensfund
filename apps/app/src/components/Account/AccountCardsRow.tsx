import React, { useState } from 'react';
import styled from 'styled-components';

const gooes = [
  { start: '#FFDA7D', end: '#FF6A3A', title: 'External Balance' },
  { start: '#4FD2C3', end: '#4EEECF', title: 'Claimable Rewards' },
  { start: '#FF4F8B', end: '#FF8F54', title: 'Vaults Balance' },           
     
    
];

const CardRow: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <PaletteContainer>
      {gooes.map(({ start, end, title }, index) => (
        <ColorCard
          key={`${start}-${end}`}
          start={start}
          end={end}
          isSelected={index === selectedIndex}
          onClick={() => handleSelect(index)}
        >
          <CardTitle>{title}</CardTitle>
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
  justify-content: space-around; // Ensures even spacing

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 cards per row on mobile
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
    width: 100%; // Make the card take full width of the grid cell on mobile
    margin: 0; // Remove margin to make it look cleaner in grid layout
  }
`;

const CardTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;

// Style for the logo (if used)
const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-bottom: 5px;
`;
