import { Link } from 'react-router-dom';
import HealthTips from "./HealthTips.jsx";

export default function Home() {
    return (
        <>
            <HealthTips/>

            <section className="min-h-screen heart-pattern flex items-center pt-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4">Ihre Apotheke am Maurer Hauptplatz</p>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                        „Jede Krankheit hat ihre eigene Arznei. Unsere Arznei ist Herzlichkeit.“
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Ganzheitliche Beratung, fachliche Expertise und ein offenes Ohr für Ihre Gesundheit.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-500 transition-all">Beratung anfragen</button>
                        <button className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-slate-300">Mehr über uns</button>
                    </div>
                </div>
            </section>

        </>

    );
}