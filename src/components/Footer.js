export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <a className="hover:underline" href="#">GitHub</a>
          <a className="hover:underline" href="#">LinkedIn</a>
          <a className="hover:underline" href="#">Email</a>
        </div>
      </div>
    </footer>
  )
}

