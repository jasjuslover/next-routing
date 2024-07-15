import { Blog } from "@/model/blog";
import { delay } from "@/utils/helper/helper";
import { api } from "@/utils/network/axios";
import Link from "next/link";

export default async function BlogPage() {
  const response = await api.get<Blog[]>("/api/blogs");

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h3 className="mt-5 text-xl font-semibold">From Blog</h3>
      <div className="mt-5 flex flex-col gap-y-4 w-5xl w-full">
        {response.data?.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="space-y-2 w-full bg-white p-5 shadow rounded">
              <h4 className="text-lg font-semibold">{blog.title}</h4>
              <p>{new Date(blog.createdAt || "").toISOString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
