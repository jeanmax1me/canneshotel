import './globals.css'

export const metadata = {
  title: 'Cannes Hotel',
  description: 'The Best Hotels and Accommodations in Cannes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
