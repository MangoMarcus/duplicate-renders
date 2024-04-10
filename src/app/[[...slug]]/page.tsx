
export function generateStaticParams() {
  return [
    {
      slug: ['foo', 'bar'], // ie. foo/bar
    },
    {
      slug: ['foo', 'baz'], // ie. foo/baz
    },
  ]
}

export default function Page({params}: {
  params: {
    slug: string[] | undefined;
  };
}) {
  const { slug = [] } = params;
  const uri = slug.length === 0 ? '/' : slug.join('/');
  console.log('Rendering page', uri);

  return null;
}
