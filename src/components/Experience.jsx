export default function Experience({ items }) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-2">ประสบการณ์ทำงาน</h2>
        {items.map((exp, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-500">{exp.company} — {exp.year}</p>
            <p>{exp.details}</p>
          </div>
        ))}
      </section>
    );
  }
  