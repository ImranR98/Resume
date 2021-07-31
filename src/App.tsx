
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Section from './components/Section/Section'
import Item from './components/Section/Item/Item'
import manulife from './assets/images/manulife.png'
import seneca from './assets/images/seneca.png'
import ryerson from './assets/images/ryerson.png'
import snapspace from './assets/images/snapspace.png'
import tinystock from './assets/images/tinystock.png'
import tuma from './assets/images/tuma.png'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <About />
        <Section id="work" title=" Work" className="work col2">
          <Item
            image={manulife}
            title="Manulife Financial"
            subtitle="Visiting Platform Reliability Engineer - Co-op"
            imageBG="1fa755"
          >
            <small>September - December 2019</small>
          </Item>
          <Item
            image={seneca}
            title="Seneca College"
            subtitle="Programmer - Co-op"
            imageBG="d60c00"
          >
            <small>January - April 2019</small>
          </Item>
        </Section>
        <Section id="study" title="Study" className="study col3">
          <Item
            image={ryerson}
            title="Ryerson University"
            subtitle="Computer Science (BSc)"
            imageBG="004c9a"
          >
            <small>September 2020 - <b>Present</b></small>
          </Item>
          <Item
            image={seneca}
            title="Seneca College"
            subtitle="Computer Programming and Analysis"
            imageBG="d60c00"
          >
            <small>September 2017 - December 2020</small>
          </Item>
        </Section>
        <Section id="projects" title="Projects" className="projects col4">
          <Item
            image={snapspace}
            title="SnapSpace"
            subtitle="Online photo sharing platform"
            imageBG="4458c0"
          >
            <small><a href="https://github.com/ImranR98/SnapSpace" target="_blank" rel="noreferrer">Source</a></small>
          </Item>
          <Item
            image={tinystock}
            title="TinyStock"
            subtitle="Minimalist stock keeping App for desktop"
            imageBG="f21e65"
          >
            <small><a href="https://github.com/ImranR98/TinyStock" target="_blank" rel="noreferrer">Source</a></small>
          </Item>
          <Item
            image={tuma}
            title="Tuma"
            subtitle="SFTP upload App for mobile"
            imageBG="f44236"
          >
            <small><a href="https://github.com/ImranR98/Tuma" target="_blank" rel="noreferrer">Source</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://play.google.com/store/apps/details?id=dev.imranr.tuma" target="_blank" rel="noreferrer">Live</a></small>
          </Item>
        </Section>
        <Section id="skills" title="Skills" className="skills col5">
          <Skills />
        </Section>
        <Footer />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
