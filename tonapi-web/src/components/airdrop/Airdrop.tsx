import React from 'react';
import Image from 'next/image';
import { css, cx } from '@linaria/core';
import { UButton } from 'tonapi-web/UComponents/airdrop/UButton';
import { Body1, Body3, Label3, Title2, Title4 } from 'tonapi-web/utils/textStylesAirdrop';

const instructions: InstructionItemProps[] = [
  {
    title: '1. Upload .csv of holders',
    text: 'Choose your token and upload a .csv file with recipient addresses.'
  },
  {
    title: '2. Set the Claim Fee',
    text: 'Enter the fee users pay to claim tokens. The airdrop is free for you — Tonkeeper takes 50% of the fee paid by users.'
  },
  {
    title: '3. Launch the Airdrop',
    text: 'Start your airdrop with one click.'
  },
  {
    title: '4. Manage & Withdraw',
    text: 'End the airdrop once claims are completed and transfer your earnings to your wallet.'
  }
];

const airdropInfo: AirdropSectionProps[] = [
  {
    items: [
      {
        title: 'Admin',
        text: 'UQ5T1B5z1upoFSHoX…jg6jkgdt7sduI78u'
      },
      {
        title: 'Jetton',
        text: 'UQD41B5z1upoFSHoX…glDuYgadb9aHj78g'
      },
      {
        title: 'Claim Fee',
        text: '0.15 TON'
      }
    ]
  },
  {
    items: [
      {
        title: 'File Name',
        text: 'Airdrop_dmnd.csv'
      },
      {
        title: 'File Hash',
        text: '9667ae95-1ec1-4656-92ae-2b4fd295a63c'
      }
    ]
  },
  {
    items: [
      {
        title: 'Total Amount',
        text: '100,000 DMND'
      },
      {
        title: 'Recepients',
        text: '95,000'
      }
    ]
  },
  {
    items: [
      {
        title: 'Contracts',
        text: '16'
      }
    ]
  }
];

const container = css`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 40px;
  gap: 20px;
`;

const content = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const titleContent = css`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 12px;
`;

const textSecondary = css`
  color: var(--foregroundTertiary);
`;

const instructionsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const instructionsContent = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const buttonsContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const instructionContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const airdropContainer = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 12px;
  padding: 40px;
  background-color: var(--backgroundSecondary);
  border-radius: 20px;
  width: 100%;
  max-width: 538px;

  @media (max-width: 900px) {
    padding: 24px;
    gap: 8px;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

const airdropBaseContent = css`
  display: flex;
  background-color: var(--constantWhite);
  border-radius: 16px;
`;

const airdropHeader = cx(
  airdropBaseContent,
  css`
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;

    @media (max-width: 900px) {
      padding: 10px;
      gap: 8px;
    }
  `
);

const airdropContent = cx(
  airdropBaseContent,
  css`
    flex-direction: column;
    padding: 8px 16px;

    @media (max-width: 900px) {
      padding: 2px 10px;
    }
  `
);

const imgStyle = css`
  flex-shrink: 0;
  border-radius: 44px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const headerContainer = css`
  display: flex;
  flex-direction: column;
`;

const headerContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const airdropSection = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;

  @media (max-width: 768px) {
    padding: 4px 0;
  }
`;

const airdropTextContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > div:first-child {
    width: 100px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    & > div:first-child {
      width: 70px;
    }
  }
`;

interface InstructionItemProps {
  title: string;
  text: string;
}

const InstructionItem = React.memo((props: InstructionItemProps) => {
  return (
    <div className={instructionContainer}>
      <h3 className={Title4}>{props.title}</h3>
      <p className={cx(Body1, textSecondary)}>{props.text}</p>
    </div>
  );
});

interface AirdropTextItemProps {
  title: string;
  text: string;
}

const AirdropTextItem = React.memo((props: AirdropTextItemProps) => {
  return (
    <div className={airdropTextContainer}>
      <div className={cx(Body3, textSecondary)}>{props.title}</div>
      <div className={Body3}>{props.text}</div>
    </div>
  );
});

interface AirdropSectionProps {
  items: AirdropTextItemProps[];
}

const AirdropSection = React.memo((props: AirdropSectionProps) => {
  return (
    <div className={airdropSection}>
      {props.items.map((i, j) => (
        <AirdropTextItem key={j} {...i} />
      ))}
    </div>
  );
});

const AirdropExample = React.memo(() => {
  return (
    <div className={airdropContainer}>
      <div className={airdropHeader}>
        <Image src="/images/img-diamond.png" alt="" width={44} height={44} className={imgStyle} />
        <div className={headerContainer}>
          <div className={headerContent}>
            <div className={Label3}>Diamond</div>
            <div className={cx(Label3, textSecondary)}>DMND</div>
          </div>
          <div className={cx(Body3, textSecondary)}>Shining bright in the digital economy</div>
        </div>
      </div>
      <div className={airdropContent}>
        {airdropInfo.map((i, j) => (
          <AirdropSection key={j} {...i} />
        ))}
      </div>
    </div>
  );
});

export const Airdrop = React.memo(() => {
  return (
    <div className={container} id="airdrop">
      <div className={titleContent}>
        <h2 className={Title2}>Run an Airdrop</h2>
        <p className={cx(Body1, textSecondary)}>
          Using the Ton Console makes it easy to airdrop your jetton. Follow these step-by-step instructions to get
          started.
        </p>
      </div>
      <div className={content}>
        <div className={instructionsContainer}>
          <div className={instructionsContent}>
            {instructions.map(i => (
              <InstructionItem key={i.title} {...i} />
            ))}
          </div>
          <div className={buttonsContainer}>
            <UButton title="Run an Airdrop" href="https://tonconsole.com/jetton/airdrops?utm_source=tonapi.io" />
            <UButton
              title="Documentation"
              style="secondary"
              href="https://docs.tonconsole.com/tonconsole/jettons/airdrop?utm_source=tonapi.io"
            />
          </div>
        </div>
        <AirdropExample />
      </div>
    </div>
  );
});
