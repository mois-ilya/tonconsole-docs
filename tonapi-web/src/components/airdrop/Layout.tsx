import React from 'react';
import Head from 'next/head';
import { css } from '@linaria/core';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  color: var(--constantBlack);
  background-color: var(--constantWhite);

  :global() {
    .htmlpage {
      background-color: var(--constantWhite);
    }
  }
`;

const content = css`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-width: 1128px;
  width: 100%;
  margin: auto;
  flex: 1;
  gap: 40px;
`;

export const AirdropLayout = React.memo((props: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>TON API: Airdrop</title>
        <meta
          name="description"
          content="Easily send any TON Token to millions wallets without Coding. No extra fees, only tiny blockchain fee."
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={container}>
        <div className={content}>{props.children}</div>
      </div>
    </>
  );
});
