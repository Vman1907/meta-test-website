import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './views/components/footer';
import Navbar from './views/components/navbar';
import PageContainer from './views/components/page-layout';

const Home = React.lazy(() => import('./views/pages/home'));
const Terms = React.lazy(() => import('./views/pages/terms'));
const Privacy = React.lazy(() => import('./views/pages/privacy'));
const Disclaimer = React.lazy(() => import('./views/pages/disclaimer'));

function App() {
	return (
		<PageContainer>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/terms' element={<Terms />} />
						<Route path='/privacy' element={<Privacy />} />
						<Route path='/disclaimer' element={<Disclaimer />} />
					</Routes>
					<Footer />
				</Suspense>
			</Router>
		</PageContainer>
	);
}

export default App;
