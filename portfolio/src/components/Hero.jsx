export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/HeroBackground.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">LR PHOTOGRAPHY</h1>
        <p className="text-lg">Scroll to explore ↓</p>
      </div>
    </section>
  );
}
