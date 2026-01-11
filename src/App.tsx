import { useState, useEffect } from 'react';
import { HeadNode } from './components/HeadNode';
import { Node } from './components/Node';
import { NullNode } from './components/NullNode';
import { SectionContent } from './components/SectionContent';
import { IndianFlag } from './components/IndianFlag';

function App() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background text-primary p-4 selection:bg-accent selection:text-surface overflow-x-hidden">
            {/* Subtle grid background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Flag Component */}
            <IndianFlag />

            <div className="max-w-4xl mx-auto relative z-10">
                <HeadNode />

                {/* About Section */}
                <Node index={1} id="about">
                    <SectionContent title="About Me">
                        <p className="mb-4">
                            I am a Computer Science undergraduate with a focus on backend development, automation, and system integration.
                            My expertise lies in building robust systems using Rust, Python, Flask, and Java.
                            I have experience with IEEE publications and hands-on internships.
                        </p>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">Education</h3>
                            <div className="text-secondary">
                                <p className="font-medium text-primary">B.Tech in Computer Science and Engineering</p>
                                <p className="text-sm">Dayananda Sagar University, Bengaluru | 2021 - 2025</p>
                                <p className="text-sm text-accent">CGPA: 7.91/10.0</p>
                            </div>
                        </div>
                    </SectionContent>
                </Node>

                {/* Skills Section (Node 2) */}
                <Node index={2} id="skills">
                    <SectionContent title="Technical Skills">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-accent text-sm font-mono mb-2">LANGUAGES</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Rust', 'Java'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-surface rounded-full text-sm border border-secondary/20">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-accent text-sm font-mono mb-2">DATABASES & FRAMEWORKS</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['MySQL', 'MongoDB', 'SQLite', 'Flask', 'Vaadin'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-surface rounded-full text-sm border border-secondary/20">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Node>

                {/* Projects Section (Node 3 - Reordered, was Experience) */}
                <Node index={3} id="projects">
                    <SectionContent title="Projects">
                        <div className="grid gap-6 md:grid-cols-2">
                            <a href="https://github.com/shreyas-sridhar" target="_blank" rel="noreferrer" className="group cursor-pointer block border border-transparent hover:border-surface/50 rounded-lg p-4 -m-4 transition-all">
                                <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors flex items-center justify-between">
                                    Backend Automation Suite
                                    <span className="text-xs border border-accent/50 rounded px-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                </h3>
                                <p className="text-sm text-secondary mt-1">
                                    Automated backend workflows using Python and Flask, integrating with various third-party APIs.
                                </p>
                            </a>
                            <a href="https://github.com/shreyas-sridhar" target="_blank" rel="noreferrer" className="group cursor-pointer block border border-transparent hover:border-surface/50 rounded-lg p-4 -m-4 transition-all">
                                <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors flex items-center justify-between">
                                    Rust System Integrator
                                    <span className="text-xs border border-accent/50 rounded px-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                </h3>
                                <p className="text-sm text-secondary mt-1">
                                    High-performance system integration tool built with Rust for seamless data processing.
                                </p>
                            </a>
                        </div>
                    </SectionContent>
                </Node>

                {/* Experience Section (Node 4 - Moved Down) */}
                <Node index={4} id="experience">
                    <SectionContent title="Experience">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium text-white">Internship Experience</h3>
                                <div className="text-accent font-mono text-sm mb-2">Previous Roles</div>
                                <p className="text-secondary/80">
                                    Gained hands-on experience in backend development and system architecture during internships.
                                    Contributed to efficient codebases and learned industry standard practices.
                                </p>
                            </div>
                        </div>
                    </SectionContent>
                </Node>

                {/* Contact Section */}
                <Node index={5} id="contact" isLast={true}>
                    <SectionContent title="Contact">
                        <p className="mb-6">
                            I'm open to opportunities in Backend Development and Systems Engineering.
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a href="mailto:shreyassridhar710@gmail.com" className="flex items-center space-x-3 text-accent hover:text-white transition-colors">
                                <span className="font-mono">Email:</span>
                                <span>shreyassridhar710@gmail.com</span>
                            </a>
                            <a href="https://github.com/shreyas-sridhar" className="flex items-center space-x-3 text-accent hover:text-white transition-colors" target="_blank" rel="noreferrer">
                                <span className="font-mono">GitHub:</span>
                                <span>github.com/shreyas-sridhar</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shreyas-sridhar7/" className="flex items-center space-x-3 text-accent hover:text-white transition-colors" target="_blank" rel="noreferrer">
                                <span className="font-mono">LinkedIn:</span>
                                <span>linkedin.com/in/shreyas-sridhar7</span>
                            </a>
                        </div>
                    </SectionContent>
                </Node>

                <NullNode />
            </div>
        </div>
    )
}

export default App
