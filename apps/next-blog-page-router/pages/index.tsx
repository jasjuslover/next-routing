import Image from "next/image";
import { Inter } from "next/font/google";
import { api } from "@/utils/network/axios";
import { Blog } from "@/model/blog";

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-semibold">Beranda</h1>

      <div className="mt-5 flex flex-col gap-y-4 w-5xl w-full">
        {blogs?.map((blog) => (
          <a href={`/${blog.id}`}>
            <div className="space-y-2 w-full bg-white p-5 shadow rounded">
              <h4 className="text-lg font-semibold">{blog.title}</h4>
              <p>{new Date(blog.createdAt || "").toISOString()}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const response = await api.get("/api/blogs");

  return {
    props: {
      blogs: response.data || [],
    },
  };
};
