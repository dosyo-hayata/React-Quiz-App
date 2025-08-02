import { Link, useLocation, useNavigate } from 'react-router-dom';
import Result from '../components/Result/Result';	
import { ROUTES } from '../const';
import Loading from '../components/Loading/Loading';
import { useState, useEffect } from 'react';


export default function ResultPage() {
	const [active, setActive] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const maxQuizLen = location.state.maxQuizLen;
	const correctNumLen = location.state.correctNumLen;

	useEffect(() => {
		setTimeout(() => { setActive(true); }, 3000);
	}, []);

	const handleRetry = () => {
		navigate(ROUTES.HOME); 
	};

	return (
		<>
			<Loading active={active} />
			<h1>Result</h1>
			<Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
			<br />
			<button onClick={handleRetry}>もう一度チャレンジ！</button>
		</>
	);
}
