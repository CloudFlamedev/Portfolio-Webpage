import './globals.css'

export const metadata = {
  title: 'John Developer | Full-Stack Developer Portfolio',
  description: 'Professional portfolio showcasing web development projects, skills, and experience in React, Next.js, and modern web technologies.',
  keywords: ['web developer', 'react', 'next.js', 'full-stack', 'portfolio'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}