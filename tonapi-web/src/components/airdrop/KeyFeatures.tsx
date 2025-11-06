import React from 'react';
import { css, cx } from '@linaria/core';
import { Body1, Title3 } from 'tonapi-web/utils/textStylesAirdrop';
import IcTon from 'tonapi-web/assets/airdrop/ic-ton-36.svg';
import IcArrows from 'tonapi-web/assets/airdrop/ic-arrows-36.svg';
import IcLock from 'tonapi-web/assets/airdrop/ic-lock-36.svg';
import IcPhone from 'tonapi-web/assets/airdrop/ic-phone-36.svg';
import IcCoins from 'tonapi-web/assets/airdrop/ic-coins-36.svg';
import IcPc from 'tonapi-web/assets/airdrop/ic-pc-36.svg';

const items: CardItemProps[] = [
  {
    title: 'For TON',
    text: 'Optimized with the unique architecture of TON in mind',
    icon: <IcTon />
  },
  {
    title: 'Run large-scale airdrops independently',
    text: 'Up to 10 million claims',
    icon: <IcArrows />
  },
  {
    title: 'Built-In Security',
    text: 'Your data and assets are safeguarded by decentralized technology',
    icon: <IcLock />
  },
  {
    title: 'Claim directly from your dApp',
    text: 'No need to redirect users',
    icon: <IcPhone />
  },
  {
    title: 'Monetize your airdrop',
    text: 'Set a price for each claim',
    icon: <IcCoins />
  },
  {
    title: 'User-Friendly Interface',
    text: 'Built for ease-of-use, even for crypto newcomers',
    icon: <IcPc />
  }
];

const container = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  scroll-margin-top: 40px;
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const cardContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background-color: var(--backgroundSecondary);
  padding: 32px 32px 28px 32px;
`;

const textContent = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const textStyle = cx(
  Body1,
  css`
    color: var(--foregroundTertiary);
  `
);

interface CardItemProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const CardItem = React.memo((props: CardItemProps) => {
  const { title, text, icon } = props;
  return (
    <div className={cardContainer}>
      {icon}
      <div className={textContent}>
        <h3 className={Title3}>{title}</h3>
        <p className={textStyle}>{text}</p>
      </div>
    </div>
  );
});

export const KeyFeatures = React.memo(() => {
  return (
    <div className={container} id="keyFeatures">
      {items.map(i => (
        <CardItem key={i.title} {...i} />
      ))}
    </div>
  );
});
