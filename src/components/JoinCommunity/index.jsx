import React from 'react';
import styles from './styles.module.css';
import LinkCard from './community_links';
import Link from '@docusaurus/Link';

export default function Community() {
    return (
        <div className={[styles.community, styles.section_padding].join(' ')}>
            <div className={styles.join_community}>
                <h1>Join the Uptane Community</h1>
                <p>Join the ever-growing uptane community for updates, support, and collaboration.</p>
            </div>
            <div className={styles.community_links}>
                <div className={styles.links}>
                    {/* <LinkCard link="#" title="Slack" light="img/community_links/slack.svg" dark="img/community_links/slack.svg" /> */}
                    <LinkCard link="https://github.com/uptane-project" title="GitHub" light="img/community_links/github_light.svg" dark="img/community_links/github_dark.svg" />
                    {/* <LinkCard link="https://twitter.com/uptaneproject" title="Twitter" light="img/community_links/twitter.svg" dark="img/community_links/twitter.svg" /> */}
                </div>
                <div className={styles.add_to_calendar}>
                    <div className={styles.calendar_heading}>
                        <h2>Uptane Community Call</h2>
                        <h4>Biweekly Friday of every month | 5:30 PM EDT</h4>
                    </div>
                    <div className={styles.calendar_link}>
                        <Link class="button button--secondary button--lg" target='_blank' href="#">Add to Calendar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}