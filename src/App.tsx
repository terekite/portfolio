import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";

function App() {

  return (
    <main className="container">
      <header className="hero">
        <h1>Omar Ali</h1>
        <p className="tagline">
          Berkeley EECS Grad | Former SWE @ LLNL
        </p>
      </header>
      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
