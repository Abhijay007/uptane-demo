import React from 'react';
import styles from './styles.module.css';

export default function UptaneUpdates() {
  return (
    <div className={`${styles.uptaneUpdates} ${styles.sectionPadding}`}>
      <div className={styles.uptaneUpdatesHeading}>
        <h1>Upcoming in Uptane</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <img src="#" alt="upcoming conf" />
          <h1 className={styles.leftCardTitle}>Upcoming Conference</h1>
          <p className={styles.leftCardDescription}>
            Uptane will be holding a hybrid online/in-person conference on June 23, 2023, from 10 am to 1:15 pm EDT.
          </p>
          <div className={styles.emailSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
        </div>
        <div className={`${styles.card} ${styles.rightCard}`}>
          <img src="#" alt="Raise your voice" />
          <h1 className={styles.rightCardTitle}>Raise Your Voice</h1>
          <p className={styles.rightCardDescription}>
            Raise your voice: Participate in the survey Uptane will be holding a hybrid online/in-person conference on June 23, 2023.
          </p>
          <button className={`${styles.learnMoreButton} ${styles.rightCardButton}`}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
