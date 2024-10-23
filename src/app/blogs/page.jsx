import BlogCard from "@/components/ui/blog/blogCard";
// import HorizontalCard from "@/components/ui/blog/horizontalCard";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
// import { fetchBlogs } from "@/lib/data";
import fs from "fs";
import matter from "gray-matter";
// import Pagination from "@/components/ui/dashboard/pagination/pagination";

const dirContent = fs.readdirSync("public/content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`public/content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

export default async function Page() {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;



  // const { count, blogs } = await fetchBlogs(q,page);
  return (
    <>
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-32  justify-around md:my-10">
          {blogs.map((blog, index) => {
            return (
              <div className="" key={index}>
                <BlogCard img={blog.img} title={blog.title} slug={blog.slug} />
              </div>
            );
          })}
        </div>

        {/* <Pagination count={count} items={6} /> */}
      </MaxWidthWrapper>
    </>
  );
}
