export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200/60 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-16 xl:px-24 2xl:px-32 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 font-medium">© {new Date().getFullYear()} Karan Dahiya. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a className="hover:text-blue-600 transition-colors duration-200 font-medium" href="https://github.com/karan-dahiya">GitHub</a>
          <a className="hover:text-blue-600 transition-colors duration-200 font-medium" href="https://www.linkedin.com/in/karan-dahiya/">LinkedIn</a>
          <a className="hover:text-blue-600 transition-colors duration-200 font-medium" href="mailto:karan166728@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

