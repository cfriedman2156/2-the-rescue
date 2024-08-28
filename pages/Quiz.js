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
    Object.keys(newPoints).forEach((character) => {
      newPoints[character] += answersPoints[idx][character];
    });
    setPoints(newPoints);
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setChecked(false);
  };

  const getResult = () => {
    let maxPoints = 0;
    let result = "";
    Object.keys(points).forEach((character) => {
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
      <main className="gradient pt-24 text-white">
        <section>
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="w-full text-center">
              <h1 className="my-4 text-4xl md:text-6xl font-bold leading-tight text-center">
                Personality Quiz
              </h1>
              <p className="text-xl md:text-3xl">
                Answer the questions below to see which animal at the sanctuary is most like you!
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          {!showResult ? (
            <h1 className="text-2xl md:text-4xl font-bold text-center pt-10">
              Question {activeQuestion + 1}/10
            </h1>
          ) : (
            <div className="text-center pt-10">
              <h1 className="text-2xl md:text-4xl font-bold">
                Your result is: {resultCharacter}
              </h1>
            </div>
          )}
          <div className="bg-white px-5 md:px-20 pb-10 md:pb-20 quiz-box-small md:quiz-box m-4 md:m-10 shadow-xl rounded-3xl text-black relative">
            {!showResult ? (
              <div className="quiz-container w-full">
                <h3 className="text-center text-3xl md:text-5xl font-semibold m-4 md:m-10">
                  {questions[activeQuestion].question}
                </h3>
                <div className="w-full flex flex-wrap items-center justify-center">
                  {answers.map((answer, idx) => (
                    <button
                      key={idx}
                      onClick={() => answerSelected(answer, idx)}
                      className={`btn min-h-16 md:h-32 w-32 md:w-60 m-1 md:m-4 
                ${selectedAnswerIndex === idx ? "btn-primary" : ""} 
                whitespace-normal break-words text-center 
                ${answer.length > 13 ? "text-sm md:text-3xl" : "text-lg md:text-3xl"} 
                ${answer.length > 17 ? "text-xs md:text-3xl" : ""}`}
                    >
                      {answer}
                    </button>
                  ))}

                </div>
                <div className="flex mx-4 justify-center">
                  {checked ? (
                    <button
                      onClick={nextQuestion}
                      className="fixed-button btn btn-primary w-32 md:w-40 h-12 md:h-20 mt-5 text-lg md:text-3xl"
                    >
                      {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                  ) : (
                    <button className="fixed-button btn btn-disabled w-32 md:w-40 h-12 md:h-20 mt-5 text-lg md:text-3xl">
                      {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="quiz-container">
                <h3 className="text-center text-3xl md:text-5xl font-semibold m-4 md:m-10">
                  The Results Are In!
                </h3>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 px-2 md:px-10 pt-5">
                    <img
                      src={resultData.image}
                      alt={resultCharacter}
                      className="max-h-60 md:max-h-96 mx-auto mt-5 rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 md:px-10 pt-5 md:pt-10">
                    <h3 className="text-2xl md:text-4xl">
                      You matched with <span className="font-bold">{resultCharacter}!</span>
                    </h3>
                    <p className="text-xl md:text-2xl mt-5">
                      {resultData.description}
                    </p>
                  </div>
                </div>
                <div className="px-10 md:px-60 pt-10">
                  <div className="flex justify-center pt-5">
                    <button
                      href="/Sponsor"
                      className="mx-auto lg:mx-0 gradient font-bold rounded-full mt-4 lg:mt-0 py-2 md:py-4 px-4 md:px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                      <a
                        href="/Sponsor"
                        target="_blank"
                        className="text-white text-3xl"
                      >
                        Sponsor {resultCharacter}
                      </a>
                    </button>
                  </div>
                  <p className="text-lg md:text-2xl mt-5 text-center font-semibold">
                    Your sponsorship will directly support {resultCharacter}. Every dollar contributes to providing food, shelter, and medical treatment,
                    ensuring {resultCharacter} will remain healthy and comfortable.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
