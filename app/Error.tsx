"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Something went wrong!</h1>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Try again
      </button>
    </main>
  );
};
export default Error;
