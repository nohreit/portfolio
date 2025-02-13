import Image from "next/image"
import ProjectCard from "@/components/project-card";

const username: string = "Thierno Bah";
const github: string = "https://github.com/nohreit";
const linkedin: string = "https://www.linkedin.com/in/thiernobah07";
const email: string = "hierno.mah@gmail.com";
// const phone: string = "+1(917) 370-9485";
const picture: string | undefined = "/ThiernoBah.jpg?height=150&width=150";
const resume_link = "https://docs.google.com/document/d/1b8D4KnOnR7wgz8sIx69_k5mPHTj1dJ3ENcXemysFctk/edit?usp=sharing";
const aboutMeParagraph = `Hey there! I'm a passionate full-stack developer with two years of experience building web applications. I specialize 
                            in JavaScript, React, Node.js, and Java, crafting efficient, scalable, and user-friendly solutions. Beyond web development, 
                            I'm diving into the world of Artificial Intelligence—learning the fundamentals now but aiming to train my own Large Language 
                            Model in the future.

                            I love solving complex problems and turning ideas into reality through code. Always curious, always learning!`;

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>


const Mail = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>);
}

const Github = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>);
}

const Linkedin = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>);
}

const Home = () => {
    return (
        <div className="mx-auto min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">{username}</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#about" className="text-gray-600 hover:text-gray-800">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-600 hover:text-gray-800">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 hover:text-gray-800">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Profile Section */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Image
                        src={picture || "/person-circle.svg?height=150&width=150"}
                        alt={`${username}_picture`}
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-4xl font-bold mb-4">{username}</h2>
                    <p className="text-xl mb-8">Full Stack Developer</p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href={resume_link}
                            className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">About Me</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-gray-600 mb-4">{aboutMeParagraph}</p>
                        {/* <p className="text-gray-600">
                        </p> */}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            title="E-commerce Platform"
                            description="A full-featured e-commerce platform built with React and Node.js"
                            imageUrl="/placeholder.svg?height=200&width=300"
                            projectUrl="#"
                        />
                        <ProjectCard
                            title="Task Management App"
                            description="A collaborative task management application using Vue.js and Firebase"
                            imageUrl="/placeholder.svg?height=200&width=300"
                            projectUrl="#"
                        />
                        <ProjectCard
                            title="Weather Forecast App"
                            description="A weather forecast application using React Native and OpenWeatherMap API"
                            imageUrl="/placeholder.svg?height=200&width=300"
                            projectUrl="#"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Get In Touch</h2>
                    <div className="flex justify-center space-x-6">
                        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                            <a href={`mailto:${email}`} className="text-gray-600 hover:text-gray-800" title={email}>
                                <Mail />
                            </a>
                            <a href={github} target="_blank" className="text-gray-600 hover:text-gray-800">
                                <Github />
                            </a>
                            <a href={linkedin} className="text-gray-600 hover:text-gray-800">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 {username}. All right s reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home;

