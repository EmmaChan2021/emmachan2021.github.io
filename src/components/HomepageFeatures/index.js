import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Support Me',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      give my <a target="_blank" rel="noopener noreferrer" href="https://github.com/EmmaChan2021/emmachan2021.github.io">repository</a> a 🌟
      </>
    ),
  },
  {
    title: 'About Me',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      🧠 Product Manager
      </>
    ),
  },
  {
    title: 'Contact Me',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      📱 wechat: 740010731
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
