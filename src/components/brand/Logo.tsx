import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  href?: string | null;
  variant?: "full" | "mark" | "horizontal";
  theme?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  href = "/",
  variant = "horizontal",
  theme = "light",
  className,
  priority = false,
}: LogoProps) {
  const isDark = theme === "dark";

  const inner =
    variant === "full" ? (
      <div className={`relative inline-block ${className ?? "h-auto w-full max-w-sm"}`}>
        <Image
          src={isDark ? "/brand/auvrion-logo-white.png" : "/brand/auvrion-logo-transparent.png"}
          alt="Auvrion Technologies — Technology Beyond Limits"
          width={1024}
          height={1024}
          priority={priority}
          className="h-auto w-full object-contain"
        />
      </div>
    ) : variant === "mark" ? (
      <div className={`relative inline-block ${className ?? "h-10 w-10"}`}>
        <Image
          src={isDark ? "/brand/auvrion-mark-white.png" : "/brand/auvrion-mark.png"}
          alt="Auvrion Mark"
          width={192}
          height={192}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </div>
    ) : (
      <span className={`inline-flex items-center gap-3.5 ${className ?? ""}`}>
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <Image
            src={isDark ? "/brand/auvrion-mark-white.png" : "/brand/auvrion-mark.png"}
            alt="Auvrion Technologies"
            width={80}
            height={80}
            priority={priority}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </span>
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.125rem] font-bold tracking-[-0.03em] transition-colors ${
              isDark ? "text-white" : "text-navy"
            }`}
          >
            AUVRION
          </span>
          <span
            className={`my-1 h-[1.5px] w-full transition-colors ${
              isDark ? "bg-white/20" : "bg-[#C5CCD3]"
            }`}
          />
          <span className="font-display text-[0.58rem] font-semibold tracking-[0.3em] text-brand">
            TECHNOLOGIES
          </span>
        </span>
      </span>
    );

  if (!href) return inner;

  return (
    <Link
      href={href}
      aria-label="Auvrion Technologies home"
      className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg"
    >
      {inner}
    </Link>
  );
}
