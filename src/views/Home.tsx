import { Hero } from '@components/Hero';

export function Home () {
  return (
    <div>
      <Hero>
        <Hero.Aria>Promoted content</Hero.Aria>
        <Hero.Subtitle>No fees.</Hero.Subtitle>
        <Hero.Subtitle>No minimum deposit.</Hero.Subtitle>
        <Hero.Subtitle>High interest rates.</Hero.Subtitle>
        <Hero.Text>Open a savings account with Argent Bank today!</Hero.Text>
      </Hero>
    </div>
  );
}
