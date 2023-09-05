import React from 'react';
import data from '@site/static/puttingUptane/data.js';
import ProjectCard from './project_card';
import styles from './styles.module.css';

export default function PuttingUptane() {

    const ProjectCards = data.projects.map((item, index) => {

        return (
            <ProjectCard
                key={index}
                title={item.title}
                light={item.light}
                dark={item.dark}
                description={item.description}
                link={item.link}
            />
        )
    })

    return (

        <main>
            <div>
                <div className={[styles.projects_uptane, styles.section_padding].join(' ')}>
                    <h1>Putting Uptane to work</h1>
                </div>
                <div className={styles.projectcards}>
                    {ProjectCards}
                </div>
            </div>

        </main>

    );
}