/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "@/components/shared/container";
import Link from "next/link";
import { Image } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-background">
      <Container className="h-14 flex items-center justify-between gap-4 border-b xl:px-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tighter"
        >
          <Image className="text-teal-600" size={20} />
          <h4>Assetify</h4>
        </Link>
        <Link href="https://github.com/robiuzzaman4" target="_blank">
          <GitHubLogoIcon className="h-5 w-5" />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
