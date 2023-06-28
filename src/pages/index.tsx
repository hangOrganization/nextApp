"use client";

import dynamic from 'next/dynamic';
const Homepage = dynamic(import('./home'), { ssr: false });

export default function Index() {
  return <Homepage></Homepage>;
}
