import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '../css/index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
            </div>
            <Heading as="h3">What is a JSON Schema?</Heading>
            <p>Learn about the structure and benefits of using JSON Schemas.</p>
          </div>
          <div className="col col--4">
            <div className="text--center">
            </div>
            <Heading as="h3">Why Use JSON Schemas?</Heading>
            <p>Discover the advantages of using JSON Schemas in your projects.</p>
          </div>
          <div className="col col--4">
            <div className="text--center">
            </div>
            <Heading as="h3">How to Use JSON Schemas?</Heading>
            <p>Get started with using JSON Schemas in your applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar() {
  return (
    <div className={styles.avatarContainer}>
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          src="https://avatars1.githubusercontent.com/u/22827191?s=460&v=4" />
        <div className="avatar__intro">
          <div className="avatar__name">Kilian Tyler</div>
          <small className="avatar__subtitle">
            CEO of RealText, Inc.
            <br />
            <a href="https://github.com/kiliantyler">@kiliantyler</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="JSON Schemas">
      <HomepageHeader />
      <main>
        <center>
          <Features />
          <section className={styles.cta}>
            <div className="container">
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Dive in
              </Link>
            </div>
          </section>
        </center>
        <Avatar />
      </main>
    </Layout>
  );
}
