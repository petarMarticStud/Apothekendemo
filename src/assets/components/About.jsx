export default function About() {
    const services = [
        { title: "Ganzheitliche Beratung", icon: "🌿" },
        { title: "E-Rezept Service", icon: "📱" },
        { title: "Medikationsanalyse", icon: "🩺" }
    ];

    return (
        <section className="py-24 px-6 min-h-screen heart-pattern">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Unsere Expertise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-10 bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-6">{s.icon}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                            <p className="text-slate-500">Präzise und individuell auf Ihre Bedürfnisse abgestimmt.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}