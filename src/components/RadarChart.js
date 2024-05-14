import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import '../styles/RadarChart.css';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const skill_tree_data = {
    labels: ['Education', 'Communication', 'Finance', 'Music', 'Martial Arts'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 3, 5, 5, 4]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [5, 4, 5, 5, 4]
        },

    ]
};

const education_data = {
    labels: ['Mathematics', 'Physics', 'Biochemistry', 'Computer Science', 'History'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [9, 3, 6, 3, 1]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [9, 4, 7, 4, 2]
        },
    ]
};

const martial_arts_data = {
    labels: ['Wrestling', 'Boxing', 'Kickboxing', 'Brazilian Jiu Jitsu', 'Judo', 'Iaido', 'Kendo', 'Archery'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 5, 7, 6, 6, 2, 2, 1]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 7, 8, 6, 3, 1, 1, 1]
        },

    ]
};

const communication_data = {
    labels: ['Languages', 'Nonverbal Communication', 'Negotiation'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 5, 7]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 7, 8]
        },

    ]
};

const language_data = {
    labels: ['English', 'Hebrew', 'Spanish', 'Russian', 'Japanese', 'Arabic', 'ASL'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [9, 6, 4, 3, 1, 1, 1]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [9, 7, 5, 4, 2, 1, 1]
        },

    ]
};

const music_data = {
    labels: ['Guitar', 'Piano', 'Drums', 'Bass', 'Saxophone', 'Flute', 'Koto', 'Harp', 'Violin', 'Vocals'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [5, 2, 2, 4, 1, 1, 1, 1, 1, 1]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 3, 3, 5, 1, 1, 1, 1, 1, 1]
        },

    ]
};

const mathematics_data = {
    labels: ['Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [10, 10, 10, 9, 9]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [10, 10, 10, 9, 9]
        },

    ]
};

const physics_data = {
    labels: ['Classical Mechanics', 'Thermodynamics', 'Electromagnetism', 'Fluid Mechanics', 'Quantum Mechanics',
        'Relativity', 'Statistical Mechanics', 'Nuclear Physics', 'Particle Physics', 'Astrophysics'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [9, 2, 8, 2, 4, 4, 2, 3, 2, 2]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [9, 2, 8, 2, 4, 4, 2, 3, 2, 2]
        },

    ]
};

const history_data = {
    labels: ['Religion', 'Ancient Civilizations and Empires'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [9, 2, 8, 2, 4, 4, 2, 3, 2, 2]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [9, 2, 8, 2, 4, 4, 2, 3, 2, 2]
        },

    ]
};

const datasetsConfig = {
    'Education': education_data,
    'Martial Arts': martial_arts_data,
    'Communication': communication_data,
    'Languages': language_data,
    'Music': music_data,
    'Mathematics': mathematics_data,
    'Physics': physics_data
};

ChartJS.defaults.scale.ticks.backdropColor = 'transparent';

const RadarChart = () => {
    const [data, setData] = useState(skill_tree_data);
    const [isDrillDown, setIsDrillDown] = useState(false);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1,
                    font: {
                        size: 18,
                        color: 'black'
                    }
                },
                display: true,
                pointLabels: {
                    font: {
                        size: 30,
                    },
                    color: '#000',
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const clickedElementIndex = elements[0].index;
                const label = data.labels[clickedElementIndex];
                const newDataSet = datasetsConfig[label];
                if (newDataSet) {
                    setData(newDataSet);
                    setIsDrillDown(true);
                }
            }
        }
    };

    const handleBackClick = () => {
        setData(skill_tree_data); // Reset data to the initial dataset
        setIsDrillDown(false); // We are no longer in a drill-down view
    };

    return (
        <div className="chart-wrapper"> {/* Add a wrapper div for positioning */}
            <div className="chart-container">
                <Radar data={data} options={options} className="canvas"/>
                {isDrillDown && (
                    <button className="back-button" onClick={handleBackClick} aria-label="Back">
                        <svg width="40" height="40">
                            <path d="M 0 0 C 20 10, 20 30, 0 40"
                                  fill="transparent"
                                  stroke="rgba(128, 128, 128, 0.7)"
                                  stroke-width="8"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
        ;
};

export default RadarChart;
