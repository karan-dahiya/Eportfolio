export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-neutral-200/60">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Karan Dahiya. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <a className="hover:underline" href="https://github.com/karan-dahiya">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/karan-dahiya/">LinkedIn</a>
          <a className="hover:underline" href="mailto:karan166728@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

