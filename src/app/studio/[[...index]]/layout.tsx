import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Studio | H&H Computers',
  description: 'Content Management Studio for H&H Computers',
}

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
