import styles from './styles.module.scss';
import React from 'react';

interface FeaturesProps {
  children: React.ReactNode;
}

export function Features ({ children }: FeaturesProps) {
  return (
    <section className={styles.Features}>
      {children}
    </section>
  );
}

interface ItemProps {
  imageSource: string;
  title: string;
  children: React.ReactNode;
}

Features.Item = function Item ({ imageSource, title, children }: ItemProps) {
  return (
    <div className={styles.Item}>
      <img
        className={styles.ItemImage}
        src={imageSource}
        alt="Chat icon"
      />
      <h3 className={styles.ItemTitle}>{title}</h3>
      <p>{children}</p>
    </div>
  );
};
