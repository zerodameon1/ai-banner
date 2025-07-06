import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Product',
  description: 'Created with v0',
  generator: 'v0.dev',
  other: {
    'lhverifycode': '32dc01246faccb7f5b3cad5016dd5033',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="verify-yeahpromos" content="0a871fe85412" />
      </head>
      <body>{children}</body>
    </html>
  )
}
