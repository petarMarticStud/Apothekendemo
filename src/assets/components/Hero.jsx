export default function Hero() {
    return (
        <section className="py-24 px-6 heart-pattern">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="text-6xl text-rose-400">“</div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    „Jede Krankheit hat ihre eigene Arznei. Unsere Arznei ist Herzlichkeit.“
                </h1>
                <p className="text-xl text-slate-600">— Ihre Apotheke am Puls der Zeit</p>
                <div className="pt-8">
                    <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-rose-500 transition-all">
                        Zu unseren Leistungen
                    </button>
                </div>
            </div>
        </section>
    );
}