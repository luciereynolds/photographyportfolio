// components/About.jsx
export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
      <p className="max-w-2xl text-lg leading-relaxed">
        I'm Lucie! A photographer from Scotland with a passion for capturing the beauty of the world through my lens. My journey began with a simple camera, and over the years, I've honed my skills to create stunning visuals that tell compelling stories. Whether it's the serene landscapes of the Scottish Highlands or the vibrant life in urban settings, I strive to bring out the essence of every moment I capture.
      </p>
      <div className="flex gap-6 mt-6">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
