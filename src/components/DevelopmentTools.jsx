export default function DevelopmentTools({ items = [] }) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-2">Tools</h2>
  

           <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {items.map((Tool, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {Tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  