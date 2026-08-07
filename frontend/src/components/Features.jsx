import { FaShieldAlt, FaRobot, FaSearchDollar } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: "Fraud Detection",
      description:
        "Detect suspicious transactions using AI-based risk scoring."
    },
    {
      icon: <FaRobot size={40} className="text-green-500" />,
      title: "Fake Review Detection",
      description:
        "Identify spam, bots, and fake customer reviews automatically."
    },
    {
      icon: <FaSearchDollar size={40} className="text-red-500" />,
      title: "Counterfeit Detection",
      description:
        "Flag suspicious products based on price, description, and seller behavior."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;