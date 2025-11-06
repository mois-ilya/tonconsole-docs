import React from 'react';
import { css, cx } from '@linaria/core';
import { UButton } from 'tonapi-web/UComponents/airdrop/UButton';
import { Body1, Title1 } from 'tonapi-web/utils/textStylesAirdrop';
import IcConsole from 'tonapi-web/assets/airdrop/ic-console-16.svg';
import IcArrow from 'tonapi-web/assets/airdrop/ic-chevron-right-16.svg';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 32px;
  }
`;

const textContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    gap: 12px;
  }
`;

const buttonsContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const textStyle = cx(
  Body1,
  css`
    color: var(--foregroundTertiary);
    max-width: 460px;
  `
);

export const Title = React.memo(() => {
  return (
    <div className={container}>
      <div className={textContent}>
        <h1 className={Title1}>
          TON API Airdrop:
          <br />
          Your Airdrop Solution on TON
        </h1>
        <p className={textStyle}>
          Easily send any TON Token to millions wallets without Coding. No extra fees for you, only tiny blockchain fee.
        </p>
      </div>
      <div className={buttonsContent}>
        <UButton title="Connect and Try" iconLeft={<IcConsole />} href="https://tonconsole.com/jetton/airdrops?utm_source=tonapi.io" />
        <UButton
          title="Documentation"
          style="secondary"
          iconRight={<IcArrow />}
          href="https://docs.tonconsole.com/tonconsole/jettons/airdrop?utm_source=tonapi.io"
        />
      </div>
    </div>
  );
});
