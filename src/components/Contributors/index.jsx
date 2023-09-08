import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import contributors from '../../contributors.json';
import ContributorAvatar from '../ContributorAvatar';
import styles from './styles.module.css';

const Contributors = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/repos/moja-global/community-website`).then(async (response) => {
      const data = await response.json();

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div></div>;
  }

  const sortedContributors = contributors
    .map((o) => {
      // add one day per commit
      o.score = o.lastContribution + o.total * 86400;
      return o;
    })
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  return (
    <div className={styles.contributors} >
      <div className={styles.what_is_uptane_heading}>
                <h1>Contributors</h1>
            </div>
      <div>
        {sortedContributors.length > 0 && (
          <LazyLoad height={200}>
            <div>
              {sortedContributors.map((data, i) => (
                <ContributorAvatar key={i} {...data} />
              ))}
            </div>
          </LazyLoad>
        )}
      </div>
    </div>
  );
};

export default Contributors;
