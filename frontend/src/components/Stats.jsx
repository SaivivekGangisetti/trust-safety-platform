import {
  FaUsers,
  FaBoxOpen,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-5xl text-blue-500" />,
      number: "2,540+",
      title: "Protected Users",
    },
    {
      icon: <FaBoxOpen className="text-5xl text-green-500" />,
      number: "8,200+",
      title: "Products Scanned",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-red-500" />,
      number: "356",
      title: "Fraud Cases Detected",
    },
    {
      icon: <FaStar className="text-5xl text-yellow-500" />,
      number: "1,120",
      title: "Fake Reviews Blocked",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-slate-800">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;