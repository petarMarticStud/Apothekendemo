export default function Contact() {
    return (
        <section className="py-24 px-6 min-h-screen heart-pattern">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Obere Sektion: Info & Öffnungszeiten */}
                <div className="bg-white/90 backdrop-blur-md p-10 md:p-12 rounded-[3rem] shadow-xl border border-rose-100 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Wir sind für Sie da</h2>
                        <p className="text-slate-600 mb-2">Atzgersdorferstraße 23, 1230 Wien</p>
                        <p className="text-slate-500 mb-8 italic">„Liebe verbindet Menschen – und uns mit Ihrer Gesundheit.“</p>
                        <p className="text-4xl font-extrabold text-rose-500 tracking-tight hover:scale-105 transition-transform cursor-pointer">
                            (+43) 655 789 321
                        </p>
                    </div>

                    <div className="bg-rose-50/50 p-8 rounded-[2rem] border border-rose-100">
                        <h3 className="font-bold text-xl mb-6 text-slate-900 flex items-center gap-2">
                            <span>🕒</span> Öffnungszeiten
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between py-2 border-b border-rose-200">
                                <span className="text-slate-700">Montag – Freitag</span>
                                <span className="font-bold text-slate-900">8:00 – 18:00</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-rose-200">
                                <span className="text-slate-700">Samstag</span>
                                <span className="font-bold text-slate-900">8:00 – 12:00</span>
                            </div>
                            <p className="text-xs text-rose-400 mt-4 font-medium italic">
                                Außerhalb der Zeiten finden Sie uns über den Apotheken-Notdienst.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Untere Sektion: Kontaktformular */}
                <div className="max-w-3xl mx-auto bg-white p-10 md:p-12 rounded-[3rem] shadow-lg border border-slate-100">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Haben Sie Fragen oder ein Anliegen?</h3>
                        <p className="text-slate-500">Schreiben Sie uns – wir antworten Ihnen so schnell wie möglich mit Herz und Fachverstand.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Name</label>
                                <input type="text" placeholder="Ihr Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-rose-300 focus:bg-white focus:ring-0 transition-all outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">E-Mail</label>
                                <input type="email" placeholder="ihre@mail.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-rose-300 focus:bg-white focus:ring-0 transition-all outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Betreff</label>
                            <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-rose-300 focus:bg-white focus:ring-0 transition-all outline-none">
                                <option>Allgemeine Anfrage</option>
                                <option>Frage zu Eigenprodukten</option>
                                <option>Kosmetik-Beratung</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Nachricht</label>
                            <textarea rows="4" placeholder="Wie können wir Ihnen helfen?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-rose-300 focus:bg-white focus:ring-0 transition-all outline-none resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-rose-500 shadow-lg hover:shadow-rose-200 transition-all duration-300">
                            Nachricht senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}