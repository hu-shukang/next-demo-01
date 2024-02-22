const UserLayout = ({
  children,
  address,
  name,
}: Readonly<{ children: React.ReactNode; address: React.ReactNode; name: React.ReactNode }>) => {
  return (
    <div style={{ border: '1px solid green', padding: '20px' }}>
      <div style={{ color: 'green' }}>user layout start</div>
      {children}
      <div style={{ border: '1px solid red', padding: '20px' }}>{address}</div>
      <div style={{ border: '1px solid black', padding: '20px' }}>{name}</div>
      <div style={{ color: 'green' }}>user layout end</div>
    </div>
  );
};

export default UserLayout;
