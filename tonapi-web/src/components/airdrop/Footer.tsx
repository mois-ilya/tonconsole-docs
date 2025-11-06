import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Link1 } from 'tonapi-web/utils/textStylesAirdrop';
import IcTonkeeper from 'tonapi-web/assets/airdrop/ic-tonkeeper.svg';

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const rowContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const linksContent = cx(
  rowContent,
  css`
    gap: 24px;
  `
);

const poweredContent = cx(
  rowContent,
  css`
    gap: 8px;
  `
);

const logoContent = cx(
  rowContent,
  css`
    gap: 2px;
    color: var(--constantBlack);

    @media (hover: hover) {
      &:hover {
        & svg path {
          fill: var(--constantBlack);
        }
      }
    }
  `
);

const textStyle = cx(
  Link1,
  css`
    color: var(--foregroundTertiary);
  `
);

const linkStyle = cx(
  textStyle,
  css`
    @media (hover: hover) {
      &:hover {
        color: var(--constantBlack);
      }
    }
  `
);

export const Footer = React.memo(() => {
  return (
    <div className={container}>
      <div className={linksContent}>
        <Link href="https://t.me/tonrostislav" target="_blank" className={linkStyle}>
          Support
        </Link>
        <Link href="https://t.me/tonconsole_com" target="_blank" className={linkStyle}>
          Telegram channel
        </Link>
      </div>
      <div className={poweredContent}>
        <div className={textStyle}>Powered by</div>
        <Link href="https://tonkeeper.com" target="_blank" className={logoContent}>
          <IcTonkeeper />
          <div className={linkStyle}>Tonkeeper</div>
        </Link>
      </div>
    </div>
  );
});
