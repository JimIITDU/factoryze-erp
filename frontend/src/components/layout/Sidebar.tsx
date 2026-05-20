'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const manufacturerLinks = [
  { href: '/manufacturer', label: '📊 Dashboard' },
  { href: '/manufacturer/suppliers', label: '🏭 Suppliers' },
  { href: '/manufacturer/distributors', label: '🚚 Distributors' },
  { href: '/manufacturer/purchase-orders', label: '📦 Purchase Orders' },
  { href: '/manufacturer/production-orders', label: '⚙️ Production Orders' },
  { href: '/manufacturer/distributor-requests', label: '📋 Distributor Requests' },
  { href: '/manufacturer/deliveries', label: '🚛 Deliveries' },
  { href: '/manufacturer/stock-updates', label: '📈 Stock Updates' },
];

const supplierLinks = [
  { href: '/supplier', label: '📊 Dashboard' },
  { href: '/supplier/orders', label: '📦 My Orders' },
];

const distributorLinks = [
  { href: '/distributor', label: '📊 Dashboard' },
  { href: '/distributor/requests', label: '📋 My Requests' },
  { href: '/distributor/stock-updates', label: '📈 Stock Updates' },
];

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const links =
    role === 'manufacturer' ? manufacturerLinks :
    role === 'supplier' ? supplierLinks :
    distributorLinks;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-indigo-400">Factoryze ERP</h1>
        <p className="text-xs text-gray-400 mt-1 capitalize">{role}</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg text-sm transition ${
              pathname === link.href
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 rounded-lg"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}