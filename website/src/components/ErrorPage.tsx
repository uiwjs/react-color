import React, { forwardRef, PropsWithoutRef } from 'react';
import { useRouteError } from 'react-router-dom';

export interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ErrorPage = forwardRef<HTMLDivElement, PropsWithoutRef<ErrorPageProps>>(({ children, ...htmlProps }, ref) => {
  const error = useRouteError() as Response;
  return (
    <div id="error-page" {...htmlProps} ref={ref}>
      <h1>Oops!</h1>
      <p>抱歉，发生了意外错误。</p>
      <p>
        {error?.status && <em>{error?.status}</em>}
        {error?.statusText && <i>{decodeURI(error?.statusText || '')}</i>}
      </p>
    </div>
  );
});
