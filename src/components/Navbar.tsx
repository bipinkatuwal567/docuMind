import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-14 w-full sticky top-0 z-30 inset-x-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            <span>DocuMind.</span>
          </Link>

          {/* todo: add mobile navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href={"/pricing"}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pricing
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
