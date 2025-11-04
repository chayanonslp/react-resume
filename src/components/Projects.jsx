export default function Projects({ items }) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-2" >โปรเจกต์</h2>
        {items.map((p, i) => (
          <span
            key={i}
            target="_blank"
            className="block p-4 border rounded-xl hover:bg-blue-50 transition" style={{ margin: ".5rem" }}
          >
            <h3 className="font-bold text-blue-700">{p.name}</h3>
            <p>{p.desc}</p>
          </span>
        ))}
      </section>
    );
  }
  