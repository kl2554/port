import React, { useEffect, useRef, useState } from 'react';
import aboutImage from './img/about.gif';
import python from './img/html..png';
import java from './img/AI.png';
import git from './img/tool.png';
import Sinhala from './img/sinhala.jpg';
import stock from './img/stock.jpg';
import game from './img/2D.jpg';
import cleaning from './img/saree.jpg';
import courier from './img/courier.jpg';
import internship from './img/internship.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import heroImage from './img/myimg.png';
import StarField from './Component/StarField';


function Home() {
    const heromain = useRef(null);
    const heroImageRef = useRef(null);
    const aboutSection = useRef(null);
    const skillsSection = useRef(null);
    const projectsSection = useRef(null);
    const contactSection = useRef(null);
    const projectRefs = useRef([]);
    const sectionRefs = useRef([]);


    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let bgImages = [];
        let requestId;
        let isMoving = false;
        const inertiaFactor = 0.05;

        const handleMouseMove = (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            if (!isMoving) {
                isMoving = true;
                updatePositions();
            }
        };

        const updatePositions = () => {
            bgImages.forEach((image, index) => {
                const speed = (index + 1) * 0.4;

                // Adjusting movement direction based on index
                const directionX = index % 2 === 0 ? 1 : -1;
                const directionY = index % 2 === 0 ? -1 : 1;

                const currentTransform = image.style.transform.match(/translate\(([^)]+)\)/);
                const [currentX, currentY] = currentTransform ? currentTransform[1].split(',').map(parseFloat) : [0, 0];

                const targetX = mouseX * speed * 100 * directionX;
                const targetY = mouseY * speed * 100 * directionY;

                const newX = currentX + (targetX - currentX) * inertiaFactor;
                const newY = currentY + (targetY - currentY) * inertiaFactor;

                image.style.transform = `translate(${newX}px, ${newY}px)`;
            });

            if (isMoving) {
                requestId = requestAnimationFrame(updatePositions);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Capture the initial position of each image
        bgImages = document.querySelectorAll('.bg-image');

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestId);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const heroTextLines = heromain.current.querySelectorAll('.fade-line');
            const windowHeight = window.innerHeight;
            const heroSectionPosition = heromain.current.getBoundingClientRect().top;
            const baseDelay = 1000; // Adjust the base delay as needed (in milliseconds)

            if (heroSectionPosition < windowHeight - 200) {
                heroTextLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.classList.add('fade-in');
                    }, baseDelay + index * 500); // Add the base delay to the index delay
                });
                setTimeout(() => {
                    heroImageRef.current.classList.add('fade-in');
                }, baseDelay + heroTextLines.length * 500); // Fade in the image after all text lines
            } else {
                heroTextLines.forEach((line) => {
                    line.classList.remove('fade-in');
                });
                heroImageRef.current.classList.remove('fade-in');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const sections = [heromain, aboutSection, skillsSection, projectsSection, contactSection];
            const windowHeight = window.innerHeight;

            sections.forEach((section) => {
                if (section.current) {
                    const sectionPosition = section.current.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 300) {
                        section.current.classList.add('fade-in');
                    } else {
                        section.current.classList.remove('fade-in');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            sectionRefs.current.forEach((sectionRef) => {
                if (sectionRef) {
                    const sectionPosition = sectionRef.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 100) {
                        sectionRef.classList.add('fade-up');
                    } else {
                        sectionRef.classList.remove('fade-up');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            projectRefs.current.forEach((projectRef) => {
                if (projectRef) {
                    const sectionPosition = projectRef.getBoundingClientRect().top;
                    if (sectionPosition < windowHeight - 100) {
                        projectRef.classList.add('fade-left');
                    } else {
                        projectRef.classList.remove('fade-left');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showSkillLists, setShowSkillLists] = useState(false);

    const toggleAllSkillLists = () => {
        setShowSkillLists(!showSkillLists);
    };

    return (
        <div>
            <StarField />
            <div>


                <section className="hero" id="home">
                    <div className="container">
                        <div className="row align-items-center hero-content">
                            <div className="col-lg-6 col-md-12 hero-text" ref={heromain}>
                                <p className="small fade-line">Hello, It's Me</p>
                                <h1>
                                    <div>
                                        <span className="fade-line big">Krishna Thisari </span>
                                        <span className="big fade-line glow-hero-text">Wijayawickrama</span>
                                    </div>
                                </h1>
                                <br />
                                <p className="fade-line">I'm a Computer Science Undergraduate.</p>


                            </div>
                            <div className="col-lg-6 col-md-12 hero-image" ref={heroImageRef}>
                                <img src={heroImage} alt="Your Image" />

                            </div>
                        </div>
                        {/* Background images */}
                        <img src="https://www.eskimoz.co.uk/wp-content/uploads/2022/08/video-corporate-un-outil-de-communication-aux-multiples-facettes-la-video-corporate-un-contenu-complexe-a-realiser-1120x1075.png" alt="" className="bg-image fade-line glow-image " />
                        <img src="https://www.eskimoz.co.uk/wp-content/uploads/2022/08/video-corporate-un-outil-de-communication-aux-multiples-facettes-la-video-corporate-un-contenu-complexe-a-realiser-1120x1075.png" alt="" className="bg-image fade-line glow-image " />

                    </div>
                </section>


                <section className="about-me" ref={aboutSection} id="about">
                    <div className="container">
                        <h1 className="fade-up">About Me</h1>
                        <div className="row about-me-content">
                            <div className="col-md-6 about-me-text fade-left">
                                <h2 style={{ color: '#16ffff', marginTop: '20px' }}>Who am I?</h2>
                                <br />
                                <p className="shine">
                                I am Wijayawickrama Krishna Thisari, a dedicated and accomplished final-year undergraduate specializing in Computer Science at the University of Kelaniya, Sri Lanka. My academic background includes a strong focus on Computer Science, Statistics, and Pure Mathematics, supported by a high cumulative GPA of 3.72/4.00. I have developed a robust skill set in programming languages such as Java, Python, C, and C#, as well as web technologies including HTML, CSS, and JavaScript. My experience extends to frameworks and tools like Spring Boot, Postman, and IntelliJ IDEA, and I am proficient in managing databases such as MySQL, Oracle, and MongoDB. I have actively participated in various projects, showcasing my capabilities in machine learning, deep learning, and full stack development. My professional journey is marked by several achievements, including being selected for the Dean's List at my university. Additionally, I hold certifications in web design and Python, and I have successfully completed numerous projects ranging from language translation systems to stock price prediction models.
                                    <center className='resume'>
                                        <a href={`${process.env.PUBLIC_URL}/kt.pdf`} download>
                                            <button className="button">
                                                <span className="button-content"><FontAwesomeIcon icon={faDownload} /> Get Resume</span>
                                            </button>
                                        </a>
                                    </center>
                                </p>

                            </div>
                            <div className="col-md-6 about-me-image fade-right">
                                <img src={aboutImage} alt="Profile Picture" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills" ref={skillsSection} id="skills">

                    <h1 className="fade-up">Skills

                    </h1>
                    <div class="skill-icons fade-up">
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=idea"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=react"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=bootstrap"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=mongodb"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=c"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=java"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=spring"></img>
                        </div>


                    </div>
                    <div class="skill-icons fade-up ">
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=git"></img>
                        </div>
                        

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=html"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=css"></img>
                        </div>
                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=php"></img>
                        </div>

                        <div class="skill shine">
                            <img src="https://skillicons.dev/icons?i=mysql"></img>
                        </div>
                        <div class="skill shine ">
                            <img src="https://skillicons.dev/icons?i=python"></img>
                        </div>


                    </div>

                </section>


                <section className="projects" ref={projectsSection} id="projects">
                    <h2 className="section-title fade-up">Projects
                        <div id="line_l" className="line"></div>
                    </h2>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[1] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={cleaning} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Online Bathiksaree  Website</h2>
                                                    <p>
                                                        This website is a group effort created for a online order bathik saree. As beginners in web development, we aimed to keep the project simple yet effective, focusing on learning and implementing fundamental HTML, CSS, JavaScript  and php  concepts.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Web Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=html,js,css,php" alt="Tools" />
                                            <a href="https://github.com/kl2554/Html-css-javascript-php.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[2] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={internship} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Authentication to tiles store website</h2>
                                                    <p>
                                                        This intuitive platform connects clients and tilws owner, companies, and stores,booking tiles,admin,register,login and payment. Built with React, Spring Boot, and php.it is group project.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Web Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=idea,react,bootstrap,mongodb" alt="Tools" />
                                            <a href="https://github.com/Dishu325/Group33.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[3] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={courier} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>online film ticket booking</h2>
                                                    <p>
                                                        This online ticket booking  System project aims to booking sheat for  watching film . The development and implementation of our  service application in Visual Studio represents a significant step forward in streamlining and enhancing the efficiency of our courier service operations.                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>.Net Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=vscode,cs,k,j" alt="Tools" />
                                            <a href="https://github.com/kl2554/visual-programming.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[4] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={Sinhala} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Sinhala character recognition system</h2>
                                                    <p>
                                                        This project is to create a Sinhala character recognition system using Convolutional Neural Networks (CNN).                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Deep Learning</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=py,tensorflow,bootfstrap,mondgodb" alt="Tools" />
                                            <a href="https://github.com/kl2554/Deep_Learning.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[5] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={stock} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>Stock price prediction system</h2>
                                                    <p>
                                                    Predict stock prices using LSTM Recurrent Neural Networks.                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Deep Learning</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=py,tensorflow,bootfstrap,mondgodb" alt="Tools" />
                                            <a href="https://github.com/kl2554/Deep_Learning.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project">
                                <section ref={(el) => (sectionRefs.current[6] = el)} className="project-section">
                                    <div className="project-content">

                                        <div className="hover-image-container">
                                            <img src={game} alt="Hover" className="image" />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h2>English to Sinhala translation system</h2>
                                                    <p>
                                                    Develop an English to Sinhala translation system using Transformer Neural Networks by
                                                    leveraging sequence-to-sequence models with attention mechanisms.  </p>

                                                </div>
                                            </div>
                                        </div>
                                        <p className='title'>Deep learning Project</p>
                                        <div className="tools">
                                            <img src="https://skillicons.dev/icons?i=godot,reafct,booftstrap,mongfodb" alt="Tools" />
                                            <a href="https://github.com/kl2554/Deep-Learning-Mini-Project-03.git" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white', marginTop: '10px' }} />
                                            </a>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="contact" ref={contactSection} id="contact">
                    <h1 className="fade-up">Contact Me</h1>
                    <div className="contact-content">
                        <div className="contact-details">
                            <div className="container " ref={(el) => (sectionRefs.current[7] = el)}>
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="mailto:krishnathisari2020@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon-lg" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://github.com/kl2554"><FontAwesomeIcon icon={faGithub} className="icon-lg" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/wijayawickrama-krishna-thisari-965079223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqmwraJSgROiy%2Bd1z1SbIpA%3D%3D/"><FontAwesomeIcon icon={faLinkedin} className="icon-lg" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </div>
    )
}

export default Home