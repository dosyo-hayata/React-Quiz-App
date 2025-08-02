import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Display from "../components/Display/Display";
import quizData from "../deta/quiz";
import Button from "../components/Button/Button";
import { ROUTES } from "../const";


export default function QuizPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const level = queryParams.get("level") || "easy"; // default = easy

	const currentQuiz = quizData[level] || quizData.easy;
	const MAX_QUIZ_LEN = currentQuiz.length;

	const [quizIndex, setQuizIndex] = useState(0);
	const [answerLogs, setAnswerLogs] = useState([]);

	const handleClick = (clickedIndex) => {
		if (clickedIndex === currentQuiz[quizIndex].answerIndex) {
			setAnswerLogs((prev) => [...prev, true]);
		} else {
			setAnswerLogs((prev) => [...prev, false]);
		}
		setQuizIndex((prev) => prev + 1);
	};

	useEffect(() => {
		if (answerLogs.length === MAX_QUIZ_LEN) {
			const correctNum = answerLogs.filter((answer) => answer).length;
			navigate(ROUTES.RESULT, {
				state: {
					maxQuizLen: MAX_QUIZ_LEN,
					correctNumLen: correctNum,
				}
			});
		}
	}, [answerLogs]);

	return (
		<>
        <div style={{ 
			width: "100%", 
			backgroundColor: "#ff0202ff", 
			height: "10px", 
			marginBottom: "20px" 
		}}>
			<div style={{ 
				width: `${(quizIndex / MAX_QUIZ_LEN) * 100}%`, 
				height: "100%", 
				backgroundColor: "blue", 
				transition: "width 0.3s ease"
			}} />
		  </div>


			{currentQuiz[quizIndex] && (
				<>
					<Display>{`Q${quizIndex + 1}. ${currentQuiz[quizIndex].question}`}</Display>
					<br />
					{currentQuiz[quizIndex].options.map((option, index) => (
						<Button key={`option-${index}`} onClick={() => handleClick(index)}>
							{option}
						</Button>
					))}
				</>
			)}
		</>
	);
}
