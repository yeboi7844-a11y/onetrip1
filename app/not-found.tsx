export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center text-slate-900">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-600">This route does not exist in the app.</p>
      </div>
    </main>
  );
}
