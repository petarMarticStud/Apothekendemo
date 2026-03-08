export default function HealthTips() {
    const articles = [
        { title: "Die Atemwege – Offene Türe für Keime", date: "27. Nov 2023" },
        { title: "Die Geschichte der Heilkräuter", date: "26. Nov 2023" },
        { title: "Curcuma – viel mehr als nur ein Gewürz", date: "25. Nov 2023" }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900">Aktuelles aus der Apotheke</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((a, i) => (
                        <div key={i} className="group border-b-2 border-rose-100 pb-6 hover:border-rose-500 transition-colors">
                            <span className="text-xs font-bold text-rose-500 uppercase">{a.date}</span>
                            <h3 className="text-xl font-bold mt-2 mb-4 text-slate-900">{a.title}</h3>
                            <button className="text-sm font-bold text-slate-500 group-hover:text-rose-600">Weiterlesen →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}