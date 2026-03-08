export default function About() {
    const services = [
        {
            title: "Ernährungsberatung",
            icon: "🥗",
            desc: "Optimale Nährstoffpläne für Sportler und Gesundheitsbewusste."
        },
        {
            title: "Eigenprodukte",
            icon: "🧪",
            desc: "Hausgemachte Arzneien und Tees – alles mit Liebe bei uns produziert."
        },
        {
            title: "Kosmetik-Sortiment",
            icon: "✨",
            desc: "Hochwertige Fachkosmetik, speziell für die Bedürfnisse junger Haut."
        },
        {
            title: "Asthma",
            icon: "🫁",
            desc: "Fachkundige Beratung zu Inhalationstechniken und Atemerleichterung."
        },
        {
            title: "Diabetes",
            icon: "🩸",
            desc: "Unterstützung beim Blutzuckermanagement und modernster Vorsorge."
        },
        {
            title: "Homöopathie",
            icon: "🌿",
            desc: "Ganzheitliche Heilmethoden als sanfte Ergänzung zur Schulmedizin."
        },
        {
            title: "Schlafstörungen",
            icon: "🌙",
            desc: "Natürliche Hilfe für erholsame Nächte und einen vitalen Alltag."
        },
        {
            title: "Bachblüten",
            icon: "🌸",
            desc: "Individuelle Mischungen zur Förderung des seelischen Gleichgewichts."
        },
        {
            title: "Migräne",
            icon: "🧠",
            desc: "Gezielte Schmerztherapie und Beratung zur Vorbeugung von Attacken."
        }
    ];

    return (
        <section className="py-24 px-6 min-h-screen heart-pattern">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Unsere Schwerpunkte</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        In der Atzgersdorferstraße 23 bieten wir Ihnen ein breites Spektrum an pharmazeutischer Expertise und liebevoller Beratung.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-10 bg-white/90 backdrop-blur-sm rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="text-5xl mb-6">{s.icon}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                            <p className="text-slate-500">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}