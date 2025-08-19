import './globals.css'

export const metadata = {
  title: 'Portfolio • Full-Stack Dev',
  description: 'Full-Stack Developer Portfolio Mockup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}