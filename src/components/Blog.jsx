const blogPosts = [
  {
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Flippers zero in India",
    description: `Hello everyone. If you're reading this, I'm betting you're a serious cybersecurity nut or at least have a passing interest in the subject, because every digital key appears to conceal a lock waiting to be picked. In any case, you will enjoy what I have to say.`,
    link: "/blogs/66e9bafc6eba70b8570b7b02",
  },
  {
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: `The Bharatiya Nyaya Sanhita, 2023`,
    description: `The Bharatiya Nyaya Sanhita (BNS) 2023 is India's next criminal law, succeeding the Indian Penal law (IPC). It was enacted by Parliament in December 2023 and became effective on July 1, 2024.
Retains Most IPC Offences:  The BNS keeps the majority of the crimes that were contained in the IPC, with some amendments and removals. 
`,
    link: "/blogs/66e9c50c6eba70b8570b7b03",
  },
  {
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: `Information Technology Act, 2000`,
    description: `The Information Technology Act of 2000 is the principal law in India addressing cybercrime and electronic trade.
It was passed by the Indian Parliament in 2000 to give legal status to electronic transactions and facilitate e-governance.
`,
    link: "/blogs/66e9cda56eba70b8570b7b06",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <>
      {blogPosts.map((post, index) => (
        <article
          key={index}
          className="flex bg-white transition hover:shadow-xl py-5"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime={post.date}
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>{post.date.split("-")[0]}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>
                {post.date.split("-")[1]} {post.date.split("-")[2]}
              </span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={post.imageUrl}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  {post.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {post.description}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href={post.link}
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Read Blog
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Blog;
