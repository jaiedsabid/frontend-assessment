import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Status from './components/Status';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Slider />
            <Features />
            <Status />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
