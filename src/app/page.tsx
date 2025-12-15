import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
    </div>
  );
};

export default HomePage;
