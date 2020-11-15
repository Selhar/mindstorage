import Head from "next/head";


export default function IndexPage() {
  return (
    <>
      <Head>
        <title>mindstorage</title>
        <meta
          property="og:title"
          content="mindstorage"
          key="title"
        />
      </Head>
      <h1 className="text-red-900">
        hi
      </h1>
    </>
  );
}
