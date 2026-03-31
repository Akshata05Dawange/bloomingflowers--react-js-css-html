import { useState } from "react";
import "./OurServices.css";
import Button from "../../components/Button/Button";

function OurServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "design",
      title: "Garden Design",
      description: "Custom layouts and plant recommendations for any space.",
      details: "We create personalized garden designs that fit your lifestyle and local climate.",
    },
    {
      id: "arrangements",
      title: "Floral Arrangements",
      description: "Handcrafted bouquets for events and deliveries.",
      details: "Fresh, seasonal flowers arranged with care for weddings, birthdays, and more.",
    },
    {
      id: "care",
      title: "Plant Care",
      description: "Expert guidance to keep your plants thriving.",
      details: "Workshops and consultations on watering, pruning, and pest control.",
    },
    {
      id: "maintenance",
      title: "Garden Maintenance",
      description: "Ongoing care for your outdoor spaces.",
      details: "Weeding, mulching, and seasonal cleanups to keep your garden beautiful.",
    },
  ];

  const handleServiceClick = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <div className="services-page">
      <main className="services-content">
        <h1>Our Services</h1>
        <p>Explore our range of floral and gardening services.</p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button
                variant="primary"
                onClick={() => handleServiceClick(service.id)}
              >
                {selectedService === service.id ? "Hide Details" : "Learn More"}
              </Button>
              {selectedService === service.id && (
                <div className="service-details">
                  <p>{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default OurServices;