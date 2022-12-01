import { Hero } from '@components/Hero';
import { Features } from '@components/Features';
import chatIcon from '../assets/icon-chat.png';
import moneyIcon from '../assets/icon-money.png';
import securityIcon from '../assets/icon-security.png';
import { SrOnly } from '@components/SrOnly';

export function Home () {
  return (
    <div>
      <Hero>
        <SrOnly>Promoted content</SrOnly>
        <Hero.Subtitle>No fees.</Hero.Subtitle>
        <Hero.Subtitle>No minimum deposit.</Hero.Subtitle>
        <Hero.Subtitle>High interest rates.</Hero.Subtitle>
        <Hero.Text>Open a savings account with Argent Bank today!</Hero.Text>
      </Hero>
      <Features>
        <SrOnly>Features</SrOnly>
        <Features.Item
          imageSource={chatIcon}
          title="You are our #1 priority"
        >
          Need to talk to a representative?
          You can get in touch through our 24/7 chat
          or through a phone call in less than 5 minutes.
        </Features.Item>
        <Features.Item
          imageSource={moneyIcon}
          title="More savings means higher rates"
        >
          The more you save with us, the higher your interest rate will be!
        </Features.Item>
        <Features.Item
          imageSource={securityIcon}
          title="Security you can trust"
        >
          We use top of the line encryption
          to make sure your data and money is always safe.
        </Features.Item>
      </Features>
    </div>
  );
}
