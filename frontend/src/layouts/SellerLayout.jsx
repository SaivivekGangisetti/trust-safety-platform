import { Link, Outlet } from "react-router-dom";

function SellerLayout() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">

        <h2 className="text-2xl font-bold mb-8">
          Seller Panel
        </h2>

        <nav className="space-y-4">
          <Link
            to="/seller"
            className="block hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            to="/seller/upload"
            className="block hover:text-cyan-400"
          >
            Upload Product
          </Link>

          <Link
            to="/seller/products"
            className="block hover:text-cyan-400"
          >
            My Products
          </Link>
        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-slate-100">
        <Outlet />
      </main>

    </div>
  );
}

export default SellerLayout;