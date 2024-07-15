import Link from "next/link";

export default async function InterceptPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Intercept Page</div>
      <Link href="/intercept/intercept-child">Go to Child</Link>
    </main>
  );
}
