export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-2">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Home
      </a>
    </div>
  );
}
