import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-blue-50">
      <head></head>
      <body className="h-full">{children}</body>
    </html>
  )
}
