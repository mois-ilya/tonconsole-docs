import React from 'react';
import { css, cx } from '@linaria/core';
import { UButton } from 'tonapi-web/UComponents/tonapi/UButton';
import { Api1, Api2, Body1, TextMono, Title2 } from 'tonapi-web/utils/textStyles';

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const textContent = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 660px;
`;

const textSecondary = css`
  color: var(--foregroundSecondary);
`;

const descriptionStyle = cx(
  Body1,
  textSecondary,
  css`
    max-width: 600px;
  `
);

const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  overflow: hidden;
  min-width: 412px;
  max-height: 227px;
  border-radius: 16px;
  mask-image: radial-gradient(circle at top left, #fff 0%, #fff 40%, transparent 80%, transparent 100%);

  //mask-image: linear-gradient(180deg, #fff 0%, #fff 60%, transparent 90%, transparent);
  background-color: rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const cardItemsContainer = css`
  display: flex;
  flex-direction: column;
  background: var(--linearPrimary);
  border: 0.5px solid var(--borderPrimary);
  border-radius: 16px;

  & > div {
    border-bottom: 0.5px solid var(--borderPrimary);
  }

  & > div:last-child {
    border-bottom: none;
  }
`;

const cardItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  gap: 12px;
  padding: 12px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const cardType = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px 10px;
  border-radius: 6px;
  width: 40px;

  &.GET {
    border: 0.5px solid var(--backgroundBlue);
    background-color: var(--backgroundBlue);
    color: var(--accentBlue);
  }

  &.POST {
    border: 0.5px solid var(--backgroundGreen);
    background-color: var(--backgroundGreen);
    color: var(--accentGreen);
  }
`;

const apiItems: { type: 'GET' | 'POST'; route: string }[] = [
  {
    type: 'GET',
    route: '/v2/blockchain/transactions/{transaction_id}'
  },
  {
    type: 'POST',
    route: '/v2/blockchain/message'
  },
  {
    type: 'GET',
    route: '/v2/blockchain/config'
  },
  {
    type: 'POST',
    route: '/v2/accounts/_bulk'
  },
  {
    type: 'GET',
    route: '/v2/wallet/emulate'
  }
];

const ApiBlock = React.memo(() => {
  return (
    <div className={cardContainer}>
      <div className={cardItemsContainer}>
        {apiItems.map(i => (
          <div key={i.route} className={cardItem}>
            <div className={cx(Api2, TextMono, cardType, i.type)}>{i.type}</div>
            <div className={cx(Api1, TextMono)}>{i.route}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const Documentation = React.memo(() => {
  return (
    <div className={container}>
      <div className={content}>
        <div className={textContent}>
          <h2 className={Title2}>Powerful SaaS service</h2>
          <p className={descriptionStyle}>
            Our API service helps developers build dApps, create custom blockchain solutions, and leverage robust tools
            for development on the TON blockchain.
          </p>
        </div>
        <UButton title="Documentation" href="https://docs.tonconsole.com?utm_source=tonapi.io" />
      </div>
      <ApiBlock />
    </div>
  );
});
