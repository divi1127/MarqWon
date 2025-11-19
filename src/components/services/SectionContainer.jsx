export default function SectionContainer({ title, children, center = false }) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-20 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">{title}</h2>
      {children}
    </section>
  );
}
