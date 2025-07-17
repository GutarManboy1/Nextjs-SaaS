"use client";
// remember this is super important, if i import something that has the word use to change it to a use client
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      router.push(`${pathname}?topic=${searchQuery}`);
    } else {
      router.push(pathname);
    }
  }, [searchQuery, router, searchParams, pathname]);

  return (
    <div className="relative border border-black rounded-lg items-center justify-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={20} height={20} />
      <input
        type="text"
        placeholder="Search Companions"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-none"
      />
    </div>
  );
};

export default SearchInput;
