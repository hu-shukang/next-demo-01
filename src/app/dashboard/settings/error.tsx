'use client';

import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const SettingsErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    alert('error comming!');
  }, [error]);

  return (
    <div>
      <h2>error page.</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default SettingsErrorPage;
