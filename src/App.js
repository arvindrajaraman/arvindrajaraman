import './App.css';
import './bootstrap/css/bootstrap.min.css';
import DigitalWorld from './assets/digitalworld.mp4';

function App() {
    return (
        <div className="app">
            <video className="welcomeVideo" autostart autoPlay muted loop src={DigitalWorld} type="video/mp4" />
            <div className="welcomePane">
                <span className="largeText">Hello, I'm <b>Arvind Rajaraman</b>!</span>
                <br />
                <span className="smallText">I'm an undergraduate at UC Berkeley's M.E.T. Program, majoring in Electrical Engineering & Computer Science and Business Administration. Here, you will find my endeavors in academia, industry, and more. Welcome!</span>
            </div>
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-sm">def</div>*/}
            {/*        <div className="col-sm">abc</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;