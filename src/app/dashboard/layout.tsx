import Link from 'next/link';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div style={{ border: '1px solid #ff0000', padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/dashboard/settings">settings</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/dashboard/analytics">analytics</Link>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
