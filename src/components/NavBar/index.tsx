import Link from "next/link";
import React from "react";

interface ConfigLinksTypes {
  configLinks: {
    label: string;
    href: string;
    prefetch: boolean;
  }[];
}

const NavBar: React.FC<ConfigLinksTypes> = ({ configLinks }) => {
  return (
    <nav>
      <ul className="flex gap-2">
        {configLinks.map(({ label, href, prefetch }) => (
          <Link
            className="text-orange-800 hover:underline"
            key={href}
            prefetch={prefetch}
            href={href}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
