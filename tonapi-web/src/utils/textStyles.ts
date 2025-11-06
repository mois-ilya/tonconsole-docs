import { css } from '@linaria/core';

export const Title1 = css`
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
  }
`;

export const Title2 = css`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
`;

export const Body1 = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const Body2 = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const Body3 = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const Label1 = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

export const Label2 = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Label3 = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const Num1 = css`
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
`;

export const Api1 = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const Api2 = css`
  font-size: 10px;
  font-weight: 500;
  line-height: 18px;
`;

export const TextMono = css`
  font-family: var(--fontMono);
`;
