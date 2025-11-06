import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { UButton } from 'tonapi-web/UComponents/tonapi/UButton';
import { Body1, Body2, Label1, Num1, Title2 } from 'tonapi-web/utils/textStyles';

const container = css`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 40px;
  gap: 24px;
`;

const titleContent = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const textStyle = cx(
  Body1,
  css`
    color: var(--foregroundSecondary);
    max-width: 700px;
  `
);

const sectionContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const sectionContent = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const priceContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: var(--linearPrimary);
  border: 0.5px solid var(--borderPrimary);
  color: var(--constantWhite);
  border-radius: 12px;
  padding: 16px 24px;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  & .hidden {
    opacity: 1;
    transition: all 0.1s ease-in-out;
  }

  & .button {
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--backgroundHoverOpacity);
      & .button {
        opacity: 1;
      }
      & .hidden {
        opacity: 0;
      }
    }
  }
`;

const priceContent = css`
  display: flex;
  flex-direction: column;

  &.right {
    align-items: flex-end;
  }
`;

const priceTitle = cx(
  Body2,
  css`
    color: var(--foregroundSecondary);
  `
);

const buyButton = cx(
  'button',
  css`
    position: absolute;
    right: 20px;
    transition: all 0.1s ease-in-out;

    @media (max-width: 768px) {
      right: 20px;
    }
  `
);

interface PriceItemProps {
  title: string;
  price: string;
  rps?: string;
}

const PriceItem = React.memo((props: PriceItemProps) => {
  return (
    <Link
      className={priceContainer}
      href={props.title === 'Custom' ? 'https://t.me/tonrostislav' : 'https://tonconsole.com?utm_source=tonapi.io'}
      target="_blank"
    >
      <div className={priceContent}>
        <div className={priceTitle}>{props.title}</div>
        <div className={Num1}>{props.price}</div>
      </div>
      {!!props.rps && (
        <div className={cx(priceContent, 'hidden', 'right')}>
          <div className={priceTitle}>RPS</div>
          <div className={Num1}>{props.rps}</div>
        </div>
      )}
      <UButton title={props.title === 'Custom' ? 'Contact Support' : 'Buy'} className={buyButton} style="primary" />
    </Link>
  );
});

export const Pricing = React.memo(() => {
  return (
    <div className={container} id="pricing">
      <div className={titleContent}>
        <h2 className={Title2}>Pricing</h2>
        <p className={textStyle}>
          Charging money for API usage helps cover operational costs, ensures service quality and reliability, supports
          ongoing development and improvement.
        </p>
      </div>
      <div className={sectionContainer}>
        <div className={Label1}>API</div>
        <div className={sectionContent}>
          <PriceItem title="Start" price="Free" rps="1" />
          <PriceItem title="Lite" price="$ 9.9" rps="10" />
          <PriceItem title="Standart" price="$ 95" rps="100" />
          <PriceItem title="Plus" price="$ 290" rps="300" />
          <PriceItem title="Heavy" price="$ 890" rps="1 000" />
          <PriceItem title="Custom" price="Unlimited" />
        </div>
      </div>
      <div className={sectionContainer}>
        <div className={Label1}>Liteservers</div>
        <div className={sectionContent}>
          <PriceItem title="Start" price="Free" rps="1" />
          <PriceItem title="Lite" price="$ 50" rps="10" />
          <PriceItem title="Standart" price="$ 200" rps="50" />
          {/* <PriceItem title="Plus" price="$ 900" rps="250" />
          <PriceItem title="Heavy" price="$1 500" rps="500" /> */}
          <PriceItem title="Custom" price="Unlimited" />
        </div>
      </div>
    </div>
  );
});
