import Image from "next/image";
import Link from "next/link";
import notFound from "@/public/not-found.jpg";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-10">
            <Image src={notFound} alt={"Not Found"} className="mix-blend-darken"/>
            <p className="mt-4">
                The task you&apos;re looking for does not exist.
            </p>
            <Link
                href="/"
                className="btn mt-6 rounded-2xl bg-pink-800 text-xl text-white p-6"
            >
                Go back to the homepage
            </Link>
        </div>
    );
}
