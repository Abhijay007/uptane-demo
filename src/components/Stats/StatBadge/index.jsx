import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { FiStar, FiGitMerge, FiDownload } from 'react-icons/fi'; // Import the icons you need

const StatBadge = (props) => {
  const { iconName, number, text, to, className, borderColor } = props;
  const history = useHistory();

  let iconComponent;

  switch (iconName) {
    case 'star':
      iconComponent = <FiStar className={styles.Icon} />;
      break;
    case 'gitMerge':
      iconComponent = <FiGitMerge className={styles.Icon} />;
      break;
    case 'download':
      iconComponent = <FiDownload className={styles.Icon} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div
      className={clsx(styles.Container, className)}
      style={{ border: `8px solid ${borderColor || 'black'}` }}
      onClick={() => {
        if (to.startsWith('http') && !onServer()) {
          window.open(to, '_blank');
          return;
        }
        history.push(to);
      }}>
      {iconComponent && (
        <div className={styles.IconContainer}>
          {iconComponent}
        </div>
      )}
      <div className={styles.ContentContainer}>
        <div className={styles.Number}>{number}</div>
        <div className={styles.Text}>{text}</div>
      </div>
    </div>
  );
};

export default StatBadge;
