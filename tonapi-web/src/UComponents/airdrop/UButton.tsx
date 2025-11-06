import React from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';
import { Label2 } from 'tonapi-web/utils/textStylesAirdrop';

const container = cx(
  Label2,
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
      background-color: var(--constantBlack);
      color: var(--constantWhite);
    }

    &.secondary {
      background-color: var(--backgroundSecondary);
      color: var(--constantBlack);
    }

    @media (hover: hover) {
      &.primary:hover {
        opacity: 0.8;
      }
      &.secondary:hover {
        background-color: var(--backgroundSecondaryHover);
      }
    }
  `
);

interface UButtonProps {
  title: string;
  style?: 'primary' | 'secondary';
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
}

export const UButton = React.memo((props: UButtonProps) => {
  const { title, style = 'primary', className, iconLeft, iconRight, href } = props;
  if (!!href) {
    return (
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        className={cx(container, style, className)}
      >
        {!!iconLeft && iconLeft}
        <div>{title}</div>
        {!!iconRight && iconRight}
      </Link>
    );
  }
  return (
    <div className={cx(container, style, className)}>
      {!!iconLeft && iconLeft}
      <div>{title}</div>
      {!!iconRight && iconRight}
    </div>
  );
});
