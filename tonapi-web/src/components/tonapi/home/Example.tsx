import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeItems, CodeT } from 'tonapi-web/utils/codeExamples';
import { Api1, Api2, Body1, Body2, Body3, TextMono, Title2 } from 'tonapi-web/utils/textStyles';

const container = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const titleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const textStyle = cx(
  Body1,
  css`
    color: var(--foregroundSecondary);

    & a {
      color: var(--accentBlue);
    }
  `
);

const buttonsContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const buttonStyle = cx(
  Body2,
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 40px;
    cursor: pointer;
    background: var(--linearPrimary);
    color: var(--foregroundSecondary);
    border: 0.5px solid var(--borderPrimary);

    &.active {
      color: var(--constantWhite);
      background: var(--linearSecondary);
    }

    @media (hover: hover) {
      &:hover {
        color: var(--constantWhite);
      }
    }
  `
);

const pathItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  overflow: hidden;
  gap: 12px;
  padding: 20px 12px 0 20px;
`;

const pathType = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px 10px;
  border-radius: 6px;
  width: 40px;
  border: 0.5px solid var(--backgroundBlue);
  background-color: var(--backgroundBlue);
  color: var(--accentBlue);
`;

const syntaxStyle = cx(
  Body3,
  css`
    & {
      .hljs {
        color: var(--constantWhite);
      }

      .number-lines,
      .hljs-comment,
      .hljs-quote,
      .hljs-punctuation {
        color: var(--foregroundSecondary);
      }

      .hljs-selector-attr,
      .hljs-selector-class,
      .hljs-selector-pseudo,
      .hljs-addition,
      .hljs-meta,
      .hljs-regexp,
      .hljs-number {
        color: var(--accentBlue);
      }

      .hljs-attr,
      .hljs-function,
      .hljs-doctag,
      .hljs-formula,
      .hljs-keyword {
        color: var(--accentPurple);
      }

      .hljs-template-variable,
      .hljs-type,
      .hljs-variable,
      .hljs-built_in,
      .hljs-class,
      .hljs-title,
      .hljs-literal {
        color: var(--accentOrange);
      }

      .hljs-deletion,
      .hljs-name,
      .hljs-section,
      .hljs-selector-tag,
      .hljs-subst,
      .hljs-operator {
        color: var(--accentRed);
      }

      .hljs-bullet,
      .hljs-link,
      .hljs-meta,
      .hljs-selector-id,
      .hljs-symbol,
      .hljs-string {
        color: var(--accentGreen);
      }

      .hljs-comment,
      .hljs-quote,
      .hljs-emphasis {
        font-family: var(--fontMono);
      }

      .hljs-strong {
        font-weight: 700;
      }

      .hljs-link {
        text-decoration: underline;
      }
    }
  `
);

const codeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  min-width: 60%;
  max-width: 60%;
  height: 330px;
  max-height: 330px;

  &::after,
  &::before {
    position: absolute;
    content: '';
    width: 101%;
    height: 101%;
  }

  &::after {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0) 40%,
      var(--backgroundPrimary) 80%,
      var(--backgroundPrimary) 100%
    );
  }

  &::before {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, var(--backgroundPrimary) 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 412px;
    max-width: 100%;
  }
`;

const codeContent = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 330px;
  background: var(--linearPrimary);
  border: 0.5px solid var(--borderPrimary);
  border-radius: 16px;
`;

const codeExample = cx(
  syntaxStyle,
  css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 20px;
    -webkit-overflow-scrolling: touch;

    & pre,
    & code {
      padding: 0;
      margin: 0;
    }
  `
);

const CodeContent = React.memo((props: { code: CodeT }) => {
  const [code, setCode] = React.useState<string>(props.code.json.slice(0, 1));

  React.useEffect(() => {
    let timer: any;
    let i = 1;
    timer = setInterval(() => {
      if (i > props.code.json.length) {
        clearInterval(timer);
      }
      setCode(props.code.json.slice(0, i));
      i += 3;
    }, 10);

    return () => clearInterval(timer);
  }, [props.code]);

  return (
    <div className={codeContainer}>
      <div className={codeContent}>
        <div className={pathItem}>
          <div className={cx(Api2, TextMono, pathType, 'GET')}>GET</div>
          <div className={cx(Api1, TextMono)}>{props.code.path}</div>
        </div>
        <div className={codeExample}>
          <SyntaxHighlighter language="json" useInlineStyles={false}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
});

export const Example = React.memo(() => {
  const [index, setIndex] = React.useState(0);
  const [code, setCode] = React.useState<CodeT>(codeItems[index]);

  let timerRef = React.useRef<any>(null);

  const startInterval = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      let i = index + 1;
      setIndex(i);
      setCode(codeItems[i % codeItems.length]);
    }, 5000);
  };

  React.useEffect(() => {
    startInterval();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [index]);

  return (
    <div className={container}>
      <div className={titleContainer}>
        <div className={infoContainer}>
          <h2 className={Title2}>Request Examples</h2>
          <p className={textStyle}>
            <span>
              Examples are provided in various formats that will be useful for work. More information in the{' '}
              <Link href="https://docs.tonconsole.com/tonapi/rest-api" target="_blank">
                documentation
              </Link>
              .
            </span>
          </p>
        </div>
        <div className={buttonsContainer}>
          {codeItems.map((i, j) => (
            <div
              key={i.key}
              className={cx(buttonStyle, code.key === i.key && 'active')}
              onClick={() => {
                setIndex(j);
                setCode(i);
                startInterval();
              }}
            >
              {i.title}
            </div>
          ))}
        </div>
      </div>
      <CodeContent code={code} />
    </div>
  );
});
