import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimattedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const wellcomeArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 'T', 'o', ' ', 'T', 'h', 'e']
    const marvwlArray = ['M', 'A', 'R', 'V', 'E', 'L']
    const nameArray = ['D', 'r', 'e', 'a ', 'm', ' ', 'T', 'e', 'a', 'm', ' ', 'S', 'l', 'e', 'c', 't', 'i', 'o', 'n', '.',
    ]


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />


                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={wellcomeArray}
                            idx={15}
                        />
                        <br />

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={marvwlArray}
                            idx={15}
                        />
                        <br />


                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Team Selection / Team share / More</h2>
                    <Link to="/contact" className="flat-button">
                        CREATE MARVEL TEAM
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Home
