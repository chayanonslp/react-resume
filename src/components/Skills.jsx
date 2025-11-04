export default function Skills({ list = {} }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">ทักษะ</h2>
      {Object.entries(list).map(([category, skills]) => (
        <div key={category} className="mb-3">
          <h3 className="text-lg font-medium">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );



  if (false) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-2">ทักษะ</h2>

        {Object.entries(list).map(([category, skills]) => (
          <div key={category} className="mb-3">
            <h3 className="text-lg font-medium">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }
}
