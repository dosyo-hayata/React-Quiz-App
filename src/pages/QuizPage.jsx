import Display from "../components/Display/Display";
import quizData from "../deta/quiz";
import Button from "../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import { useEffect } from "react";


export default function QuizPage() {
	const [quizIndex, setQuizIndex] = useState(0);
	const [answerLogs, setAnswerLogs] = useState([]);
	const navigation = useNavigate();
	const MAX_QUIZ_LEN = quizData.length;

	// Assuming you want to display the first question
	const handleClick = (clickedIndex) => {
		if (clickedIndex === quizData[quizIndex].answerIndex) {
			setAnswerLogs((prev) => [...prev, true]);
		} else {
			setAnswerLogs((prev) => [...prev, false]);
		}
		setQuizIndex((prev) => prev + 1);
	};

	useEffect(() => {
		if (answerLogs.length === MAX_QUIZ_LEN) {
			const correctNum = answerLogs.filter((answer) => {
				return answer === true;
			})
			navigation(ROUTES.RESULT, {
				state: {
					maxQuizLen: MAX_QUIZ_LEN,
					correctNumLen: correctNum.length
				}
			});
		}
	}, [answerLogs]);
	return (
		<>
			{quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
			<br />
			{quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => {
				return (
					<Button  key={`option-${index}`} onClick={() => handleClick(index)}>
						{option}
					</Button>
				);
			})}
		</>
	);
}
