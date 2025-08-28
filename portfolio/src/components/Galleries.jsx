// components/Galleries.jsx
const galleries = ["London", "Japan", "Edinburgh"];

export default function Galleries() {
  return (
    <section className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Galleries</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {galleries.map((city) => (
          <div key={city} className="rounded-2xl overflow-hidden shadow-lg bg-white p-6">
            <h3 className="text-2xl font-semibold">{city}</h3>
            <p className="text-gray-600">Explore photos from {city}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
