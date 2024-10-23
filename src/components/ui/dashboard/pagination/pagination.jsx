"use client";

import { Button } from "../../button";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count,items }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  // const ITEM_PER_PAGE = 3;

  const hasPrev = items * (parseInt(page) - 1) > 0;
  const hasNext = items * (parseInt(page) - 1) + items < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        disabled={!hasPrev}
        variant="link"
        onClick={() => handleChangePage("prev")}
      >
        <div className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </Button>
      <Button
        className={styles.button}
        variant="link"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        <div className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white ml-5">
        <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
        </div>
      </Button>
    </div>
  );
};

export default Pagination;
