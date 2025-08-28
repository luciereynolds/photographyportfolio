// components/About.jsx
export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
      <p className="max-w-2xl text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac pretium enim,
        tincidunt commodo sapien. Nullam imperdiet enim diam, vitae venenatis diam molestie non.
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
