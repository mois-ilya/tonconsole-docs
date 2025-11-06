import React from 'react';
import { css } from '@linaria/core';
import { Title } from 'tonapi-web/components/tonapi/home/Title';
import { Documentation } from 'tonapi-web/components/tonapi/home/Documentation';
import { KeyFeatures } from 'tonapi-web/components/tonapi/home/KeyFeatures';
import { Example } from 'tonapi-web/components/tonapi/home/Example';
import { Console } from 'tonapi-web/components/tonapi/home/Console';
import { Clients } from 'tonapi-web/components/tonapi/home/Clients';
import { Pricing } from 'tonapi-web/components/tonapi/home/Pricing';
import { Services } from 'tonapi-web/components/tonapi/home/Services';

const container = css`
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 80px;
  }
`;

export const HomeFragment = React.memo(() => {
  return (
    <div className={container}>
      <Title />
      <Documentation />
      <KeyFeatures />
      <Example />
      <Console />
      <Clients />
      <Pricing />
      <Services />
    </div>
  );
});
