"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <main className="p-8">
            <h1 className="mb-8 text-3xl font-bold">Something went wrong!</h1>
            <p className="mb-4">{error.message}</p>
            <button
                onClick={reset}
                className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Try again
            </button>
        </main>
    );
};
export default Error;
