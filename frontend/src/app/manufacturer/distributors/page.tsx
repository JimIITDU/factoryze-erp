"use client";

import { useState } from "react";
import { useDistributors } from "@/hooks/useDistributors";
import { distributorService } from "@/services/distributor.service";
import PageWrapper from "@/components/layout/PageWrapper";
import Badge from "@/components/ui/Badge";

export default function DistributorsPage() {
  const { distributors, loading, refetch } = useDistributors();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    loginId: "",
    password: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !form.name ||
      !form.loginId ||
      !form.password ||
      !form.companyName ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (form.password.length < 8 || form.password.length > 15) {
      setError("Password must be between 8 to 15 characters.");
      return;
    }

    if (!form.email.endsWith("@gmail.com")) {
      setError("Please use a valid gmail address.");
      return;
    }

    if (form.phone.length !== 11) {
      setError("Phone Number is invalid.");
      return;
    }

    try {
      await distributorService.create(form);
      await refetch();
      setForm({
        name: "",
        loginId: "",
        password: "",
        companyName: "",
        email: "",
        phone: "",
        address: "",
      });

      setShowForm(false);
      setSuccess("Distributors Added Successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 3000);

      refetch();
    } catch(err : any) {
      console.log(err.response.data);
      setError(
        "Failed to create distributor. Login ID or email may already exist.",
      );
    }
  };

  return (
    <PageWrapper
      title="Distributors"
      action={
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition shadow-sm"
        >
          {showForm ? "✕ Close Form" : "+ Add Distributor"}
        </button>
      }
    >
      {success && (
        <p className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm">
          {success}
        </p>
      )}
      {/* FORM CARD */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Register New Distributor
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Add Distributor company information and login credentials.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* ERROR */}
            {error && (
              <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}
            {success && (
              <p className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm">
                {success}
              </p>
            )}

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distributor Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter distributor name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            {/* LOGIN ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Login ID
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter login ID"
                value={form.loginId}
                onChange={(e) => setForm({ ...form, loginId: e.target.value })}
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter company name"
                value={form.companyName}
                onChange={(e) =>
                  setForm({ ...form, companyName: e.target.value })
                }
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* ADDRESS */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
                placeholder="Enter supplier address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>

            <div className="md:col-span-2 flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-sm"
              >
                Create Distributor
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">Distributor List</h3>
          <p className="text-sm text-gray-500 mt-1">
            Manage all registered distributors.
          </p>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Login ID</th>
              <th className="px-6 py-4 text-left">Company</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Joined</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  Loading distributors...
                </td>
              </tr>
            ) : !distributors || distributors.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No distributors found
                </td>
              </tr>
            ) : (
              distributors.map((s) => (
                <tr key={s._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {s.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">{s.loginId}</td>

                  <td className="px-6 py-4 text-gray-500">{s.companyName}</td>

                  <td className="px-6 py-4 text-gray-500">{s.email}</td>

                  <td className="px-6 py-4 text-gray-500">{s.phone}</td>


                  <td className="px-6 py-4 text-gray-500">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}
