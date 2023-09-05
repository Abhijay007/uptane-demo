import React from 'react';
import styles from './styles.module.css';
const ContributorAvatar = ({ author = {}, lastContribution, total }) => {
  return (
    <a
      className={`contributor-item`}
      title={`${author.login} made ${total} commit${total > 1 ? 's' : ''
        }. Last commit was ${new Date(lastContribution * 1000).toDateString()}`}
      target="_blank"
      href={`https://github.com/${author.login}`}
      rel="noreferrer"
    >
      <img
        width="75"
        height="75"
        className={styles.contributor_avatar}
        src={author.avatar_url}
        alt={author.login}
      />
    </a>
  );
};

export default ContributorAvatar;
