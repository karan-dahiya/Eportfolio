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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  )
}