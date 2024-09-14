import React from "react";
import Link from "next/link";
import { getNavLinks } from "@/helpers/web-base-helpers";

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <React.Suspense>
          <NavLinks />
        </React.Suspense>
      </nav>
    </header>
  );
}

const NavLinks = async () => {
  let links = await getNavLinks();

  links = links.slice(0, 4);

  return (
    <ol className="header-nav-links">
      {links.map(({ slug, label, href, type }) => (
        <li key={slug}>
          <Link href={href} className={`header-nav-link ${type}`}>
            {label}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default SiteHeader;
