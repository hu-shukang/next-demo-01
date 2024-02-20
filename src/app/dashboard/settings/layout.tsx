import Link from 'next/link';

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div style={{ border: '1px solid #dddddd', padding: '20px' }}>
      <h2>Settings</h2>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/dashboard/settings/password">password</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/dashboard/settings/profile">profile</Link>
      </div>
      {children}
    </div>
  );
};

export default SettingsLayout;
