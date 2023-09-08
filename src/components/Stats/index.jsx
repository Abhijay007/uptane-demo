import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import StatBadge from './StatBadge';

const StatsView = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={[styles.what_is_uptane, styles.section_padding].join(' ')}>
      <div className={styles.Content}>
        <h3 className={styles.Tagline}>Always Open Source</h3>
        <div className={styles.what_is_uptane_heading}>
          <h1>Uptane growing community and here are some status</h1>
        </div>

        <div className={styles.BadgesContainer}>
          <StatBadge
            iconName={"star"} // Use the imported icon component
            number={'22'}
            text={'Stars'}
            to={`${siteConfig.customFields.githubUrl}/stargazers`}
            className={styles.Badge}
            borderColor="#416AD4"
          />
          <StatBadge
            iconName={"gitMerge"} // Use the imported icon component
            number={'22'}
            text={'Forks'}
            to={`${siteConfig.customFields.githubUrl}/network/members`}
            className={styles.Badge}
            borderColor="#46C697"
          />
          <StatBadge
            iconName={"download"} // Use the imported icon component
            number={'22'}
            text={'Downloads'}
            to={siteConfig.customFields.npmCoreUrl}
            className={styles.Badge}
            borderColor="#7064E7"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsView;
