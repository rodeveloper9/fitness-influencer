import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../component/Home/Home';
import ContactPage from '../component/Contact/contact';

const HandleRoute = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    exact
                    component={HomePage}
                />
                <Route
                    path="/contact"
                    exact
                    component={ContactPage}
                />
            </Routes>
        </Router>
    )
}

export default HandleRoute
