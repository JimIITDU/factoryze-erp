'use client';
import Sidebar from '@/components/layout/Sidebar';
export default function SupplierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="supplier" />
      <main className="flex-1">{children}</main>
    </div>
  );
}