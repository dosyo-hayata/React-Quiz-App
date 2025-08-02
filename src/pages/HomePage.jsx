import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import Button from "../components/Button/Button";


export default function HomePage() {
	const navigate2 = useNavigate();

    const goToQuiz = (level) => {
		navigate2(`${ROUTES.QUIZ}?level=${level}`);
	};

	return (
		<>
			<h1>React クイズアプリ</h1>
			<div style={{ display: "flex", flexDirection: "column", gap: "10px",fontSize: "40px" }}>
			<button  style={{ backgroundColor: "lightblue" }} onClick={() => goToQuiz("easy")}>やさしい</button>
			<br />
            <button style={{ backgroundColor: "lightgreen" }} onClick={() => goToQuiz("normal")}>普通</button>
			<br />
            <button style={{ backgroundColor: "lightcoral" }} onClick={() => goToQuiz("hard")}>難しい</button>
			</div>
		</>
	);
}