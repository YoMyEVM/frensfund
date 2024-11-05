
import React, { useEffect, useState } from 'react';
import styles from './FlippingText.module.css';

const textOptions = [
  "Good Causes",
  "Vacations",
  "Open Source",
  "Content Creators",
  "Research",
  "Perpetual Gifts",
  "Artists",
  "Friends",
  "Projects",
  "Innovators",
  "Nonprofits",
  "Streamers",
  "Your Child's Dream",
  "Faith Organizations",
  "Social Causes",
  "Employee Perks",
  "DJ Parties",
  "a Class Reunion",
  "Startups",
  "Education",
  "a Future Wedding",
  "Entrepreneurs",
  "Scholarships",
  "Long Term Gifting",
  "College Tuition",
  "Emergency Savings",
  "Hobbies",
  "Charities",
  "Youth Clubs",
  "Supporting Veterans",
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