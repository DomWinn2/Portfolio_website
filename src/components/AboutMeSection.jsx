import { Code, User, Briefcase } from "lucide-react";

export const AboutMeSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer and Tech Creator</h3>

                        <p className="text-muted-foreground">
                            I’m a self-driven developer with a love for building modern, responsive, and
                            user-friendly applications. My journey started with tinkering on small personal
                            projects, and it’s evolved into crafting full-stack solutions that solve real-world
                            problems. Whether I’m building a sleek UI in React or designing a robust backend
                            API, I’m always focused on clean code, performance, and user experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch </a>
                            <a
                                href="./public/about/DominickWinningham-SE.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tranistion-colors duration-300 card-hover"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="gird grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Experienced in building responsive websites and full-stack applications
                                        using React, Next.js, Node.js, and MongoDB — with a focus on performance,
                                        accessibility, and maintainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        Skilled in crafting intuitive interfaces with a balance of aesthetics and
                                        usability. I use Figma and Tailwind CSS to create designs that enhance
                                        the overall user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Projects </h4>
                                    <p className="text-muted-foreground">
                                        From personal apps to collaborative group projects, I’ve built solutions
                                        for task management, e-commerce, and data visualization. Each project
                                        has sharpened my skills and taught me new tools and techniques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};