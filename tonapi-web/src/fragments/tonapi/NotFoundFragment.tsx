import React from 'react';
import { css } from '@linaria/core';
import { Body2, Title1 } from 'tonapi-web/utils/textStyles';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid var(--borderPrimary);
  background: var(--linearPrimary);
`;

export const NotFoundFragment = React.memo((props: { title?: string; text?: string }) => {
  return (
    <div className={container}>
      <div className={content}>
        <div className={Title1}>{props.title || '404'}</div>
        <div className={Body2}>{props.text || "Sorry, didn't find any result"}</div>
      </div>
    </div>
  );
});
