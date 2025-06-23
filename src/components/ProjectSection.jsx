
const projects = [
    {
        id:1,
        title: "title1",
        description: "description",
        image: "image path",
        tags: ["skills for project"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id:2,
        title: "title2",
        description: "description",
        image: "image path",
        tags: ["skills for project"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id:3,
        title: "title3",
        description: "description",
        image: "image path",
        tags: ["skills for project"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-aauto">
                    Something Here
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((projects, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden"> 
                                <img /> 
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};