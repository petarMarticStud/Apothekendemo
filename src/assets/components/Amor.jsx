import { useEffect, useState } from 'react';

export default function Amor() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hearts, setHearts] = useState([]);
    const [isPulling, setIsPulling] = useState(false);

    useEffect(() => {
        const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
        const click = (e) => {
            setIsPulling(true);
            const h = { id: Date.now(), x: e.clientX, y: e.clientY };
            setHearts(prev => [...prev, h]);
            setTimeout(() => setIsPulling(false), 300);
            setTimeout(() => setHearts(prev => prev.filter(x => x.id !== h.id)), 1000);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('click', click);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('click', click);
        };
    }, []);

    const angle = Math.atan2(mouse.y - 80, mouse.x - (window.innerWidth - 80)) * (180 / Math.PI);

    return (
        <>
            <div className={`fixed top-20 right-20 z-[9999] text-7xl pointer-events-none transition-all duration-150 ${isPulling ? '-translate-x-10 scale-90' : ''}`}
                 style={{ transform: `rotate(${angle}deg)` }}>🏹</div>
            {hearts.map(h => (
                <div key={h.id} className="fixed z-[9998] text-2xl animate-ping" style={{ left: h.x, top: h.y }}>❤️</div>
            ))}
        </>
    );
}