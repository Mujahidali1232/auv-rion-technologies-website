import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-5 py-32 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-4 text-5xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-muted">The page you requested is not part of the Auvrion site.</p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
