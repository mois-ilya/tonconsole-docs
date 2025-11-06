import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { css } from '@linaria/core';
import { Gradient } from 'tonapi-web/components/tonapi/Gradient';
import { Header } from 'tonapi-web/components/tonapi/Header';
import { Footer } from 'tonapi-web/components/tonapi/Footer';
import IcGit from 'tonapi-web/assets/icons/ic-git-top.svg';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  overflow: hidden;

  color: var(--constantWhite);
  background-color: var(--backgroundPrimary);

  :global() {
    .htmlpage {
      background-color: var(--backgroundPrimary);
    }
  }
`;

const gitIcon = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
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
  z-index: 1;
`;

export const TonApiLayout = React.memo((props: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>TON API — simple way to build dApps and Blockchain Solutions for TON developers</title>
        <meta
          name="description"
          content="Build TON dApps with TONAPI Services: REST API, Webhooks, SDK, Liteservers and other tools. Unlock the full potential of TON API for blockchain development."
        />
        <meta
          name="keywords"
          content="TON API, TON developer, Blockchain Solutions , Build dApps, blockchain development"
        />
        <meta name="theme-color" content="#121212" />
      </Head>
      <div className={container}>
        <Gradient />
        <div className={content}>
          <Header />
          {props.children}
          <Footer />
        </div>
        <Link href="https://github.com/tonkeeper/opentonapi" target="_blank" className={gitIcon}>
          <IcGit />
        </Link>
      </div>
    </>
  );
});
