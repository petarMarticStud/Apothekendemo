import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="min-h-[90vh] heart-pattern flex items-center justify-center pt-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Branding-Tag für lokale Relevanz */}
                <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-sm">
                </p>

                {/* Das zentrale Markenversprechen */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-rose-500 leading-tight mb-8">
                    Alles wird mit Liebe bei uns produziert
                </h1>

                {/* Fachliche Einordnung */}
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Ganzheitliche Beratung, fachliche Expertise und ein offenes Ohr für Ihre Gesundheit.
                </p>

                {/* Call-to-Action Bereich für die Kundenüberzeugung */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-rose-500 transition-all shadow-lg hover:shadow-rose-200"
                    >
                        Kontakt
                    </Link>

                    <Link
                        to="/about"
                        className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold hover:border-rose-300 hover:text-rose-500 transition-all shadow-sm"
                    >
                        Unsere Leistungen
                    </Link>
                </div>
            </div>
        </section>
    );
}