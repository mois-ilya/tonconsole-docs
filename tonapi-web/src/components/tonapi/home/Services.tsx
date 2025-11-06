import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Body3, Label2 } from 'tonapi-web/utils/textStyles';
import IcTonviewer from 'tonapi-web/assets/icons/ic-tonviewer.svg';
import IcConsole from 'tonapi-web/assets/icons/ic-console.svg';
import IcDocs from 'tonapi-web/assets/icons/ic-docs.svg';
import IcArrow from 'tonapi-web/assets/icons/ic-chevron-right-16.svg';

const container = css`
  display: flex;
  flex-direction: row;
  border: 0.5px solid var(--borderPrimary);
  border-radius: 12px;
  overflow: hidden;

  & > a {
    border-right: 0.5px solid var(--borderPrimary);
  }

  & > a:last-child {
    border-bottom: none;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 0;

    & > a {
      border-right: none;
      border-bottom: 0.5px solid var(--borderPrimary);
    }

    & > a:last-child {
      border-bottom: none;
    }
  }
`;

const itemContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px 15px 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  flex: 1;

  & svg {
    flex-shrink: 0;
  }

  @media (max-width: 1050px) {
    padding: 15px 12px;
  }

  @media (max-width: 950px) {
    padding: 16px 20px;
    gap: 12px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  }

  @media (hover: hover) {
    &:hover {
      background: var(--backgroundHoverOpacity);
    }
  }
`;

const itemContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const itemTextContent = css`
  display: flex;
  flex-direction: column;
`;

const textPrimary = css`
  color: var(--constantWhite);
`;

const textSecondary = css`
  color: var(--foregroundSecondary);
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
      <div className={itemContent}>
        {props.icon}
        <div className={itemTextContent}>
          <div className={cx(Label2, textPrimary)}>{props.title}</div>
          <div className={cx(Body3, textSecondary)}>{props.text}</div>
        </div>
      </div>
      <IcArrow />
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
      {serviceItems.map(i => (
        <ServiceItem key={i.title} {...i} />
      ))}
    </div>
  );
});
