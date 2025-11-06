import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Body2, Body3, Label1, Label2, Num1, Title2 } from 'tonapi-web/utils/textStyles';
import IcStreaming from 'tonapi-web/assets/icons/ic-streaming.svg';
import IcRest from 'tonapi-web/assets/icons/ic-rest.svg';
import IcHooks from 'tonapi-web/assets/icons/ic-hooks.svg';
import IcLiteServers from 'tonapi-web/assets/icons/ic-liteservers.svg';
import IcJsGray from 'tonapi-web/assets/icons/ic-js-gray.svg';
import IcJsColor from 'tonapi-web/assets/icons/ic-js-color.svg';
import IcGoGray from 'tonapi-web/assets/icons/ic-go-gray.svg';
import IcGoColor from 'tonapi-web/assets/icons/ic-go-color.svg';
import IcPythonGray from 'tonapi-web/assets/icons/ic-python-gray.svg';
import IcPythonColor from 'tonapi-web/assets/icons/ic-python-color.svg';
import IcJavaGray from 'tonapi-web/assets/icons/ic-java-gray.svg';
import IcJavaColor from 'tonapi-web/assets/icons/ic-java-color.svg';
import IcApps from 'tonapi-web/assets/icons/ic-applications.svg';
import IcRps from 'tonapi-web/assets/icons/ic-rps.svg';
import IcGraphql from 'tonapi-web/assets/icons/ic-graphql.svg';
import IcGithub from 'tonapi-web/assets/icons/ic-github-circle.svg';

const container = css`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 40px;
  gap: 24px;
`;

const content = css`
  display: grid;
  grid-template-areas: 'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks' 'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers' 'aplications aplications aplications rps rps rps graphql graphql graphql opensource opensource opensource';
  gap: 16px;
  grid-auto-columns: 1fr;

  @media (max-width: 1100px) {
    grid-template-areas: 'streaming streaming streaming streaming rest rest rest rest webhooks webhooks webhooks webhooks' 'sdk sdk sdk sdk sdk sdk sdk sdk liteservers liteservers liteservers liteservers' 'aplications aplications aplications aplications aplications aplications rps rps rps rps rps rps' 'graphql graphql graphql graphql graphql graphql opensource opensource opensource opensource opensource opensource';
  }

  @media (max-width: 850px) {
    grid-template-areas: 'streaming rest' 'webhooks liteservers' 'sdk sdk' 'aplications rps' 'graphql opensource';
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
`;

const cardContainer = css`
  display: flex;
  border-radius: 12px;
  background: var(--linearPrimary);
  border: 0.5px solid var(--borderPrimary);

  @media (hover: hover) {
    &:hover {
      background: var(--linearSecondary);
    }
  }

  &.streaming {
    grid-area: streaming;
  }

  &.rest {
    grid-area: rest;
  }

  &.webhooks {
    grid-area: webhooks;
  }

  &.sdk {
    grid-area: sdk;
  }

  &.liteservers {
    grid-area: liteservers;
  }

  &.aplications {
    grid-area: aplications;
  }

  &.rps {
    grid-area: rps;
  }

  &.graphql {
    grid-area: graphql;
  }

  &.opensource {
    grid-area: opensource;
  }
`;

const baseCardContainer = css`
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 24px 18px 24px;
  gap: 16px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 20px 20px 16px 20px;
  }
`;

const baseCardContent = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const sdkCardContainer = css`
  flex-direction: row;
  padding: 20px 24px 24px 24px;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 20px 20px 20px;
  }
`;

const sdkCardIconContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;

    & .other {
      & p {
        font-size: 12px;
      }
      & svg {
        width: auto;
        height: 36px;
      }
    }
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const sdkIconsTopContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
    & svg {
      width: 56px;
      height: 56px;
    }
  }
