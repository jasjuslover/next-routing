import { Blog } from "@/model/blog";
import { api } from "@/utils/network/axios";
import { GetServerSidePropsContext } from "next";

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

type ContextParam = {
  id: string;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ContextParam>
) => {
  const id = context.params?.id;

  const response = await api.get(`/api/blogs/${id}`);

  return {
    props: {
      data: response.data,
    },
  };
};
