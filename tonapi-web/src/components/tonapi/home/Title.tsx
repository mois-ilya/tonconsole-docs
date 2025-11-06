import React from 'react';
import { css, cx } from '@linaria/core';
import { UButton } from 'tonapi-web/UComponents/tonapi/UButton';
import { Body1, Title1 } from 'tonapi-web/utils/textStyles';
import IcTelegram from 'tonapi-web/assets/icons/ic-telegram-16.svg';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const textContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;

  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const titleStyle = cx(
  Title1,
  css`
    max-width: 800px;
  `
);

const textStyle = cx(
  Body1,
  css`
    color: var(--foregroundSecondary);
    max-width: 600px;
  `
);

const buttonsContent = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Title = React.memo(() => {
  return (
    <div className={container}>
      <div className={textContent}>
        <h1 className={titleStyle}>TON Developer Tools — Power your blockchain solutions with TON API</h1>
        <p className={textStyle}>
          Leverage TON API to build dApps, streamline blockchain development, and explore cutting-edge technologies on TON.
        </p>
      </div>
      <div className={buttonsContent}>
        <UButton
          title="Connect and Try"
          style="primary"
          icon={<IcTelegram />}
          href="https://tonconsole.com?utm_source=tonapi.io"
        />
        <UButton title="Documentation" href="https://docs.tonconsole.com?utm_source=tonapi.io" />
      </div>
    </div>
  );
});
