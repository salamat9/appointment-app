import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import AppLayout from './pages/AppLayout';

function App() {
	return (
		<div className="App">
			<Router>
				<AppLayout />
			</Router>
		</div>
	);
}

export default App;
