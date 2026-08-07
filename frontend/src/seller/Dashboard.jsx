import {
  FaBoxOpen,
  FaShoppingCart,
  FaExclamationTriangle,
  FaMoneyBillWave,
} from "react-icons/fa";

function Dashboard() {
  const cards = [
    {
      title: "Products",
      value: "12",
      icon: <FaBoxOpen size={35} />,
      color: "bg-blue-500",
    },
    {
      title: "Orders",
      value: "35",
      icon: <FaShoppingCart size={35} />,
      color: "bg-green-500",
    },
    {
      title: "Risk Alerts",
      value: "2",
      icon: <FaExclamationTriangle size={35} />,
      color: "bg-red-500",
    },
    {
      title: "Revenue",
      value: "₹52,000",
      icon: <FaMoneyBillWave size={35} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>

      <h1 className="text-4xl font-bold mb-2">
        Welcome Seller 👋
      </h1>

      <p className="text-gray-500 mb-8">
        Monitor your products and AI safety reports.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} text-white rounded-xl p-6 shadow-lg`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3>{card.title}</h3>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

              {card.icon}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;