import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 text-white min-h-screen">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h1 className="text-6xl font-bold leading-tight">

                Secure Your Marketplace

              </h1>

              <p className="mt-6 text-xl text-gray-300">

                AI Powered Trust & Safety Platform
                for Fraud Detection,
                Fake Reviews,
                and Counterfeit Products.

              </p>

              <div className="mt-10 flex gap-5">

                <Link to="/login">

                  <button className="bg-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-600">

                    Login

                  </button>

                </Link>

                <Link to="/register">

                  <button className="border border-cyan-500 px-8 py-3 rounded-lg">

                    Register

                  </button>

                </Link>

              </div>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
                alt="Cyber Security"
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      <Features />

      <HowItWorks />

      <Stats />

      <Footer />

    </>
  );
}

export default Home;