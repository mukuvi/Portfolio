import { useState, useEffect } from "react";
import Head from "next/head"; // or just regular head tags if not using Next.js

const SupportPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [donationType, setDonationType] = useState("one-time");
  const [formData, setFormData] = useState({
    amount: "",
    email: "",
    plan: "monthly",
    message: "",
  });

  // Initialize Paystack config
  const config = {
    publicKey:
      process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ||
      "pk_live_8b91049fa5aa6cb7350d6603bbca4e50f7722b6b",
    email: process.env.NEXT_PUBLIC_PAYSTACK_EMAIL || "jamesmngandu@gmail.com",
  };

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showDonationForm = (type) => {
    setDonationType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const setAmount = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount.toString(),
    }));
  };

  const payWithPaystack = () => {
    const { amount, email, message } = formData;
    const amountInKobo = parseFloat(amount) * 100;

    if (!amount || amountInKobo < 100) {
      alert("Please enter a valid amount (minimum KSH 1)");
      return;
    }

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    const handler = window.PaystackPop?.setup({
      key: config.publicKey,
      email: email,
      amount: amountInKobo,
      currency: "KES",
      ref: "SUP-" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Message",
            variable_name: "message",
            value: message,
          },
        ],
      },
      callback: function (response) {
        alert("Payment complete! Reference: " + response.reference);
        closeModal();
        // Here you can redirect or show a thank you message
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler?.openIframe();
  };

  return (
    <>
      <Head>
        <title>Support My Work</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        {/* Header */}
        <header className="gradient-bg text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Support My Work
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Your support helps me create more amazing projects and content.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Support Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* One-time Support */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-gift text-blue-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      One-time Support
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Make a one-time donation to support my current projects and
                    help cover costs.
                  </p>
                  <button
                    onClick={() => showDonationForm("one-time")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all btn-hover"
                  >
                    Donate Now
                  </button>
                </div>
              </div>

              {/* Monthly Support */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <i className="fas fa-calendar-check text-purple-600 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Monthly Support
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Become a monthly supporter to help sustain my work
                    long-term.
                  </p>
                  <button
                    onClick={() => showDonationForm("monthly")}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all btn-hover"
                  >
                    Subscribe Monthly
                  </button>
                </div>
              </div>
            </div>

            {/* Why Support Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Why Support My Work?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-lightbulb text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Fuel Innovation
                    </h3>
                    <p className="text-gray-600">
                      Your support allows me to experiment with new ideas and
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-clock text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Time Investment
                    </h3>
                    <p className="text-gray-600">
                      Creating quality projects takes hundreds of hours of work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-server text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Cover Costs
                    </h3>
                    <p className="text-gray-600">
                      Hosting, domains, APIs, and tools all add up over time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <i className="fas fa-heart text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Show Appreciation
                    </h3>
                    <p className="text-gray-600">
                      Your support motivates me to keep creating and sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                What Supporters Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <p className="text-gray-700 italic mb-2">
                    "Your projects have helped me learn so much. Happy to
                    support your work!"
                  </p>
                  <p className="font-medium text-gray-800">— Alex M.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="text-gray-700 italic mb-2">
                    "I use your code examples daily at work. Keep up the great
                    work!"
                  </p>
                  <p className="font-medium text-gray-800">— Sarah K.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p>
              Thank you for considering supporting my work. Every contribution
              makes a difference!
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} James Ngandu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Donation Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {donationType === "monthly"
                  ? "Start Monthly Support"
                  : "Make a Donation"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Amount (KSH)
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setAmount(200)}
                    className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded transition-all"
                  >
                    KSH 200
                  </button>
                  <button
                    type="button"
                    onClick={() => setAmount(500)}
                    className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded transition-all"
                  >
                    KSH 500
                  </button>
                  <button
                    type="button"
                    onClick={() => setAmount(1000)}
                    className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded transition-all"
                  >
                    KSH 1,000
                  </button>
                  <button
                    type="button"
                    onClick={() => setAmount(3000)}
                    className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded transition-all"
                  >
                    KSH 3,000
                  </button>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Or enter custom amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address"
                />
              </div>
              {donationType === "monthly" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subscription Plan
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="monthly"
                        name="plan"
                        value="monthly"
                        checked={formData.plan === "monthly"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="monthly" className="text-gray-700">
                        Monthly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="quarterly"
                        name="plan"
                        value="quarterly"
                        checked={formData.plan === "quarterly"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="quarterly" className="text-gray-700">
                        Quarterly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="yearly"
                        name="plan"
                        value="yearly"
                        checked={formData.plan === "yearly"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="yearly" className="text-gray-700">
                        Yearly
                      </label>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Optional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any message or encouragement?"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={payWithPaystack}
                className="w-full gradient-bg hover:opacity-90 text-white py-3 px-6 rounded-lg font-medium transition-all btn-hover"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .gradient-bg {
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
        }
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default SupportPage;
