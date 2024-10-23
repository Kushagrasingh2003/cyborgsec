// import React from "react";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import Image from "next/image";
// import { fetchBlog } from "@/lib/data";
// // import blogs from "@/components/ui/blog/data";
// import MaxWidthWrapper from "@/components/MaxWithWrapper";
// import Link from "next/link";

// function highlightKeywords(content, keywords) {
//   const regex = new RegExp(`(${keywords.join("|")})`, "gi"); // Regex to match any keyword
//   const parts = content.split(regex); // Split content by keywords

//   return parts.map((part, index) => {
//     // Check if part matches any keyword, if yes, highlight it
//     if (keywords.includes(part.toLowerCase())) {
//       return (
//         <Link href="#" key={index} className="text-blue-300">
//           {part}
//         </Link>
//       );
//     }
//     return part;
//   });
// }

// const Page = async ({ params }) => {
//   const { id } = params;
//   const blog = await fetchBlog(id);
//   // const blog = blogs[id];

//   const keywords = [
//     "bharatiya nyaya sanhita",
//     "Bharatiya Nyaya Sanhita bns 2023",
//     "bns 2023 ",
//     "evidence act 2023",
//     "digital evidence",
//     "bharatiya nyaya sanhita act 2023",
//     "bns 2023 overview",
//     "bns 2023 Key provisions",
//     "bharatiya nyaya sanhita digital evidence",
//     "cyber threats",
//     "cyber attacks in India",
//     "cyber threats in India",
//     "cyber Security Awareness",
//     "cyber security in India",
//     "cyber crime helpline number",
//     "indian cyber crime coordination centre",
//     "indian cyber crime coordination centre in delhi",
//     "foundation Day",
//     "suspect registry",
//     "cyber commandos program",
//     "cybercrime",
//     "indian cyber crime coordination centre",
//     "i4c",
//     "foundation Day of the indian cyber crime coordination centre",
//     "samanvaya platform",
//     "usb rubber ducky",
//     "penetration testing tool",
//     "ethical hacking course in rohtak",
//     "social engineering phishing attacks",
//     "what is usb rubber ducky",
//     "penetration testing",
//     "social engineering phishing",
//     "iPhone vulnerabilities",
//     "software bugs",
//     "phishing attacks",
//     "cyber security courses in rohtak",
//     "pegasus spyware",
//     "jailbreaking",
//     "software bugs and flaws",
//     "jailbreaking risks",
//     "information technology act, 2000",
//     "it act",
//     "iy act 2000",
//     "Importance of formulating information technology act 2000",
//     "cyber crimes in india",
//     "cyber law in india",
//     "objectives of the information technology act of 2000",
//   ];

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   const content = [
//     {
//       title: blog.title,
//       description: highlightKeywords(blog.maindesc, keywords),
//       // description: blog.maindesc,
//       content: (
//         <div className=" flex items-center justify-center text-white">
//           <Image
//             src={blog.img1}
//             width={500}
//             height={500}
//             className="md:h-full md:w-full h-52 w-64 object-contain"
//             alt="blog image 1"
//           />
//         </div>
//       ),
//     },
//     {
//       title: blog.heading1,
//       description: highlightKeywords(blog.desc1, keywords),
//       // description: blog.desc1,
//       content: (
//         <div className="flex items-center justify-center text-white">
//           <Image
//             src={blog.img2}
//             width={500}
//             height={500}
//             className="md:h-full md:w-full h-52 w-64 object-contain"
//             alt="blog image 2"
//           />
//         </div>
//       ),
//     },
//     {
//       title: blog.heading2,
//       description: highlightKeywords(blog.desc2, keywords),
//       // description: blog.desc2,
//       content: (
//         <div className="h-full w-full flex items-center justify-center text-white">
//           <Image
//             src={blog.img3}
//             width={500}
//             height={500}
//             className="h-full w-full object-contain"
//             alt="blog image 3"
//           />
//         </div>
//       ),
//     },
//     {
//       title: blog.heading3,
//       description: highlightKeywords(blog.desc3, keywords),
//       // description: blog.desc3,
//       content: (
//         <div className=" flex items-center justify-center text-white">
//           <Image
//             src={blog.img3}
//             width={500}
//             height={500}
//             className="md:h-full md:w-full h-52 w-64 object-contain"
//             alt="blog image 4"
//           />
//         </div>
//       ),
//     },
//     {
//       title: blog.heading4,
//       description: highlightKeywords(blog.desc4, keywords),
//       // description: blog.desc4,
//       content: (
//         <div className="  flex items-center justify-center text-white">
//           <Image
//             src={blog.img5}
//             width={500}
//             height={500}
//             className="h-50 w-auto md:h-full md:w-full object-contain"
//             alt="blog image 4"
//           />
//         </div>
//       ),
//     },
//     {
//       title: blog.heading5,
//       description: highlightKeywords(blog.desc5, keywords),
//       // description: blog.desc5,
//       content: (
//         <div className=" flex items-center justify-center text-white">
//           <Image
//             src={blog.img5}
//             width={500}
//             height={500}
//             className="md:h-full md:w-full h-52 w-64 object-contain"
//             alt="blog image 4"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <MaxWidthWrapper>
//         <div className="mx-3 md:mx-20 mt-10  md:flex justify-center">
//           <StickyScroll content={content} />
//         </div>
//         {/* <div className="md:hidden flex">
//           <div className="div relative flex  px-4 ">
//             <div className="max-w-2xl"> */}
//               {/* {content.map((item, index) => (
//             <div key={item.title + index} className="my-16">
//               <div className="text-2xl font-bold  ">
//                 {item.title}
//                 </div>
//               <div className="text-lg text-slate-500 max-w-sm mt-6">
//                 {item.description}
//                 </div>
//                 <div className="">
//                   {item.content}
//                 </div>
//             </div>
//           ))} */}

//               {/* <div key={blog.title} className="my-16">
//                 <div className="text-2xl font-bold  ">{blog.title}</div>
//                 <div className="text-lg text-slate-500 max-w-sm mt-6">
//                   {blog.description}
//                 </div>
//                 <div className="mb-6">{blog.content}</div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </MaxWidthWrapper>
//     </>
//   );
// };

// export default Page;

import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import path from 'path';
import { unified } from "unified";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
// import { StickyScroll } from "@/components/scrollComponent";
import OnThisPage from "@/components/onthisPage";


export default async function Page({ params }) {
  const filepath = path.join(process.cwd(), 'public', 'content', `${params.id}.md`);
  // const filepath = `@/content/${params.id}.md`;
  // const filepath = `src/content/${params.id}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
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