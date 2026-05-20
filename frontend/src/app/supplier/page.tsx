'use client';
import PageWrapper from '@/components/layout/PageWrapper';
export default function SupplierDashboard() {
  return (
    <PageWrapper title="Supplier Dashboard">
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">Welcome! Use the sidebar to view and manage your purchase orders.</p>
      </div>
    </PageWrapper>
  );
}