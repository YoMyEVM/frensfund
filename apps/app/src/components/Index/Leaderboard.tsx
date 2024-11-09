import React, { useState } from 'react';
import styled from 'styled-components';

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, vault: 'Nihilum', host: 'Hydramist', token: 'Reckful', ongoingRewards: 7, predictedRewards: 512 },
  { rank: 2, vault: 'Liquid', host: 'MoonMoon', token: 'Xenon', ongoingRewards: 5, predictedRewards: 410 },
  { rank: 3, vault: 'Envy', host: 'Sodapoppin', token: 'Phantom', ongoingRewards: 6, predictedRewards: 500 },
  { rank: 4, vault: 'TSM', host: 'Bjergsen', token: 'WildTurtle', ongoingRewards: 9, predictedRewards: 600 },
];

const Leaderboard = () => {
  const [votes, setVotes] = useState(leaderboardData.map(() => ({ upvotes: 0, downvotes: 0 })));

  const handleUpvote = (index: number) => {
    const updatedVotes = [...votes];
    updatedVotes[index].upvotes += 1;
    setVotes(updatedVotes);
  };

  const handleDownvote = (index: number) => {
    const updatedVotes = [...votes];
    updatedVotes[index].downvotes += 1;
    setVotes(updatedVotes);
  };

  return (
    <Container>
      <LadderNav>
        <LadderTitle>This Epoch's Rewards</LadderTitle>
        <SearchInput placeholder="Search Vault, Host..." />
      </LadderNav>
      <ResultsHeader>
        <ResultCol>Rank</ResultCol>
        <ResultCol>Vault</ResultCol>
        <ResultCol>Host</ResultCol>
        <ResultCol>Token</ResultCol>
        <ResultCol>Current Rewards</ResultCol>
        <ResultCol>Predicted Rewards</ResultCol>
        <ResultCol>Votes</ResultCol>
        <ResultCol>Action</ResultCol>
      </ResultsHeader>

      {leaderboardData.map((item, index) => (
        <ResultRow key={item.rank}>
          <ResultCol>{item.rank}</ResultCol>
          <ResultCol>{item.vault}</ResultCol>
          <ResultCol>{item.host}</ResultCol>
          <ResultCol>{item.token}</ResultCol>
          <ResultCol>{item.ongoingRewards}</ResultCol>
          <ResultCol>{item.predictedRewards}</ResultCol>
          <ResultCol>
            <VoteButton onClick={() => handleUpvote(index)}>▲</VoteButton>
            <VoteCount>{votes[index].upvotes - votes[index].downvotes}</VoteCount>
            <VoteButton onClick={() => handleDownvote(index)}>▼</VoteButton>
          </ResultCol>
          <ResultCol>
            <VoteAndBurnButton
              hasUpvotes={votes[index].upvotes > 0}
              hasDownvotes={votes[index].downvotes > 0}
            >
              Vote and Burn
            </VoteAndBurnButton>
          </ResultCol>
        </ResultRow>
      ))}
    </Container>
  );
};

export default Leaderboard;

// Styled Components

interface VoteAndBurnButtonProps {
  hasUpvotes: boolean;
  hasDownvotes: boolean;
}

const Container = styled.div`
  padding: 20px;
  background: #232323;
  width: 100%;  
  max-width: 1200px;  
  margin: 0 auto;  
`;

const LadderNav = styled.div`
  display: flex;
  align-items: center;
  background: #2e707a;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #686ef9;
  width: 100%;  
`;

const LadderTitle = styled.h1`
  flex: 2;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;
`;

const ResultsHeader = styled.div`
  display: flex;
  padding: 15px 25px;
  background-color: #1d1d1d;
  border-radius: 10px;
  width: 100%;  
  margin-bottom: 10px;
`;

const ResultRow = styled.div`
  display: flex;
  padding: 15px 25px;
  background-color: #1d1d1d;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;  
  &:hover {
    background-color: #1a1a1a;
  }
`;

const ResultCol = styled.div`
  flex: 1;
  font-size: 14px;
  color: #747474;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VoteButton = styled.button`
  background: none;
  border: none;
  color: #888dff;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #f6416c;
  }
`;

const VoteCount = styled.span`
  margin: 0 10px;
  color: #f8d800;
  font-weight: bold;
  font-size: 18px;
`;

const VoteAndBurnButton = styled.button<VoteAndBurnButtonProps>`
  background-color: ${({ hasUpvotes, hasDownvotes }) =>
    hasUpvotes ? '#39FF14' : hasDownvotes ? '#f6416c' : '#555'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hasUpvotes, hasDownvotes }) =>
      hasUpvotes ? '#80FF72' : hasDownvotes ? '#ff7b9f' : '#777'};
  }
`;
