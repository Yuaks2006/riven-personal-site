import Link from "next/link";

export function BackLink({ href = "/", label = "Back home" }: { href?: string; label?: string }) {
  return (
    <Link className="signal-button" href={href}>
      {label}
    </Link>
  );
}
