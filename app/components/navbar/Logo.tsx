"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="text-rose-500 font-extrabold cursor-pointer"
    >
      HOLIDAY.com
    </div>
  );
};

export default Logo;
