'use client';

import { useCallback } from 'react';

const ResetPasswordBtn = () => {
  const resetPassword = useCallback(() => {
    throw new Error('reset password error!');
  }, []);

  return <button onClick={resetPassword}>reset password</button>;
};

export default ResetPasswordBtn;
