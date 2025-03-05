import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-500">Task Not Found</h1>
      <p className="mt-4">The task you&apos;re looking for does not exist.</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}