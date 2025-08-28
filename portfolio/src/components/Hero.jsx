import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Shrink scale
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  // Make it a vertical rectangle by reducing width faster than height
  const width = useTransform(scrollYProgress, [0, 0.3], ["100%", "30%"]);
  const height = useTransform(scrollYProgress, [0, 0.3], ["100%", "60%"]);

  // Rounded corners
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Shrinking image */}
      <motion.div
        className="fixed left-1/2 top-1/2 bg-cover bg-center"
        style={{
          transformOrigin: "center", // shrink from center
          backgroundImage: "url('/HeroBackground.jpg')",
          scale,
          width,
          height,
          borderRadius,
          x: "-50%", // center horizontally
          y: "-50%", // center vertically
        }}
      />

      {/* Text */}
      <div className="relative z-10 text-center mt-16">
        <h1 className="text-6xl font-bold mb-4">LR PHOTOGRAPHY</h1>
        <p className="text-lg animate-bounce">Scroll to explore ↓</p>
      </div>
    </section>
  );
}
