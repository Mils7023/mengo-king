import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image src="/404.svg" alt="Not Found" width={400} height={200} />

      <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
