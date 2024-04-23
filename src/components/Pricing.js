import React, { useState } from "react";
import { pricing } from "../data";

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <section className="section-sm lg:section bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-7 lg:mb-12">
          <h2 className="h2 mb-3 lg:mb-6" data-aos='fade-up' data-aos-delay='600'>Pick a Pricing Plan</h2>
          <p className="max-w-md mx-auto" data-aos='fade-up' data-aos-delay='500'>
            Choose a pricing plan and start your journey with us to build your
            body and mind.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {pricing.map((card, index) => {
            const { title, price, list, buttonIcon, buttonText } = card;
            const isSelected = selectedCard === index;

            return (
              <div
                key={index}
                onClick={() => setSelectedCard(index)}
                className={`pricing-card transition-transform duration-300 ${
                  isSelected ? "selected" : ""
                }`}
              >
                <div className="card-top py-5 px-6 bg-orange text-white">
                  {title}
                </div>
                <div className="card-body bg-white pt-8 pb-6 px-6 flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2">{price}</h3>
                  <ul className="flex flex-col items-start gap-2 mb-6">
                    {list.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="inline-block w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${
                      isSelected ? "btn-orange" : "btn-outline-orange"
                    }`}
                  >
                    {buttonText}
                    <span className="btn-icon bg-orange">{buttonIcon}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
