'use client';

import Sidebar from '@/components/layout/Sidebar';

export default function ManufacturerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="manufacturer" />
      <main className="flex-1">{children}</main>
    </div>
  );
}