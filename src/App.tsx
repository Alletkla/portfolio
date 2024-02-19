import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import bewertungstoolURL from "../public/alletkla-bewertungstool.netlify.app_.png"
import logicSimURL from "../public/alletkla-logic-sim.netlify.app_.png"
import pythonSchoolURL from "../public/alletkla-python-school.netlify.app_.png"
import githubURL from "../public/github-mark/github-mark.png"
import Title from './components/Title.tsx'
import Card from './components/Card.tsx'
import './App.css'

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  let layerCounter = 1

  const renderParallaxLayers = (img: string, title: JSX.Element, description: JSX.Element, technology: JSX.Element, note: JSX.Element, link?: string) => {
    const start = layerCounter
    const end = link ? start + 2.5 : start + 1.5
    layerCounter += (link ? 2.5 : 1.5) + 1
    return (
      <React.Fragment>
        <ParallaxLayer sticky={{ start: start, end: end }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: start, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className={`${styles.parallax}`}>
            <Title><h2>{title}</h2></Title>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: start + 0.5, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className={`${styles.parallax}`} >
            <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
            <Card className={`${styles.blue} ${styles.description}`}>{description}</Card>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: start + 1, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className={`${styles.parallax}`} >
            <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
            <Card style={{ visibility: 'hidden', marginBottom: '5%' }}>{description}</Card>
            <Card className={`${styles.blue} ${styles.description}`}>{technology}</Card>
          </div>
        </ParallaxLayer>
        {link && <ParallaxLayer sticky={{ start: start + 1.5, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className={`${styles.parallax}`} >
            <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
            <Card style={{ visibility: 'hidden', marginBottom: '5%' }}>{description}</Card>
            <Card style={{ visibility: 'hidden', marginBottom: '5%' }} className={`${styles.blue} ${styles.description}`}>{technology}</Card>
            <a className='btn btn-primary' style={{ display: 'flex', flexDirection: "column" }} href={link}><span>Zur Demo</span>{note}</a>
          </div>
        </ParallaxLayer>}
      </React.Fragment>)
  }

  const feedFixTitle = <span>FeedFix</span>
  const feedFixDescription = <ul>
    <li>einheitlichen Bewertung von mündlichen Leistungen anhand von Kompetenzmatrizen</li>
    <li>automatisches Feedback nach Grad der Kompetenzerfüllung</li>
  </ul>
  const feedFixTechnology = <ul>
    <li>MERN-Stack</li>
    <li>+ Typescript</li>
    <li>+ Redux</li>
    <li>+ Bootsrap</li>
  </ul>

  const bewertungstool = renderParallaxLayers(bewertungstoolURL, feedFixTitle, feedFixDescription, feedFixTechnology, <div className='note'>{"Datenbank-Server Bootzeit <=2 Minuten"}</div>, "https://alletkla-bewertungstool.netlify.app/")

  const logicSimTitle = <span>LogicSim</span>
  const logicSimDescription = <ul>
    <li>Simulation Logischer Gatter</li>
    <li>Möglichkeit zur Erstellung eigener Gatter</li>
    <li>DE / EN</li>
  </ul>
  const logicSimTechnology = <ul>
    <li>React</li>
    <li>Typescript</li>
    <li>Bootstrap</li>
    <li>i18n</li>
    <li>react-diagrams</li>
  </ul>

  const logicSim = renderParallaxLayers(logicSimURL, logicSimTitle, logicSimDescription, logicSimTechnology, <React.Fragment />, "https://alletkla-logic-sim.netlify.app/")

  const pythonSchoolTitle = <span>PythonSchool</span>
  const pythonSchoolDescription = <ul>
    <li>Grundlagen Python</li>
    <li>direktes Feedback</li>
    <li>zufällige Zahlwerte</li>
    <li>einfach erweiterbar durch .json Aufgabenformat</li>
  </ul>
  const pythonSchoolTechnology = <ul>
    <li>React</li>
    <li>Typescript</li>
    <li>Bootstrap</li>
    <li>skulpt</li>
  </ul>

  const pythonSchool = renderParallaxLayers(pythonSchoolURL, pythonSchoolTitle, pythonSchoolDescription, pythonSchoolTechnology, <React.Fragment />, "https://alletkla-python-school.netlify.app/")

  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={layerCounter + 1} style={{ top: '0px' }}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div>
            <h1 className={styles.scrollText}>Portfolio M. Förster</h1>
            <div style={{ ...alignCenter, justifyContent: 'center', fontSize: "1.5rem" }}><div> ⏬ Scroll Down ⏬</div></div>
          </div>
        </ParallaxLayer>
        {bewertungstool}
        {logicSim}
        {pythonSchool}
        <ParallaxLayer sticky={{ start: layerCounter, end: layerCounter + 1 }} style={{ ...alignCenter }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <h2>Kontakt</h2>
            <p>Maximilian Förster</p>
            <p>maximilianfoerter@t-online.de</p>
            <a href="https://github.com/Alletkla"><img style={{width: "2rem"}} src={githubURL}/></a>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div >
  )
}
