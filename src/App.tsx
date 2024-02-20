import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import sql2RegExURL1 from "../public/sql2regex.onrender.com__1.png"
import sql2RegExURL2 from "../public/sql2regex.onrender.com__2.png"
import sql2RegExURL3 from "../public/sql2regex.onrender.com__3.png"
import bewertungstoolURL1 from "../public/alletkla-bewertungstool.netlify.app_.png"
import bewertungstoolURL2 from "../public/alletkla-bewertungstool.netlify.app_2.png"
import bewertungstoolURL3 from "../public/alletkla-bewertungstool.netlify.app_3.png"
import logicSimURL1 from "../public/alletkla-logic-sim.netlify.app_.png"
import logicSimURL2 from "../public/alletkla-logic-sim.netlify.app_2.png"
import pythonSchoolURL1 from "../public/alletkla-python-school.netlify.app_.png"
import pythonSchoolURL2 from "../public/alletkla-python-school.netlify.app_2.png"
import githubURL from "../public/github-mark/github-mark.png"
import Title from './components/Title.tsx'
import Card from './components/Card.tsx'
import './App.css'

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  let layerCounter = 1

  // const renderParallaxLayers = (img: string, title: JSX.Element, description: JSX.Element, technology: JSX.Element, note: JSX.Element, link?: string) => {
  //   const start = layerCounter
  //   const end = link ? start + 2.5 : start + 1.5
  //   layerCounter += (link ? 2.5 : 1.5) + 1
  //   return (
  //     <React.Fragment>
  //       <ParallaxLayer sticky={{ start: start, end: end }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
  //         <div className={`${styles.image_card} ${styles.sticky}`}>
  //           <img className={styles.image} src={img} />
  //         </div>
  //       </ParallaxLayer>

  //       <ParallaxLayer sticky={{ start: start, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
  //         <div className={`${styles.parallax}`}>
  //           <Title><h2>{title}</h2></Title>
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer sticky={{ start: start + 0.5, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
  //         <div className={`${styles.parallax}`} >
  //           <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
  //           <Card className={`${styles.blue} ${styles.description}`}>{description}</Card>
  //         </div>
  //       </ParallaxLayer>
  //       <ParallaxLayer sticky={{ start: start + 1, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
  //         <div className={`${styles.parallax}`} >
  //           <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
  //           <Card style={{ visibility: 'hidden', marginBottom: '5%' }}>{description}</Card>
  //           <Card className={`${styles.blue} ${styles.description}`}>{technology}</Card>
  //         </div>
  //       </ParallaxLayer>
  //       {link && <ParallaxLayer sticky={{ start: start + 1.5, end: end }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
  //         <div className={`${styles.parallax}`} >
  //           <Title style={{ visibility: 'hidden', marginBottom: '5%' }} >{title}</Title>
  //           <Card style={{ visibility: 'hidden', marginBottom: '5%' }}>{description}</Card>
  //           <Card style={{ visibility: 'hidden', marginBottom: '5%' }} className={`${styles.blue} ${styles.description}`}>{technology}</Card>
  //           <a className='btn btn-primary' style={{ display: 'flex', flexDirection: "column" }} href={link} target="_blank"><span>Zur Demo</span>{note}</a>
  //         </div>
  //       </ParallaxLayer>}
  //     </React.Fragment>)
  // }

  const renderParallaxLayers2Images = (img1: string, img2: string, title: JSX.Element, description: JSX.Element, technology: JSX.Element, note: JSX.Element, link?: string) => {
    const start = layerCounter
    const end = link ? start + 2.5 : start + 1.5
    layerCounter += (link ? 2.5 : 1.5) + 1
    return (
      <React.Fragment>
        <ParallaxLayer sticky={{ start: start, end: start +0.75 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img1} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: start+1.5, end: end }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img2} />
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
            <a className='btn btn-primary' style={{ display: 'flex', flexDirection: "column" }} href={link} target="_blank"><span>Zur Demo</span>{note}</a>
          </div>
        </ParallaxLayer>}
      </React.Fragment>)
  }

  const renderParallaxLayers3Images = (img1: string, img2: string, img3: string, title: JSX.Element, description: JSX.Element, technology: JSX.Element, note: JSX.Element, link?: string) => {
    const start = layerCounter
    const end = link ? start + 2.5 : start + 1.5
    layerCounter += (link ? 2.5 : 1.5) + 1
    return (
      <React.Fragment>
        <ParallaxLayer sticky={{ start: start, end: start +0.25 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img1} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: start+1, end: start +1.25 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img2} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: start+2, end: end }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.image_card} ${styles.sticky}`}>
            <img className={styles.image} src={img3} />
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
            <a className='btn btn-primary' style={{ display: 'flex', flexDirection: "column" }} href={link} target="_blank"><span>Zur Demo</span>{note}</a>
          </div>
        </ParallaxLayer>}
      </React.Fragment>)
  }

  const sql2RegExTitle = <span>Sql2RegEx</span>
  const sql2RegExDescription = <ul>
    <li>Konverter in EN/DE</li>
    <li>Input: 1 SQL Musterlösung</li>
    <li>Output: regulärer Ausdruck möglicher Alternativen</li>
    <li>99% Trefferquote</li>
    <li>Unterstütz werden: SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, DROP TABLE</li>
  </ul>
  const sql2RegExTechnology = <ul>
    <li>Java</li>
    <li>+ Spring</li>
    <li>JavaScript</li>
    <li>Bootstrap</li>
  </ul>

  const sql2RegEx = renderParallaxLayers3Images(sql2RegExURL1, sql2RegExURL2, sql2RegExURL3, sql2RegExTitle, sql2RegExDescription, sql2RegExTechnology, <div className='note'>{"Bootzeit <=2 Minuten"}</div>, "https://sql2regex.onrender.com/")

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

  const bewertungstool = renderParallaxLayers3Images(bewertungstoolURL1, bewertungstoolURL2, bewertungstoolURL3, feedFixTitle, feedFixDescription, feedFixTechnology, <div className='note'>{"Datenbank-Server Bootzeit <=2 Minuten"}</div>, "https://alletkla-bewertungstool.netlify.app/")

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

  const logicSim = renderParallaxLayers2Images(logicSimURL1, logicSimURL2, logicSimTitle, logicSimDescription, logicSimTechnology, <React.Fragment />, "https://alletkla-logic-sim.netlify.app/")

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

  const pythonSchool = renderParallaxLayers2Images(pythonSchoolURL1, pythonSchoolURL2, pythonSchoolTitle, pythonSchoolDescription, pythonSchoolTechnology, <React.Fragment />, "https://alletkla-python-school.netlify.app/")



  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={layerCounter + 1} style={{ top: '0px' }}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div>
            <h1 className={styles.scrollText}>Portfolio M. Förster</h1>
            <div style={{ ...alignCenter, justifyContent: 'center', fontSize: "1.5rem" , marginBottom: "2rem"}}>- Tech and Education Combined -</div>
            <div style={{ ...alignCenter, justifyContent: 'center', fontSize: "1rem" }}><div> ⏬ Scroll Down ⏬</div></div>
          </div>
        </ParallaxLayer>
        {sql2RegEx}
        {bewertungstool}
        {logicSim}
        {pythonSchool}
        <ParallaxLayer offset={layerCounter} speed={0.5} style={{ ...alignCenter }}>
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
