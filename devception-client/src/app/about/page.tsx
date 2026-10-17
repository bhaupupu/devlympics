import type { Metadata } from 'next';
import AboutPageClient from '@/components/landing/AboutPageClient';

export const metadata: Metadata = {
  title: 'About — Devception | Social Deduction Coding Game',
  description: 'The core concept behind Devception — a real-time multiplayer social deduction coding game where developers collaborate on code and hunt down the covert imposter.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Devception — The Main Idea',
    description: 'Devception combines real-time collaborative coding in Monaco Editor with the tension of social deduction. Code together. Find the imposter.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
