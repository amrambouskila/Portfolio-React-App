import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectsPage.css';
import ProjectItem from '../components/ProjectItem';
import soloProjectData from '../components/SoloProjectData';
import coopProjectData from '../components/CoopProjectData';

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



const Projects = ({ projects }) => {
    const [mouseDown, setMouseDown] = useState(false);
    const [drag, setDrag] = useState(false);
    const soloSliderRef = useRef(null);
    const coopSliderRef = useRef(null);

    const handleScroll = (e, ref) => {
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

    const handleMouseUp = (e, project) => {
        let path = '/projects/coop';
        if (project.solo) {
            path = `/projects/solo`
        }

        if (!drag) {
            window.location.href = `${path}/${project.id}`;
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

    return (
        <div className='background-image-container'>
            <div className="projects-slider">
                <h1 style={{textAlign: 'center', color: 'whitesmoke'}}>Solo Projects</h1>
                <div
                    onMouseOver={() => setMouseDown(false)}
                    onWheel={(e) => handleScroll(e, soloSliderRef)}
                    onMouseMove={handleMouseMove}
                >
                    <Slider ref={soloSliderRef} {...settings}>
                        {soloProjectData.map(project => (
                            <div key={project.id} onMouseDown={handleMouseDown} onMouseUp={(e) => handleMouseUp(e, project)}>
                                <ProjectItem className='project-item'
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    type={project.solo ? 'solo' : 'coop'}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <h1 style={{textAlign: 'center', color: 'whitesmoke'}}>Cooperative Projects</h1>
                <div
                    onMouseOver={() => setMouseDown(false)}
                    onWheel={(e) => handleScroll(e, coopSliderRef)}
                    onMouseMove={handleMouseMove}
                >
                    <Slider ref={coopSliderRef} {...settings}>
                        {coopProjectData.map(project => (
                            <div key={project.id} onMouseDown={handleMouseDown} onMouseUp={(e) => handleMouseUp(e, project)}>
                                <ProjectItem
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;
