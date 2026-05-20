'use client';
import PageWrapper from '@/components/layout/PageWrapper';
export default function DistributorDashboard() {
  return (
    <PageWrapper title="Distributor Dashboard">
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">Welcome! Use the sidebar to place requests and send stock updates.</p>
      </div>
    </PageWrapper>
  );
}