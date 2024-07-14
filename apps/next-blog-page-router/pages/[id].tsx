import { Blog } from "@/model/blog";
import { api } from "@/utils/network/axios";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from "next";

type Props = {
  data: Blog | undefined;
};

function BlogDetail({ data }: Props) {
  console.log({ data });
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-semibold">{data?.title || ""}</h1>

      <div className="mt-5 flex flex-col gap-y-4 w-5xl w-full">
        {data?.content || ""}
      </div>
    </main>
  );
}

export default BlogDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.get<Blog[]>("/api/blogs");

  const paths = res.data.map((blog) => ({
    params: { id: blog.id?.toString() },
  }));

  return {
    paths,
    fallback: true, // Jika fallback: true, halaman yang tidak di-pre-render akan dibuat pada permintaan pertama
  };
};

type ContextParam = {
  id: string;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ContextParam>
) => {
  const { id } = context.params!;
  try {
    const res = await api.get(`/api/blogs/${id}`);
    const blog = res.data;

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data: blog },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
