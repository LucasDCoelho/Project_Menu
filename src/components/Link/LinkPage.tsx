import Link from "next/link";

interface LinkPageProps{
  link: string;
  content?: string;
}

export function LinkPage({
  link,
  content
}: LinkPageProps) {
  return (
    <Link
      href={link}
      className="text-xs underline"
    >
      {content}
    </Link>
  );
}