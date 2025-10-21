'use client'
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinSection from "./components/JoinSection";
import SolutionsSection from "./components/SolutionsSection";

 
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection /> 
        <SolutionsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}