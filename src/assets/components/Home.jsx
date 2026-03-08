import { Link } from 'react-router-dom';
import HealthTips from "./HealthTips.jsx";
import Hero from "./Hero.jsx";

export default function Home() {
    return (
        <>
            <Hero/>
            <HealthTips/>
        </>
    );
}