import React from "react";
import AboutPage from "./about";
import ContactPage from "./contact";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16 flex-grow flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-extrabold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-6">
                    We offer high-quality products and services for your needs. Explore
                    our site and discover more!
                </p>
                <a
                    href={"/#about"}
                    className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold"
                >
                    Learn More
                </a>
            </section>

            <AboutPage />
            <ContactPage />
    </div >
  );
};

export default Home;
