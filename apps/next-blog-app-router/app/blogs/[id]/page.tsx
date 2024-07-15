import { Blog } from "@/model/blog";
import { api } from "@/utils/network/axios";
import { Metadata } from "next";
import React from "react";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const response = await api.get<Blog>(`/api/blogs/${id}`);

  return {
    title: response.data?.title,
  };
}

async function BlogDetail({ params: { id } }: Props) {
  const response = await api.get<Blog>(`/api/blogs/${id}`);

  const data = response.data;

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
