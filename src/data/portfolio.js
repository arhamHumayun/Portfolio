import tthScreenshot from './../assets/images/tthScreenshot.png'
import srvisScreenshot from './../assets/images/srvisScreenshot.png'
import schulichVelocityScreenshot from './../assets/images/schulichVelocityScreenshot.png'
import stm32picture from './../assets/images/stm32picture.jpg'
import minesweeperScreenhot from './../assets/images/minesweeperScreenshot.png'
import PetNextDoorScreenshot from './../assets/images/PetNextDoorScreenshot.png'

const data = [
  {
    title: 'STM Display',
    description: `Display/Dashboard for formula racing car. Written in C and running on an STM32 chipset powered by ARM.
    Picture shows the STM32F29 discovery board in which the display was programmed.`,
    github: 'https://github.com/SchulichRacingElectrical/STMDisplay',
    image: stm32picture
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
    title: 'Pet Next Door',
    github: 'https://github.com/arhamHumayun/pet-next-door',
    description: `A web based system created for pet shelters to keep track of their pets and users. 
    Created using HTML, CSS, PHP, and an Apache MySQLi server.`,
    image: PetNextDoorScreenshot
  },
  {
    title: 'Minesweeper',
    github: 'https://github.com/arhamHumayun/minesweeper',
    description: `Classic Minesweeper remade in Python using pygame.`,
    image: minesweeperScreenhot
  },
  {
    title: 'Schulich Velocity',
    github: 'https://github.com/SchulichRacingElectrical/SchulichVelocity',
    image: schulichVelocityScreenshot,
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