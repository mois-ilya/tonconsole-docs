import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Body2, Label1 } from 'tonapi-web/utils/textStylesAirdrop';
import IcTonviewer from 'tonapi-web/assets/airdrop/ic-tonviewer.svg';
import IcConsole from 'tonapi-web/assets/airdrop/ic-console.svg';
import IcDocs from 'tonapi-web/assets/airdrop/ic-docs.svg';

const container = css`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  align-items: stretch;
  background-color: var(--backgroundSecondary);
  overflow: hidden;

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 0;
  }
`;

const itemContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 15px 24px;
  flex: 1;

  & svg {
    flex-shrink: 0;
  }

  @media (max-width: 1050px) {
    padding: 15px 12px;
  }

  @media (max-width: 950px) {
    padding: 16px 20px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--backgroundSecondaryHover);
    }
  }
`;

const itemTextContent = css`
  display: flex;
  flex-direction: column;
`;

const textPrimary = css`
  color: var(--constantBlack);
`;

const textSecondary = css`
  color: var(--foregroundTertiary);
`;

const separatorStyle = css`
  width: 1px;
  background-color: var(--borderSecondary);
  margin: 12px 0;

  @media (max-width: 950px) {
    margin: 0 12px;
    height: 1px;
    width: auto;
  }
`;

interface ServiceItemProps {
  title: string;
  text: string;
  href: string;
  icon: React.ReactNode;
}

const ServiceItem = React.memo((props: ServiceItemProps) => {
  return (
    <Link href={props.href} target="_blank" className={itemContainer}>
      {props.icon}
      <div className={itemTextContent}>
        <div className={cx(Label1, textPrimary)}>{props.title}</div>
        <div className={cx(Body2, textSecondary)}>{props.text}</div>
      </div>
    </Link>
  );
});

const serviceItems: ServiceItemProps[] = [
  {
    title: 'Tonviewer',
    text: 'Explore transactions, contracts, NFTs, Jettons, etc.',
    href: 'https://tonviewer.com?utm_source=tonapi.io',
    icon: <IcTonviewer />
  },
  {
    title: 'Console',
    text: 'Console offers reliable, scalable TON blockchain services.',
    href: 'https://tonconsole.com?utm_source=tonapi.io',
    icon: <IcConsole />
  },
  {
    title: 'Documentation',
    text: 'The technical documentation and guides',
    href: 'https://docs.tonconsole.com?utm_source=tonapi.io',
    icon: <IcDocs />
  }
];

export const Services = React.memo(() => {
  return (
    <div className={container}>
      <ServiceItem {...serviceItems[0]} />
      <div className={separatorStyle} />
      <ServiceItem {...serviceItems[1]} />
      <div className={separatorStyle} />
      <ServiceItem {...serviceItems[2]} />
    </div>
  );
});
