function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            Trust & Safety
          </h1>

          <p className="mt-6 text-lg">
            AI Powered Marketplace Protection
          </p>

          <ul className="mt-10 space-y-4">
            <li>✅ Fraud Detection</li>
            <li>✅ Fake Review Detection</li>
            <li>✅ Counterfeit Detection</li>
            <li>✅ AI Risk Scoring</li>
          </ul>

        </div>

        {/* Right Side */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-8">
            {title}
          </h2>

          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;