"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { asideLinks } from "@/constants";

const Aside = () => {
  const pathname = usePathname();
  return (
    <aside className="max-w-[300px] w-full min-h-full grid grid-cols-3">
      <div className="bg-black col-span-1">
        <ul className="flex flex-col items-center px-4 py-6">
          {asideLinks.map(({ href, Icon }, i) => (
            <Link
              href={href}
              className={`asideLink ${href == pathname ? "active" : ""}`}
              key={i}
            >
              <Icon
                className={`${
                  href == pathname ? "text-white" : "text-[#C2C2C2]"
                } text-[24px]`}
              />
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col col-span-2">hello</div>
    </aside>
  );
};

export default Aside;
