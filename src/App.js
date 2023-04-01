import './App.css';
import Navbar from './Navbar.js';
import Introduction from './Introduction.js';
import Sectioncard from './Sectioncard.js';
import Aboutme from './Aboutme.js';
import Projects from './Projects.js';
import Contact from './Contact';
import Footer from './Footer';

import logo from './images/logo.png';
import image from './images/introImg.png';

import aboutme from './content/Aboutme.json';
import projectContent from './content/Projects.json';

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <div id='lowerApp'>
        <Introduction image={image} />
        <Sectioncard sectioncardName="About Me" component={<Aboutme aboutme={aboutme} />} />
        <Sectioncard id="Projects" sectioncardName="Projects" component={<Projects projects={projectContent} />} />
        <Sectioncard sectioncardName="Leave a Message" component={<Contact />} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
