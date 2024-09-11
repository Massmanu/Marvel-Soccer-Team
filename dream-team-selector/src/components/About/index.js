import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimattedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
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
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['D', 'r', 'e', 'a ', 'm', ' ', 'T', 'e', 'a', 'm', ' ', 'S', 'l', 'e', 'c', 't', 'o', 'r', '.',]}
                            idx={15}
                        />
                    </h1>


                    <p>
                        Welcome to the <strong>Dream Team Selector</strong>! This application is designed for Marvel fans to
                        create their ultimate 5-aside Marvel superhero soccer team. Explore an extensive list of Marvel characters
                        and assemble your dream team with heroes and villains from the Marvel Universe.
                    </p>
                    <h2>How It Works</h2>
                    <p>
                        The <strong>Dream Team Selector</strong> allows you to choose five characters to form your very own Marvel soccer team.
                        Each player has a unique set of abilities, and it’s up to you to decide which Marvel heroes (or villains)
                        will dominate the pitch. You can assign them specific positions like striker, defender, or goalkeeper.
                    </p>
                    <h2>Key Features</h2>
                    <ul>
                        <li>
                            <strong>Character Selection:</strong> Browse through a list of Marvel characters, including your
                            favorite Avengers, X-Men, and Guardians of the Galaxy, and select them for your team.
                        </li>
                        <li>
                            <strong>Team Customization:</strong> Position your selected characters on the soccer field, assigning
                            them roles based on their strengths.
                        </li>
                        <li>
                            <strong>Responsive Design:</strong> Our app is designed to work smoothly on both mobile and desktop devices,
                            ensuring you can build your Marvel team anywhere, anytime.
                        </li>
                        <li>
                            <strong>Share Your Team:</strong> Once you've assembled your team, you can share it on social media and
                            challenge your friends to create their own ultimate Marvel soccer squad.
                        </li>
                    </ul>
                    <h2>Our Mission</h2>
                    <p>
                        As Marvel fans ourselves, we created this app to bring the excitement of the Marvel Universe into a fun
                        and interactive format. Our goal is to let fans engage with their favorite characters in a new and creative way,
                        building teams that represent their ideal Marvel soccer squad.
                    </p>
                    <h2>Stay Connected</h2>
                    <p>
                        Have feedback or suggestions for new features? We’d love to hear from you! Feel free to reach out through
                        our contact page and follow us on social media for updates on new characters and features.
                    </p>

                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
