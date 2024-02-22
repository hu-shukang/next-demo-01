import Link from 'next/link';

const AddressPart = () => {
  return (
    <div>
      <div>address</div>
      <Link href={'/user/viewer'}>to viewer</Link>
    </div>
  );
};

export default AddressPart;
