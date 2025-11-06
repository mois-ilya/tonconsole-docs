import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Label3 } from 'tonapi-web/utils/textStyles';

const container = cx(
  Label3,
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    white-space: nowrap;
    cursor: pointer;
    gap: 8px;
    transition: background-color 0.1s ease-in-out;

    &.primary {
      background-color: var(--constantWhite);
      color: var(--constantBlack);
    }

    &.secondary {
      background-color: rgba(255, 255, 255, 0.08);
      color: var(--constantWhite);
    }

    @media (hover: hover) {
      &.primary:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }

      &.secondary:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    @media (max-width: 768px) {
      gap: 4px;
    }
  `
);

interface UButtonProps {
  title: string;
  style?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const UButton = React.memo((props: UButtonProps) => {
  const { title, style = 'secondary', className, icon, href } = props;
  if (!!href) {
    return (
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        className={cx(container, style, className)}
      >
        {!!icon && icon}
        <div>{title}</div>
      </Link>
    );
  }
  return (
    <div className={cx(container, style, className)}>
      {!!icon && icon}
      <div>{title}</div>
    </div>
  );
});
