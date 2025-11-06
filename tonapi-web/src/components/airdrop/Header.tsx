import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { useOutsideClick } from 'tonapi-web/utils/useOutsideClick';
import { UMenu } from 'tonapi-web/UComponents/airdrop/UMenu';
import { Link1, TitleLogo } from 'tonapi-web/utils/textStylesAirdrop';
import IcLogo from 'tonapi-web/assets/airdrop/ic-logo-top.svg';
import IcMenu from 'tonapi-web/assets/airdrop/ic-menu-28.svg';

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
`;

const logoContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: var(--constantBlack);
`;

const content = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;

  @media (max-width: 650px) {
    display: none;
  }
`;

const mobileMenu = css`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  @media (max-width: 650px) {
    display: flex;
  }
`;

const linkStyle = cx(
  Link1,
  css`
    color: var(--foregroundTertiary);
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: var(--constantBlack);
      }
    }
  `
);

const menuItems: { title: string; id: string }[] = [
  {
    title: 'Key Features',
    id: 'keyFeatures'
  },
  {
    title: 'Run an Airdrop',
    id: 'airdrop'
  },
  {
    title: 'Clients',
    id: 'clients'
  }
];

export const Header = React.memo(() => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  const handleNavigate = React.useCallback(async (id: string) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={container}>
      <Link href="/" className={logoContent}>
        <IcLogo />
        <div className={TitleLogo}>TON API</div>
      </Link>
      <div className={content}>
        {menuItems.map((i, j) => (
          <div key={j} className={linkStyle} onClick={() => handleNavigate(i.id)}>
            {i.title}
          </div>
        ))}
      </div>
      <div className={mobileMenu} onClick={() => setIsOpen(!isOpen)} ref={ref}>
        <IcMenu />
        {isOpen && <UMenu items={menuItems} onClick={id => handleNavigate(id)} />}
      </div>
    </div>
  );
});
