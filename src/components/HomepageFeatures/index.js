import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
    PrussianStudio was designed from the start to 
    be easy to setup and use. It requires no installation, and the whole software including documentation should take no more than <code>50mb</code> of disk space. 
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/modern.svg').default,
    description: (
      <>
    PrussianStudio offers you a modern interface that is designed to be intuitive. It also offers you a Human Machine Interface powered 
    by the Godot game engine and capable of handling complex visualizations.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
    Rust is a modern fast and safe language that compiles to WASM which allows us to build fast applications. PrussianStudio harnesses the 
    speed and reliability provided by these technologies.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
