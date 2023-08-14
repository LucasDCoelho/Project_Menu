import Link, { LinkProps } from "next/link";

interface LinkPageProps{
  link: string;
  content?: string;
  className?: string;
}

export function LinkPage({
  link,
  content,
  className
}: LinkPageProps) {
  return (
    <Link
      href={link}
      className={className}
    >
      {content}
    </Link>
  );
}