
import React, { useEffect, useState } from 'react';
import styles from './FlippingText.module.css';

const textOptions = [
  "Open Source",
  "A Vacation",
  "Hackathons",
  "Good Causes",
  "IP Ventures",
  "Poker Club",
  "Legal Battles",
  "A Music Album",
  "Employee Perks",
  "Content Creators",
  "Niche Research",
  "Forever Giving",
  "Side Projects",
  "Youth Clubs",
  "Digial Artists",
  "Friend's Bail",
  "Kid's First Car",
  "Innovations",
  "Nonprofits",
  "Streamers",
  "Early Ideas",
  "Faith Orgs",
  "Ur Side Piece",
  "Social Causes",
  "A Child's Dream",
  "DJ Parties",
  "Class Reunions",
  "Ai Startups",
  "Night Classes",
  "A Cuz's Wedding",
  "Entrepreneurs",
  "Marketing Campaigns",
  "Scholarships",
  "Long Term Gifting",
  "College Tuition",
  "Emergency Savings",
  "Hobbies/Interests",
  "Charity Events",
  "Veterans Support",
  "Home Renovations",
  "Your Parent's Bills",
  "Sustainable Ag",
  "Anything at All",
];

const FlippingText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>
        Fund{' '}
        <span id="flipper" className={styles.flip}>
          {textOptions.map((text, index) => (
            <span
              key={index}
              className={`${styles.step} ${
                index === currentIndex ? styles.set : ''
              } ${index < currentIndex ? styles.down : ''}`}
            >
              {text}
            </span>
          ))}
        </span>
      </h1>
      <h2 className={styles.heading2}>
       <span className={styles.underlineWhite}>Without Spending</span>
        <span className={styles.and}> and </span>
        <span className={styles.win}>Win Money</span>
      </h2>
    </div>
  );
};

export default FlippingText;