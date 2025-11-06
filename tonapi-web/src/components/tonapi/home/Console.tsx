import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css, cx } from '@linaria/core';
import { Body2, Label1, Label2, Title2 } from 'tonapi-web/utils/textStyles';

const container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const rowContent = css`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const cardContainer = css`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: var(--linearPrimary);
  border: 0.5px solid var(--borderPrimary);
  position: relative;

  & img {
    width: 100%;
    height: auto;
  }

  &.row {
    flex-direction: row;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--linearSecondary);
    }
  }

  @media (max-width: 550px) {
    &.row {
      flex-direction: column;
    }
  }
`;

const imageContainer = cx(
  'image',
  css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    flex: 1;
    min-width: 50%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      & img {
        width: 100%;
        height: auto;
      }
    }
  `
);

const blurContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  left: 20%;

  @media (max-width: 550px) {
    left: 5%;
  }
`;

const blurContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 122px;
  height: 122px;
  border: 1px solid var(--borderPrimary);
  background: var(--linearTertiary);
  backdrop-filter: blur(20px);
  border-radius: 12px;

  & .title {
    font-weight: 400;
    font-size: 42px;
    line-height: 42px;
    color: var(--constantWhite);
  }

  & .text {
    font-weight: 300;
    font-size: 21px;
    line-height: 30px;
    color: var(--foregroundSecondary);
  }

  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 550px) {
    width: 122px;
    height: 122px;
  }
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  padding: 20px 24px 18px 24px;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 20px 20px 16px 20px;
    gap: 8px;
  }
`;

const textContent = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const titleStyle = cx(
  Label1,
  css`
    color: var(--constantWhite);
  `
);

const textStyle = cx(
  Body2,
  css`
    max-width: 490px;
    color: var(--foregroundSecondary);
  `
);

const hideOnDesktop = css`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const hideOnMobile = css`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const linkStyle = css`
  color: var(--accentBlue);
`;

const linksContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 12px;

  position: relative;
  z-index: 1;
`;

const overlayLink = css`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  text-indent: -9999px;
`;

interface TextItemProps {
  title: string;
  description: string;
}

const TextItem = React.memo((props: TextItemProps) => {
  return (
    <div className={textContainer}>
      <div className={textContent}>
        <div className={titleStyle}>{props.title}</div>
        <div className={textStyle}>{props.description}</div>
      </div>
      <div className={cx(Label2, linkStyle)}>Explore Options</div>
    </div>
  );
});

export const Console = React.memo(() => {
  return (
    <div className={container}>
      <h2 className={Title2}>TON Console</h2>
      <div className={content}>
        <Link
          className={cx(cardContainer, 'row')}
          href="https://docs.tonconsole.com/tonconsole/tonkeeper-messages?utm_source=tonapi.io"
          target="_blank"
        >
          <TextItem
            title="Tonkeeper Messages"
            description="Push notifications for users who have connected to your dApp via Tonkeeper. Notifications can help triple your DAU and double your Daily Revenue."
          />
          <div className={imageContainer}>
            <Image src="/images/console/messages.png" alt="img" width={540} height={320} className={hideOnMobile} />
            <Image src="/images/console/messages2.png" alt="img" width={358} height={332} className={hideOnDesktop} />
            <div className={blurContainer}>
              <div className={blurContent}>
                <div className="title">х2</div>
                <div className="text">revenue</div>
              </div>
              <div className={blurContent}>
                <div className="title">х3</div>
                <div className="text">DAU</div>
              </div>
            </div>
          </div>
        </Link>
        <div className={rowContent}>
          <div className={cardContainer}>
            {/* Make full-card clickable overlay, inner links stay on top */}
            <Link href="https://tonapi.io/airdrop" target="_blank" aria-label="SDK" className={overlayLink} />

            <Image src="/images/console/airdrop.png" alt="img" width={540} height={148} />
            <div className={textContainer}>
              <div className={textContent}>
                <div className={titleStyle}>TONAPI Airdrop</div>
                <div className={textStyle}>
                  Simplify airdrop with our solution on the TON Blockchain. Distribute Jettons to millions of users
                  quickly, without the need for coding. Without extra fees for you.
                </div>
              </div>
              <div className={linksContainer}>
                <Link
                  href="https://docs.tonconsole.com/tonconsole/jettons/airdrop?utm_source=tonapi.io"
                  target="_blank"
                  className={cx(Label2, linkStyle)}
                >
                  Documentation
                </Link>
                <Link href="https://tonapi.io/airdrop" className={cx(Label2, linkStyle)}>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <Link
            className={cardContainer}
            href="https://tonconsole.com/jetton/new-jetton?utm_source=tonapi.io"
            target="_blank"
          >
            <Image src="/images/console/minter.png" alt="img" width={540} height={148} />
            <TextItem
              title="Jetton Minter"
              description="Create tokens quickly and easily. A simple tool designed for token creation, giving you full control over the issuance and management of your jettons."
            />
          </Link>
        </div>
        <div className={rowContent}>
          <Link
            className={cardContainer}
            href="https://docs.tonconsole.com/tonconsole/nft/cnft?utm_source=tonapi.io"
            target="_blank"
          >
            <Image src="/images/console/cnft.png" alt="img" width={540} height={148} />
            <TextItem
              title="cNFT"
              description="Simplify the process to index mintless NFTs with our cNFT indexer. This powerful tool allows you to build large-scale NFT collections quickly and at a lower cost, giving you more flexibility for your NFT projects."
            />
          </Link>
          <Link
            className={cardContainer}
            href="https://docs.tonconsole.com/tonconsole/analytics/examples?utm_source=tonapi.io"
            target="_blank"
          >
            <Image src="/images/console/query.png" alt="img" width={540} height={148} />
            <TextItem
              title="TON Analytics"
              description="Unlock the power of Blockchain analysis with TonAnalytics. Run SQL queries on the TonAPI indexer database to analyze blockchain data effortlessly."
            />
          </Link>
        </div>
      </div>
    </div>
  );
});
