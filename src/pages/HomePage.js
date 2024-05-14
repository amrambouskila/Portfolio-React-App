import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/HomePage.css';
import NavbarItem from "../components/NavbarItem";
import navbarData from '../components/NavbarData';



function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            onClick={onClick}
            style={{ display: 'block'}}
        >
            Next
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            onClick={onClick}
            style={{ display: 'block'}}
        >
            Prev
        </div>
    );
}

const HomePage = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [mouseDown, setMouseDown] = useState(false);
    const [drag, setDrag] = useState(false);
    const sliderRef = useRef(null);

    const handleHomeScroll = (e, ref) => {
        e.preventDefault(); // Prevent the default scroll behavior
        const delta = Math.max(-1, Math.min(1, (e.nativeEvent.deltaY || -e.nativeEvent.detail)));
        if (ref.current) {
            if (delta > 0) {
                ref.current.slickNext();
            } else if (delta < 0) {
                ref.current.slickPrev();
            }
        }
    };

    const handleMouseDown = (e) => {
        setDrag(false);
        setMouseDown(true);
    };

    const handleMouseMove = () => {
        if (mouseDown) {
            setDrag(true);
        } else {
            setDrag(false);
        }
    };

    const handleMouseUp = (e, navbar) => {
        if (!drag) {
            console.log('home mouse up');
            window.location.href = `${navbar.url}`;
        }
        setMouseDown(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slide: '.navbar-item',
    };

    const aboutText = 'As a seasoned Machine Learning Engineer and Data Architect, ' +
        'I bring a robust blend of data science, machine learning, statistical analysis, and data visualization ' +
        'skills to the table. With extensive experience in developing predictive models and analytical frameworks, ' +
        'I excel in transforming complex datasets into actionable insights and strategic decisions. ' +
        'My work has significantly improved operational efficiencies and predictive accuracy in diverse sectors, ' +
        'leveraging advanced analytics and custom data visualization tools. ' +
        'I\'m adept at orchestrating end-to-end data pipeline architecture, employing a mix of Python, R, SQL, ' +
        'and various visualization platforms like Tableau and PowerBI to elucidate data stories. Passionate about ' +
        'driving innovation through data, I aim to empower organizations to harness the full potential of their ' +
        'data assets, making informed decisions that drive growth and efficiency.'


    useEffect(() => {
        if (isTyping && textIndex < aboutText.length) {
            const timeoutId = setTimeout(() => {
                setTypedText(typedText + aboutText.charAt(textIndex));
                setTextIndex(textIndex + 1);
            }, 10);  // Adjust typing speed as necessary

            return () => clearTimeout(timeoutId);
        } else {
            setIsTyping(false);
        }
    }, [textIndex, isTyping, aboutText, typedText]);

    return (
        <div>
            <div className="home-background-image-container">
                <section className="introduction">
                    <img src="/images/me.jpg" alt="Amram" className="img-size"/>
                </section>
                <section>
                    <h1 className="landing-text">{typedText}</h1>
                </section>
                <div className="navbar-slider">
                    <div
                        onMouseOver={() => setMouseDown(false)}
                        onWheel={(e) => handleHomeScroll(e, sliderRef)}
                        onMouseMove={handleMouseMove}
                    >
                        <Slider ref={sliderRef} {...settings}>
                            {navbarData.map(navbar => (
                                <div key={navbar.id} onMouseDown={handleMouseDown}
                                     onMouseUp={(e) => handleMouseUp(e, navbar)}>
                                    <NavbarItem className='navbar-item'
                                                id={navbar.id}
                                                title={navbar.title}
                                                description={navbar.description}
                                                imageUrl={navbar.imageUrl}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
)
    ;
};

export default HomePage;
