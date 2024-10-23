"use client"
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-9xl font-bold text-black">
          4<span className=" h-10 w-10 bg-black inline-block align-middle"></span>4
        </div>
        <p className="mt-4 text-lg text-gray-600">We could not find the page you&apos;re looking for.</p>
        <Link href="/">
          <a className="mt-8 px-4 py-2 bg-red-600 text-white font-semibold rounded">Go Back</a>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Custom404;
