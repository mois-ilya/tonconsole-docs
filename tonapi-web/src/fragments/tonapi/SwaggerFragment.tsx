import React from 'react';
import { css, cx } from '@linaria/core';
import SwaggerUI from 'swagger-ui-react';

const container = cx(
  'doc-container',
  css`
    display: flex;
    flex-direction: column;
    flex: 1;
  `
);

const useHighlightAnchor = () => {
  const highlightElement = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.classList.add('opblock-highlighted');

        const timer = setTimeout(() => {
          targetElement.classList.remove('opblock-highlighted');
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('hashchange', highlightElement);

    return () => {
      window.removeEventListener('hashchange', highlightElement);
    };
  }, []);

  return { highlightElement };
};

type SwaggerFragmentProps = {
  url: string;
};

export const SwaggerFragment = React.memo(({ url }: SwaggerFragmentProps) => {
  const { highlightElement } = useHighlightAnchor();

  const handleComplete = () => {
    const hash = window.location.hash;
    const element = hash ? document.querySelector(hash) : null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    highlightElement();
  };

  return (
    <div className={container}>
      <SwaggerUI url={url} onComplete={handleComplete} displayOperationId={true} />
    </div>
  );
});
