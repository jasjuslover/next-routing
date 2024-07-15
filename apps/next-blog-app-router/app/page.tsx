import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/blogs">Go to Blog</Link>
      <Link href="/intercept">Go to Intercept</Link>
    </main>
  );
}
