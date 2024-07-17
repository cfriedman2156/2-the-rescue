import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { quiz } from "@/components/quizData";
import { useState } from "react";

export default function Quiz() {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [checked, setChecked] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [points, setPoints] = useState({
        Ferdie: 0,
        Rocky: 0,
        Brittle: 0,
        Toby: 0,
        Max: 0,
        Fabio: 0,
        Buckwheat: 0,
        Hammy: 0,
        Rusty: 0,
    });

    const { questions, results } = quiz;
    const { question, answers, answersPoints } = questions[activeQuestion];

    const answerSelected = (answer, idx) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        const newPoints = { ...points };
        Object.keys(newPoints).forEach(character => {
            newPoints[character] += answersPoints[idx][character];
        });
        setPoints(newPoints);
    };

    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setShowResult(true);
        }
        setChecked(false);
    };

    const getResult = () => {
        let maxPoints = 0;
        let result = '';
        Object.keys(points).forEach(character => {
            if (points[character] > maxPoints) {
                maxPoints = points[character];
                result = character;
            }
        });
        return result;
    };

    const resultCharacter = getResult();
    const resultData = results[resultCharacter];

    return (
        <>
            <Nav />
            <main className="gradient pt-32 text-white">
                <section>
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className=" w-full text-center">
                            <h1 className="my-4 text-6xl font-bold leading-tight text-center">Personality Quiz</h1>
                            <p className="text-3xl">Answer the questions below to see which animal at the sanctuary is most like you!</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center">
                    {!showResult ? (
                        <h1 className="text-4xl font-bold text-center pt-10">
                            Question {activeQuestion + 1}/10
                        </h1>
                    ) : (
                        <div className="text-center pt-10">
                            <h1 className="text-4xl font-bold">
                                Your result is: {resultCharacter}
                            </h1>
                        </div>
                    )}
                    <div className="bg-white px-20 pb-20 quiz-box m-10 shadow-xl rounded-3xl text-black relative">
                        {!showResult ? (
                            <div className='quiz-container '>
                                <h3 className="text-center text-5xl font-semibold m-10">{questions[activeQuestion].question}</h3>
                                <div className="flex flex-wrap items-center justify-center">
                                    {answers.map((answer, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => answerSelected(answer, idx)}
                                            className={`btn h-32 w-60 text-3xl m-4 ${selectedAnswerIndex === idx ? 'btn-primary' : ''}`}>
                                            {answer}
                                        </button>
                                    ))}

                                </div>
                                <div className="flex mx-4 justify-center ">
                                    {checked ? (
                                        <button onClick={nextQuestion} className="fixed-button btn btn-primary w-40 h-20 mt-5 text-3xl">
                                            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                        </button>
                                    ) : (
                                        <button className="fixed-button btn btn-disabled w-40 h-20 mt-5 text-3xl">
                                            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className='quiz-container'>
                                <h3 className="text-center text-5xl font-semibold m-10">The Results Are In!</h3>
                                <div className="flex">
                                    <div className="w-1/2 px-10 pt-5">
                                        <img src={resultData.image} alt={resultCharacter} className="max-h-96 mx-auto mt-5 rounded-xl" />
                                    </div>
                                    <div className="w-1/2 px-10 pt-10">
                                        <h3 className="text-4xl">
                                            You matched with <span className="font-bold">{resultCharacter}!</span>
                                        </h3>
                                        <p className="text-2xl mt-5">
                                            {resultData.description}
                                        </p>


                                    </div>

                                </div>
                                <div className="px-60 pt-10">
                                    <p className="text-2xl mt-5 text-center font-semibold">
                                        Your sponsorship will directly support {resultCharacter}. Every dollar contributes to providing food, shelter, and medical treatment,
                                        ensuring {resultCharacter} will remain healthy and comfortable.
                                    </p>
                                    <div className="flex justify-center pt-5">
                                        <button href="/Sponsor" className="mx-auto lg:mx-0  gradient font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                            <a href="/Sponsor" target="_blank" className='text-white text-3xl'>Sponsor {resultCharacter}</a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </section>
                <section className="pt-20 relative -mt-12 lg:-mt-24">
                    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                            </g>
                        </g>
                    </svg>
                </section>


            </main>
            <Footer />
        </>
    );
}
