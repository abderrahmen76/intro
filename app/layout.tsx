import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AmbuLink | Coordination intelligente des ambulances',
  description:
    "AmbuLink relie les patients, les équipes d'ambulance et les opérations cliniques dans une seule plateforme de réponse d'urgence coordonnée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
