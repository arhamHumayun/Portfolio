import tthScreenshot from './../assets/images/tthScreenshot.png'
import srvisScreenshot from './../assets/images/srvisScreenshot.png'

const data = [
  {
    title: 'STM Display',
    description: `Display/Dashboard for formula racing car. Written in C++ and running on an STM32 chipset powered by ARM.`,
    github: 'https://github.com/SchulichRacingElectrical/STMDisplay'
  },
  {
    title: 'Tabletop Helper',
    website: 'https://arhamhumayun.me/Tabletop-Helper',
    github: 'https://github.com/arhamHumayun/Tabletop-Helper',
    description: `A solo side project made to help speed up TTRPG combat by providing a robust online dice roller and multiple stat generators.
    Made with React and utilizes many components from react-bootstrap.`,
    image: tthScreenshot
  },
  {
    title: 'Schulich Velocity',
    github: 'https://github.com/SchulichRacingElectrical/SchulichVelocity',
    description: `Graphing web app made with React with the purpose to view, store, and analyse data from a formula race car.
    Developed by the Electrical/Software team in Schulich Racing. My role in the development of this app was to implement GraphJS as our
    visualization tool, and to write the client side code for data processing.`
  },
  {
    title: 'SRVis',
    github: 'https://github.com/SchulichRacingElectrical/SRVis',
    description: `Data visualization library written in Python using Pandas, NumPy, and Bokeh as our graphing solution.`,
    image: srvisScreenshot
  },
]

export default data
