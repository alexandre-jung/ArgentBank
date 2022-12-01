import styles from './styles.module.scss';

interface HeroProps {
  children: React.ReactNode;
}

export function Hero ({ children }: HeroProps) {
  return (
    <div className={styles.Hero}>
      <section className={styles.Content}>
        {children}
      </section>
    </div>
  );
}

interface SubtitleProps {
  children: React.ReactNode;
}

Hero.Subtitle = function Subtitle ({ children }: SubtitleProps) {
  return <p className={styles.Subtitle}>{children}</p>;
};

interface TextProps {
  children: React.ReactNode;
}

Hero.Text = function Text ({ children }: TextProps) {
  return <p className={styles.Text}>{children}</p>;
};
