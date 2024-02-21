export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
      <body > This is a nested layout {children} </body>
  </html>
    )
  }
  