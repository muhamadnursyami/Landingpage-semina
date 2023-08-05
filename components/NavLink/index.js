"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`nav-link  ${pathname === href ? "active" : ""}`}
        aria-current="page"
      >
        {children}
      </a>
    </Link>
  );
}