`;

const sdkIconContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;

  & svg {
    transition: opacity 0.2s ease-in-out;
  }

  & svg:last-child {
    position: absolute;
    opacity: 0;
  }

  &:hover {
    & svg:first-child {
      opacity: 0;
    }
    & svg:last-child {
      opacity: 1;
    }
  }
`;

const smallCardContainer = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const cardTextContent = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
`;

const rowStyle = css`
  display: flex;
  flex-direction: row;
`;

const textPrimary = css`
  color: var(--constantWhite);
`;

const textSecondary = css`
  color: var(--foregroundSecondary);
`;

const textAccent = css`
  color: var(--accentBlue);
`;

const restApiLinks = css`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 12px;
  position: relative;
  z-index: 1;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 4px;
  }
  @media (max-width: 850px) {
    flex-direction: row;
    gap: 12px;
  }
`;

const overlayLink = css`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  text-indent: -9999px;
`;

interface BaseCardProps {
  title: string;
  text: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const BaseCard = React.memo((props: BaseCardProps) => {
  return (
    <Link
      href={props.href}
      target={props.href.startsWith('http') ? '_blank' : undefined}
      className={cx(cardContainer, baseCardContainer, props.className)}
    >
      {props.icon}
      <div className={baseCardContent}>
        <div className={cardTextContent}>
          <h3 className={cx(Label1, textPrimary)}>{props.title}</h3>
          <p className={cx(Body2, textSecondary)}>{props.text}</p>
        </div>
        <div className={cx(Label2, textAccent)}>Explore Options</div>
      </div>
    </Link>
  );
});

const RestApiCard = React.memo(() => {
  const primaryHref = 'https://docs.tonconsole.com/tonapi/rest-api?utm_source=tonapi.io';

  return (
    <div className={cx(cardContainer, baseCardContainer, 'rest')}>
      {/* Make full-card clickable overlay, inner links stay on top */}
      <Link href={primaryHref} target="_blank" aria-label="REST API" className={overlayLink} />

      <IcRest />
      <div className={baseCardContent}>
        <div className={cardTextContent}>
          <h3 className={cx(Label1, textPrimary)}>REST API</h3>
          <p className={cx(Body2, textSecondary)}>
            The core API for interacting with the TON blockchain. Manage accounts, jettons, NFTs, emulate transactions,
            gasless, and more.
          </p>
        </div>

        <div className={restApiLinks}>
          <Link href={primaryHref} target="_blank" className={cx(Label2, textAccent)}>
            Explore Options
          </Link>
          <Link href="/api-v2" className={cx(Label2, textAccent)}>
            Swagger&nbsp;UI
          </Link>
        </div>
      </div>
    </div>
  );
});

const WebhooksCard = React.memo(() => {
  const primaryHref = 'https://docs.tonconsole.com/tonapi/webhooks-api?utm_source=tonapi.io';

  return (
    <div className={cx(cardContainer, baseCardContainer, 'webhooks')}>
      {/* Make full-card clickable overlay, inner links stay on top */}
      <Link href={primaryHref} target="_blank" aria-label="REST API" className={overlayLink} />

      <IcHooks />
      <div className={baseCardContent}>
        <div className={cardTextContent}>
          <h3 className={cx(Label1, textPrimary)}>Webhooks</h3>
          <p className={cx(Body2, textSecondary)}>
            Subscribe to blockchain events and react instantly using our webhook methods. Stay in sync with what matters
            in real time.
          </p>
        </div>

        <div className={restApiLinks}>
          <Link href={primaryHref} target="_blank" className={cx(Label2, textAccent)}>
            Explore Options
          </Link>
          <Link href="/webhooks-api" className={cx(Label2, textAccent)}>
            Swagger&nbsp;UI
          </Link>
        </div>
      </div>
    </div>
  );
});

const SdkCard = React.memo(() => {
  return (
    <div className={cx(cardContainer, sdkCardContainer, 'sdk')}>
      {/* Make full-card clickable overlay, inner links stay on top */}
      <Link href="https://docs.tonconsole.com/tonapi/sdk" target="_blank" aria-label="SDK" className={overlayLink} />

      <div className={cardTextContent}>
        <h2 className={cx(Title2, textPrimary)}>SDK</h2>
        <p className={cx(Body2, textSecondary)}>
          Our SDK is designed to empower developers, streamline workflows, and supercharge your application's
          capabilities.
        </p>
      </div>
      <div className={sdkCardIconContainer}>
        <div className={sdkIconsTopContainer}>
          <Link href="https://www.npmjs.com/package/@ton-api/client" target="_blank" className={sdkIconContainer}>
            <IcJsGray />
            <IcJsColor />
          </Link>
          <Link href="https://github.com/tonkeeper/tonapi-go" target="_blank" className={sdkIconContainer}>
            <IcGoGray />
            <IcGoColor />
          </Link>
        </div>
        <div className={cx(columnStyle, 'other')}>
          <p className={cx(Body3, textSecondary)}>Maintained by the community</p>
          <div className={rowStyle}>
            <Link href="https://github.com/h6x0r/tonapi4j/" target="_blank" className={sdkIconContainer}>
              <IcJavaGray />
              <IcJavaColor />
            </Link>
            <Link href="https://pypi.org/project/pytonapi/" target="_blank" className={sdkIconContainer}>
              <IcPythonGray />
              <IcPythonColor />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

interface SmallCardProps {
  textContent: React.ReactNode;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

const SmallCard = React.memo((props: SmallCardProps) => {
  if (!!props.href) {
    return (
      <Link href={props.href} target="_blank" className={cx(cardContainer, smallCardContainer, props.className)}>
        {props.textContent}
        {props.icon}
      </Link>
    );
  }
  return (
    <div className={cx(cardContainer, smallCardContainer, props.className)}>
      {props.textContent}
      {props.icon}
    </div>
  );
});

export const KeyFeatures = React.memo(() => {
  return (
    <div className={container} id="keyFeatures">
      <h2 className={Title2}>Key Features</h2>
      <div className={content}>
        <BaseCard
          title="Streaming API"
          href="https://docs.tonconsole.com/tonapi/streaming-api?utm_source=tonapi.io"
          text="Deliver dynamic, real-time data with our Streaming API — essential for applications where up-to-the-second updates matter most."
          icon={<IcStreaming />}
          className="streaming"
        />
        <RestApiCard />
        <WebhooksCard />
        <SdkCard />
        <BaseCard
          title="Liteservers"
          href="https://docs.tonconsole.com/tonapi/liteservers"
          text="Retrieve raw data from the blockchain in a trustless way with proof verification."
          icon={<IcLiteServers />}
          className="liteservers"
        />
        <SmallCard
          className="aplications"
          textContent={
            <div className={columnStyle}>
              <div className={cx(Label2, textSecondary)}>Applications</div>
              <div className={Num1}>1 456</div>
            </div>
          }
          icon={<IcApps />}
        />
        <SmallCard
          className="rps"
          textContent={
            <div className={columnStyle}>
              <div className={cx(Label2, textSecondary)}>RPS</div>
              <div className={Num1}>120 000</div>
            </div>
          }
          icon={<IcRps />}
        />
        <SmallCard
          className="graphql"
          href="https://docs.tonconsole.com/tonapi/graphql?utm_source=tonapi.io"
          textContent={<div className={cx(Num1, textPrimary)}>GraphQL</div>}
          icon={<IcGraphql />}
        />
        <SmallCard
          className="opensource"
          href="https://github.com/tonkeeper/opentonapi"
          textContent={
            <div className={columnStyle}>
              <div className={cx(Label2, textPrimary)}>Opensource</div>
              <div className={cx(Body3, textSecondary)}>Limited version</div>
            </div>
          }
          icon={<IcGithub />}
        />
      </div>
    </div>
  );
});
