import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const styles = {
  primary:
    "bg-navy text-white hover:bg-navy-deep shadow-[0_10px_30px_-12px_rgba(11,30,51,0.55)]",
  secondary:
    "bg-white text-navy border border-line hover:border-navy/30 hover:bg-canvas",
  ghost: "bg-transparent text-white border border-white/20 hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const cn = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cn}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cn}>
      {children}
    </button>
  );
}
