'use client';

import { useState } from 'react';
import { useDistributors } from '@/hooks/useDistributors';
import { distributorService } from '@/services/distributor.service';
import PageWrapper from '@/components/layout/PageWrapper';
import Badge from '@/components/ui/Badge';

export default function DistributorsPage() {
  const { distributors, loading, refetch } = useDistributors();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', loginId: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await distributorService.create(form);
      setForm({ name: '', loginId: '', password: '' });
      setShowForm(false);
      refetch();
    } catch {
      setError('Failed to create distributor.');
    }
  };

  return (
    <PageWrapper
      title="Distributors"
      action={
        <button onClick={() => setShowForm(!showForm)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
          + Add Distributor
        </button>
      }
    >
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
          <h2 className="font-semibold text-gray-700">Register New Distributor</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Company Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Login ID" value={form.loginId} onChange={(e) => setForm({ ...form, loginId: e.target.value })} required />
          <input className="w-full border rounded-lg px-4 py-2" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <div className="flex gap-3">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">Create</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2 text-sm">Cancel</button>
          </div>
        </form>
      )}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Login ID</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">Loading...</td></tr>
            ) : distributors.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-4 text-gray-400">No distributors yet</td></tr>
            ) : (
              distributors.map((d) => (
                <tr key={d._id}>
                  <td className="px-6 py-4 font-medium">{d.name}</td>
                  <td className="px-6 py-4 text-gray-500">{d.loginId}</td>
                  <td className="px-6 py-4"><Badge status={d.status} /></td>
                  <td className="px-6 py-4 text-gray-500">{new Date(d.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}