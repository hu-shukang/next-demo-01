type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const BlogDetailPage = ({ params }: Props) => {
  return (
    <div>
      <h1>blog detail page</h1>
      <div>id: {params.id}</div>
    </div>
  );
};

export default BlogDetailPage;
