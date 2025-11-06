import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, cx } from '@linaria/core';
import { Body2 } from 'tonapi-web/utils/textStyles';
import IcLogo from 'tonapi-web/assets/icons/ic-logo.svg';

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 1280px) {
    padding-right: 80px;
  }
`;

const logoContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  color: var(--constantWhite);
`;

const titleStyle = css`
  font-size: 27px;
  font-weight: 600;
  line-height: 32px;
`;

const linksContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const linkStyle = cx(
  Body2,
  css`
    cursor: pointer;
    color: var(--foregroundSecondary);

    @media (hover: hover) {
      &:hover {
        color: var(--constantWhite);
      }
    }
  `
);

export const Header = React.memo(() => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  const handleNavigate = React.useCallback(async (id: string) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={container}>
      <Link href="/" className={logoContent}>
        <IcLogo />
        <div className={titleStyle}>TON API</div>
      </Link>
      {isHome && (
        <div className={linksContent}>
          <div className={linkStyle} onClick={() => handleNavigate('keyFeatures')}>
            Key Features
          </div>
          <div className={linkStyle} onClick={() => handleNavigate('clients')}>
            Clients
          </div>
          <div className={linkStyle} onClick={() => handleNavigate('pricing')}>
            Pricing
          </div>
        </div>
      )}
    </div>
  );
});
