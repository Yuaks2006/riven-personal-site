import Link from "next/link";

export function BackLink({ href = "/", label = "Back home" }: { href?: string; label?: string }) {
  return (
    <Link className="focus-ring inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-[#111318] shadow-sm transition hover:-translate-y-0.5" href={href}>
      {label}
    </Link>
  );
}
