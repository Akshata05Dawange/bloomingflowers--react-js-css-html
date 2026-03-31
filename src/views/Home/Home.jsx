import { useState, useEffect, useCallback } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import roseImg from "../../assets/images/rose.jpg";
import lilyImg from "../../assets/images/lily.jpg";
import tulipImg from "../../assets/images/tulip.jpg";
import sunflowerImg from "../../assets/images/sunflower.jpg";


function Home() {
  const flowers = [
    {
      name: "Rose",
      description: "Symbol of love and passion, perfect for romantic occasions.",
      image: roseImg,
    },
    {
      name: "Lily",
      description: "Elegant and fragrant, ideal for weddings and celebrations.",
      image: lilyImg,
    },
    {
      name: "Tulip",
      description: "Vibrant and cheerful, bringing joy to any space.",
      image: tulipImg,
    },
    {
      name: "Sunflower",
      description: "Bright and sunny, representing positivity and warmth.",
      image: sunflowerImg,
    },
  ];

  const [featuredFlower, setFeaturedFlower] = useState(flowers[0]);

  const randomizeFlower = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * flowers.length);
    setFeaturedFlower(flowers[randomIndex]);
  }, [flowers]);

  const highlightByIndex = (offset) => {
    const currentIndex = flowers.findIndex((f) => f.name === featuredFlower.name);
    const nextIndex = (currentIndex + offset + flowers.length) % flowers.length;
    setFeaturedFlower(flowers[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") highlightByIndex(1);
      if (event.key === "ArrowLeft") highlightByIndex(-1);
      if (event.key === "Enter") randomizeFlower();
    };

    window.addEventListener("keydown", handleKeyDown);
    const intervalId = setInterval(() => highlightByIndex(1), 5000);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, [featuredFlower, flowers, highlightByIndex, randomizeFlower]);

  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Blooming Flowers</h1>
        <p>
          Discover handcrafted blooms, weekly bundles, and plant care tips to
          bring beauty into your space.
        </p>
        <div className="flower-spotlight">
          <img
            src={featuredFlower.image}
            alt={featuredFlower.name}
            className="flower-image"
          />
          <h3>Flower of the Day: {featuredFlower.name}</h3>
          <p>{featuredFlower.description}</p>
          <Button variant="secondary" onClick={randomizeFlower}>
            Discover Another Flower
          </Button>
        </div>
        <Button variant="primary" onClick={() => document.getElementById('services').scrollIntoView()}>
          Explore Services
        </Button>
      </header>

      <section className="flower-grid">
        <div className="section-header">
          <h2>Explore Our Flower Collection</h2>
          <p>Click a card to select and spotlight your favorite flower.</p>
        </div>
        <div className="flower-cards">
          {flowers.map((flower) => (
            <article
              key={flower.name}
              className={`flower-card ${featuredFlower.name === flower.name ? "active" : ""}`}
              onClick={() => setFeaturedFlower(flower)}
            >
              <img src={flower.image} alt={flower.name} />
              <div className="flower-card-body">
                <h3>{flower.name}</h3>
                <p>{flower.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <article className="card">
            <h3>Garden Design</h3>
            <p>Custom layout, plant recommendations, and styling for any size yard.</p>
          </article>
          <article className="card">
            <h3>Floral Arrangements</h3>
            <p>Hand-picked bouquets for weddings, events, and deliveries.</p>
          </article>
          <article className="card">
            <h3>Plant Care</h3>
            <p>One-on-one guidance to keep your indoor and outdoor plants thriving.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Blooming Flowers • Made with love</p>
      </footer>
    </div>
  );
}

export default Home;