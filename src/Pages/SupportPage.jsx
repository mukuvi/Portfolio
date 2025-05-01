import { useState, useEffect } from "react";
import { paystackConfig } from "../../paystackConfig.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SupportPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState(paystackConfig.email);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!window.PaystackPop) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePay = () => {
    if (!amount || amount < 100 || !email) {
      return alert("Enter a valid amount (min KES 100) and email");
    }

    const handler = window.PaystackPop.setup({
      key: paystackConfig.publicKey,
      email,
      amount: amount * 100,
      currency: "KES",
      ref: "SUP-" + Date.now(),
      metadata: {
        custom_fields: [
          {
            display_name: "Message",
            variable_name: "message",
            value: message,
          },
        ],
      },
      callback: (response) => {
        alert("Payment complete! Ref: " + response.reference);
        setModalOpen(false);
      },
      onClose: () => alert("Payment window closed"),
    });

    handler.openIframe();
  };

  return (
    <div className="support">
      <Header />
      <div className="support-container">
        <h1 className="support-title">Support My Work</h1>
        <p>Your support helps me create more amazing projects and content.</p>

        <div className="support-grid">
          {[
            {
              icon: "fa-gift",
              title: "One-time Support",
              desc: "Support current projects.",
              color: "blue",
              type: "one-time",
            },
            {
              icon: "fa-calendar-check",
              title: "Monthly Support",
              desc: "Sustain long-term work.",
              color: "purple",
              type: "monthly",
            },
          ].map(({ icon, title, desc, color, type }) => (
            <div key={type} className={`support-card ${color}`}>
              <div className="card-header">
                <div className={`icon-bg ${color}`}>
                  <i className={`fas ${icon} icon`} />
                </div>
                <h3>{title}</h3>
              </div>
              <p>{desc}</p>
              <button
                className={`support-button ${color}`}
                onClick={() => {
                  setDonationType(type);
                  setModalOpen(true);
                }}
              >
                {type === "monthly" ? "Subscribe Monthly" : "Donate Now"}
              </button>
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>
                  {donationType === "monthly"
                    ? "Start Monthly Support"
                    : "Make a Donation"}
                </h3>
                <button onClick={() => setModalOpen(false)}>
                  <i className="fas fa-times" />
                </button>
              </div>

              <input
                type="number"
                placeholder="Amount (KES)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />

              {donationType === "monthly" && (
                <select className="input">
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>
              )}

              <textarea
                rows={2}
                placeholder="Optional Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
              />

              <button onClick={handlePay} className="pay-button">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="why-support">
        <h2 className="why-title">Why Support My Work?</h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon green">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div>
              <h3>Fuel Innovation</h3>
              <p>
                Your support allows me to experiment with new ideas and
                technologies.
              </p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-icon yellow">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <h3>Time Investment</h3>
              <p>Creating quality projects takes hundreds of hours of work.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-icon red">
              <i className="fas fa-server"></i>
            </div>
            <div>
              <h3>Cover Costs</h3>
              <p>Hosting, domains, APIs, and tools all add up over time.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-icon blue">
              <i className="fas fa-heart"></i>
            </div>
            <div>
              <h3>Show Appreciation</h3>
              <p>Your support motivates me to keep creating and sharing.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
