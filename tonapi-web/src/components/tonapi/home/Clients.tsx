import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Body1, Title2 } from 'tonapi-web/utils/textStyles';
import IcAvanchangeGrey from 'tonapi-web/assets/clients/grey/ic-avanchange.svg';
import IcAvanchangeColor from 'tonapi-web/assets/clients/color/ic-avanchange.svg';
import IcBitgetGrey from 'tonapi-web/assets/clients/grey/ic-bitget.svg';
import IcBitgetColor from 'tonapi-web/assets/clients/color/ic-bitget.svg';
import IcChangellyGrey from 'tonapi-web/assets/clients/grey/ic-changelly.svg';
import IcChangellyColor from 'tonapi-web/assets/clients/color/ic-changelly.svg';
import IcCoingeckoGrey from 'tonapi-web/assets/clients/grey/ic-coingecko.svg';
import IcCoingeckoColor from 'tonapi-web/assets/clients/color/ic-coingecko.svg';
import IcDedustGrey from 'tonapi-web/assets/clients/grey/ic-dedust.svg';
import IcDedustColor from 'tonapi-web/assets/clients/color/ic-dedust.svg';
import IcGetgemsGrey from 'tonapi-web/assets/clients/grey/ic-getgems.svg';
import IcGetgemsColor from 'tonapi-web/assets/clients/color/ic-getgems.svg';
import IcMercuryoGrey from 'tonapi-web/assets/clients/grey/ic-mercuryo.svg';
import IcMercuryoColor from 'tonapi-web/assets/clients/color/ic-mercuryo.svg';
import IcMoonpayGrey from 'tonapi-web/assets/clients/grey/ic-moonpay.svg';
import IcMoonpayColor from 'tonapi-web/assets/clients/color/ic-moonpay.svg';
import IcMtwGrey from 'tonapi-web/assets/clients/grey/ic-mtw.svg';
import IcMtwColor from 'tonapi-web/assets/clients/color/ic-mtw.svg';
import IcNeocryptoGrey from 'tonapi-web/assets/clients/grey/ic-neocrypto.svg';
import IcNeocryptoColor from 'tonapi-web/assets/clients/color/ic-neocrypto.svg';
import IcOkxGrey from 'tonapi-web/assets/clients/grey/ic-okx.svg';
import IcOkxColor from 'tonapi-web/assets/clients/color/ic-okx.svg';
import IcStonfiGrey from 'tonapi-web/assets/clients/grey/ic-stonfi.svg';
import IcStonfiColor from 'tonapi-web/assets/clients/color/ic-stonfi.svg';
import IcTonhubGrey from 'tonapi-web/assets/clients/grey/ic-tonhub.svg';
import IcTonhubColor from 'tonapi-web/assets/clients/color/ic-tonhub.svg';
import IcTonscanGrey from 'tonapi-web/assets/clients/grey/ic-tonscan.svg';
import IcTonscanColor from 'tonapi-web/assets/clients/color/ic-tonscan.svg';
import IcTonstarterGrey from 'tonapi-web/assets/clients/grey/ic-tonstarter.svg';
import IcTonstarterColor from 'tonapi-web/assets/clients/color/ic-tonstarter.svg';
import IcTrustGrey from 'tonapi-web/assets/clients/grey/ic-trust.svg';
import IcTrustColor from 'tonapi-web/assets/clients/color/ic-trust.svg';
import IcUnstoppableGrey from 'tonapi-web/assets/clients/grey/ic-unstoppable.svg';
import IcUnstoppableColor from 'tonapi-web/assets/clients/color/ic-unstoppable.svg';

const container = css`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 40px;
  gap: 40px;
`;

const content = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  max-width: 1050px;
`;

const titleContent = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 620px;
`;

const textSecondary = css`
  color: var(--foregroundSecondary);
`;

const iconContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  & .color {
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover {
      & .gray {
        opacity: 0;
      }
      & .color {
        opacity: 1;
      }
    }
  }
`;

const iconStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  &.color {
    position: absolute;
  }
`;

const assets = [
  {
    title: 'dedust',
    href: 'https://dedust.io',
    grey: <IcDedustGrey />,
    color: <IcDedustColor />
  },
  { title: 'trust', href: 'https://trustwallet.com', grey: <IcTrustGrey />, color: <IcTrustColor /> },
  {
    title: 'tonhub',
    href: 'https://tonhub.com',
    grey: <IcTonhubGrey />,
    color: <IcTonhubColor />
  },
  {
    title: 'stonfi',
    href: 'https://ston.fi',
    grey: <IcStonfiGrey />,
    color: <IcStonfiColor />
  },
  {
    title: 'getgems',
    href: 'https://getgems.io',
    grey: <IcGetgemsGrey />,
    color: <IcGetgemsColor />
  },
  { title: 'okx', href: 'https://okx.com', grey: <IcOkxGrey />, color: <IcOkxColor /> },
  {
    title: 'tonscan',
    href: 'https://tonscan.org',
    grey: <IcTonscanGrey />,
    color: <IcTonscanColor />
  },
  {
    title: 'tonstarter',
    href: 'https://tonstarter.com',
    grey: <IcTonstarterGrey />,
    color: <IcTonstarterColor />
  },
  {
    title: 'neocrypto',
    href: 'https://neocrypto.net',
    grey: <IcNeocryptoGrey />,
    color: <IcNeocryptoColor />
  },
  {
    title: 'bitget',
    href: 'https://bitget.com',
    grey: <IcBitgetGrey />,
    color: <IcBitgetColor />
  },
  {
    title: 'mercuryo',
    href: 'https://mercuryo.io',
    grey: <IcMercuryoGrey />,
    color: <IcMercuryoColor />
  },
  {
    title: 'changelly',
    href: 'https://changelly.com',
    grey: <IcChangellyGrey />,
    color: <IcChangellyColor />
  },
  {
    title: 'moonpay',
    href: 'https://moonpay.com',
    grey: <IcMoonpayGrey />,
    color: <IcMoonpayColor />
  },
  { title: 'mtw', href: 'https://mytonwallet.io', grey: <IcMtwGrey />, color: <IcMtwColor /> },
  {
    title: 'avanchange',
    href: 'https://avanchange.com',
    grey: <IcAvanchangeGrey />,
    color: <IcAvanchangeColor />
  },
  {
    title: 'coingecko',
    href: 'https://coingecko.com',
    grey: <IcCoingeckoGrey />,
    color: <IcCoingeckoColor />
  },
  {
    title: 'unstoppable',
    href: 'https://unstoppable.money',
    grey: <IcUnstoppableGrey />,
    color: <IcUnstoppableColor />
  }
];

export const Clients = React.memo(() => {
  return (
    <div className={container} id="clients">
      <div className={titleContent}>
        <h2 className={Title2}>Our Clients</h2>
        <p className={cx(Body1, textSecondary)}>
          We take pride in these partnerships and are committed to continually providing exceptional services and
          solutions tailored to their success.
        </p>
      </div>
      <div className={content}>
        {assets.map(i => (
          <Link key={i.title} href={i.href} target="_blank" className={iconContainer}>
            <div className={cx(iconStyle, 'gray')}>{i.grey}</div>
            <div className={cx(iconStyle, 'color')}>{i.color}</div>
          </Link>
        ))}
      </div>
    </div>
  );
});
