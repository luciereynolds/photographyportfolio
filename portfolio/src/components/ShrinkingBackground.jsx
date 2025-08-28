import { motion, useScroll, useTransform } from "framer-motion";

export default function ShrinkingBackground() {
  const { scrollYProgress } = useScroll();

  // Shrink only while scrollYProgress goes from 0 → 0.3
  const width = useTransform(scrollYProgress, [0, 0.3], ["100%", "30%"]);
  const height = useTransform(scrollYProgress, [0, 0.3], ["100%", "60%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]);

  // Position: fixed while shrinking, then relative for layout
  const position = useTransform(
    scrollYProgress,
    [0, 0.3, 0.301],
    ["fixed", "fixed", "relative"]
  );
  const top = useTransform(scrollYProgress, [0, 0.3, 0.301], ["50%", "50%", "0"]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.301], ["-50%", "-50%", "0"]);

  return (
    <div className="relative w-full h-screen flex justify-center">
      <motion.div
        className="bg-cover bg-center"
        style={{
          width,
          height,
          borderRadius,
          backgroundImage: "url('/HeroBackground.jpg')",
          position,
          top,
          y,
        }}
      />
    </div>
  );
}
