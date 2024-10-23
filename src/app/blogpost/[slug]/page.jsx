import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
// import { StickyScroll } from "@/components/scrollComponent";
import OnThisPage from "@/components/onthisPage";
import Image from "next/image";

export default async function Page({ params }) {
  const filepath = `src/content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <>
      <div className="max-w-6xl  mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="flex md:gap-40">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert  mt-10 md:w-1/2"
        ></div>
      
        <div className="mt-10">
          <OnThisPage htmlContent={htmlContent} />
        </div>
        </div>
      </div>
    </>
  );
}

