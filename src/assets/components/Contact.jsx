export default function Contact() {
    return (
        <section className="py-24 px-6 min-h-screen heart-pattern flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white p-12 rounded-[2.5rem] shadow-xl border border-rose-100 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Wir sind für Sie da</h2>
                    <p className="text-slate-600 mb-8">Atzgersdorferstraße 23, 1230 Wien</p>
                    <p className="text-4xl font-extrabold text-rose-500">(+43) 655 789 321</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl">
                    <h3 className="font-bold text-lg mb-4">Öffnungszeiten</h3>
                    <div className="flex justify-between py-2 border-b border-slate-200"><span>Mo-Fr</span><span className="font-bold">8:00-18:00</span></div>
                    <div className="flex justify-between py-2"><span>Sa</span><span className="font-bold">8:00-12:00</span></div>
                </div>
            </div>
        </section>
    );
}