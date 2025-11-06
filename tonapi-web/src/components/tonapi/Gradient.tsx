import React from 'react';
import { css, cx } from '@linaria/core';
import { useRouter } from 'next/router';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const gradientStyle = css`
  position: absolute;
  z-index: -1;
  display: flex;
  width: 100%;
  height: 80%;
  background: radial-gradient(
    circle,
    var(--gradientPrimary) 0,
    var(--gradientPrimary) 15%,
    var(--backgroundPrimary) 65%,
    var(--backgroundPrimary) 100%
  );

  &.top {
    top: 0;
    transform: translateY(-55%);
  }

  &.bottom {
    bottom: 0;
    transform: translateY(55%);
  }
`;

export const Gradient = React.memo(() => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  if (!isHome) {
    return null;
  }

  return (
    <div className={container}>
      <div className={content}>
        <div className={cx(gradientStyle, 'top')} />
        <div className={cx(gradientStyle, 'bottom')} />
      </div>
    </div>
  );
});
