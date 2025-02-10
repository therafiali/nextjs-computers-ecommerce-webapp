import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Studio | HH Computerss',
  description: 'Content Management Studio for HH Computerss',
}

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
