import React, {useEffect, useState} from 'react';
import RadarChart from "../components/RadarChart";
import '../styles/SkillTree.css';


const SkillTreePage = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const texts = [
        'Amram Bouskila',
        'a Biochemist',
        'a Data Scientist',
        'a Health Coach',
        'a Martial Artist',
        'a Music Producer',
        'always learning how to learn',
    ];

    useEffect(() => {
        const typeText = () => {
            if (typedText.length < ("Hello, I am " + texts[textIndex]).length) {
                setTypedText("Hello, I am " + texts[textIndex].slice(0, typedText.length - 11 + 1));
            } else {
                setIsTyping(false);
            }
        };

        const eraseText = () => {
            if (typedText !== 'Hello, I am ') {
                setTypedText(typedText.slice(0, -1));
            } else {
                setIsTyping(true);
                setTextIndex((textIndex + 1) % texts.length);
            }
        };

        const interval = setInterval(() => {
            if (isTyping) {
                typeText();
            } else {
                eraseText();
            }
        }, 100);

        return () => clearInterval(interval);
    }, [textIndex, typedText, isTyping, texts]);

    return (
        <div className="skilltree-background-image-container">
            <div style={{paddingTop: '100vh'}}>
                <div className="chart-section">
                    <div className="chart-container">
                        <RadarChart/>
                    </div>
                </div>
            </div>
            <section className="introduction">
                <img src="/images/me.jpg" alt="Amram" className="img-size"/>
            </section>
            <section>
                <h1>{typedText}</h1>
            </section>
        </div>
    );
};

export default SkillTreePage;