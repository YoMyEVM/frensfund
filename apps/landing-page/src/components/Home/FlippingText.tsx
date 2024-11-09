
import React, { useEffect, useState } from 'react';
import styles from './FlippingText.module.css';

const textOptions = [
  "Open Source",
  "Vacations",
  "Good Causes",
  "IP Ventures",
  "Employee Perks",
  "Content Creators",
  "Research",
  "Perpetual Gifts",
  "Projects",
  "Artists",
  "Friends",
  "Kid's First Car",
  "Innovators",
  "Nonprofits",
  "Streamers",
  "Early Ideas",
  "Faith Organizations",
  "Social Causes",
  "Your Child's Dream",
  "DJ Rave Parties",
  "a Class Reunion",
  "Startups",
  "Education",
  "a Wedding",
  "Entrepreneurs",
  "Scholarships",
  "Long Term Gifting",
  "College Tuition",
  "Emergency Savings",
  "Hobbies",
  "Charities",
  "Youth Clubs",
  "Support for Veterans",
  "Home Renovations",
  "Your Parent's Bills",
  "Sustainable Ag",
  "Anything",
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