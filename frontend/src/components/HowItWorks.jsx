import {
  FaBoxOpen,
  FaRobot,
  FaShoppingCart,
  FaUserShield,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaBoxOpen className="text-5xl text-cyan-500" />,
      title: "1. Seller Uploads Product",
      description: "The seller adds a product with images, price, and description."
    },
    {
      icon: <FaRobot className="text-5xl text-green-500" />,
      title: "2. AI Analysis",
      description: "The AI checks for counterfeit products, suspicious pricing, and risky listings."
    },
    {
      icon: <FaShoppingCart className="text-5xl text-yellow-500" />,
      title: "3. Buyer Places Order",
      description: "Buyers browse trusted products and complete secure purchases."
    },
    {
      icon: <FaUserShield className="text-5xl text-red-500" />,
      title: "4. Admin Reviews Alerts",
      description: "The admin dashboard displays fraud alerts, fake reviews, and counterfeit reports."
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition"
            >
              <div className="flex justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;