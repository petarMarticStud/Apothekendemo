import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
            <nav className="max-w-7xl mx-auto h-24 flex justify-between items-center px-6">
                <Link to="/" className="text-2xl font-black text-slate-900">LOVE<span className="text-rose-500">APOTHEKE</span></Link>
                <div className="flex gap-8 font-bold text-slate-600">
                    <Link to="/" className="hover:text-rose-500">Home</Link>
                    <Link to="/about" className="hover:text-rose-500">Services</Link>
                    <Link to="/contact" className="hover:text-rose-500">Kontakt</Link>
                </div>
            </nav>
        </header>
    );
}