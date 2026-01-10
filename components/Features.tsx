export default function Features() {
  return (
    <section id="features" className="py-20 grid md:grid-cols-3 gap-8 px-10">
      {["Fast", "Responsive", "Modern"].map(feature => (
        <div
          key={feature}
          className="bg-white dark:bg-slate-800 p-6 rounded shadow hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-bold mb-2">{feature}</h3>
          <p>Optimized for real-world production apps.</p>
        </div>
      ))}
    </section>
  );
}