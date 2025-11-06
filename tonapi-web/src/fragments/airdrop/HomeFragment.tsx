import React from 'react';
import { css } from '@linaria/core';
import { AirdropLayout } from 'tonapi-web/components/airdrop/Layout';
import { Header } from 'tonapi-web/components/airdrop/Header';
import { Title } from 'tonapi-web/components/airdrop/Title';
import { KeyFeatures } from 'tonapi-web/components/airdrop/KeyFeatures';
import { Airdrop } from 'tonapi-web/components/airdrop/Airdrop';
import { Clients } from 'tonapi-web/components/airdrop/Clients';
import { Services } from 'tonapi-web/components/airdrop/Services';
import { Footer } from 'tonapi-web/components/airdrop/Footer';

const container = css`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

export const HomeFragment = React.memo(() => {
  return (
    <AirdropLayout>
      <div className={container}>
        <Header />
        <div className={content}>
          <Title />
          <KeyFeatures />
          <Airdrop />
          <Clients />
          <Services />
        </div>
        <Footer />
      </div>
    </AirdropLayout>
  );
});
