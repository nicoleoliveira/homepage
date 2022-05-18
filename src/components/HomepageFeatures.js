import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    tagline: 'Acessível',
    title: 'Acessível e inclusivo',
    Svg: require('../../static/img/img1.svg').default,
    description: (
      <>
        Acessibilidade
      </>
    ),
  },
  {
    tagline: 'Acessível',
    title: 'Colaborativo',
    Svg: require('../../static/img/img2.svg').default,
    description: (
      <>
        Colaboração
      </>
    ),
  },
  { tagline: 'Acessível',
    title: 'Impulsionar negócios',
    Svg: require('../../static/img/img3.svg').default,
    description: (
      <>
       Negócio
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--left">
        <p className={styles.tagline}>{description}</p>
        <h3>{title}</h3>
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
