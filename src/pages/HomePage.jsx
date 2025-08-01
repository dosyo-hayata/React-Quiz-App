import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function HomePage() {
	const navigate2 = useNavigate();

	const handleClick = () => {
		navigate2(ROUTES.QUIZ);
	};

	return (
		<>
			<h1>React クイズアプリ</h1>
			<button onClick={handleClick}>Start!</button>
		</>
	);
}