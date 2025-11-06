import React from 'react';
import { css, cx } from '@linaria/core';
import { Link1 } from 'tonapi-web/utils/textStylesAirdrop';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 160px;
  box-shadow: var(--boxShadow);
  border-radius: 16px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 16px;
  background-color: var(--constantWhite);
  padding: 8px 0;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-name: show;
  animation-fill-mode: forwards;

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const itemStyle = cx(
  Link1,
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    height: 36px;

    @media (hover: hover) {
      &:hover {
        color: var(--foregroundTertiary);
      }
    }
  `
);

interface UMenuProps {
  onClick: (id: string) => void;
  items: { title: string; id: string }[];
}

export const UMenu = React.memo((props: UMenuProps) => {
  return (
    <div className={container}>
      <div className={content}>
        {props.items.map((i, j) => (
          <div key={j} className={itemStyle} onClick={() => props.onClick(i.id)}>
            {i.title}
          </div>
        ))}
      </div>
    </div>
  );
});
