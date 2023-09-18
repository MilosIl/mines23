import Project from '../../Components/Project/Project';
import AnimateIn from '../../Hooks/AnimateIn';
import './projects.css';

const Projects: React.FC = () => {
  return (
    <AnimateIn
      from={{ opacity: 0, translate: '0 2rem' }}
      to={{ opacity: 1, translate: 'none' }}>
      <div id="projects">
        <h2>Projects</h2>
        <main className="project-section">
          <Project
            name={'Hair studio'}
            description={
              'Website that you can make a appointment for your hair treatment'
            }
            technologies={['React', 'Material UI', 'Express', 'MongoDb']}
            image={'nema slike'}
            links={'https://github.com/MilosIl/hair-salon'}
          />
          <Project
            name={'Favorite dog'}
            description={
              'Website where you can find information of breed dog and save them'
            }
            technologies={['Next.js', 'Tailwindcss']}
            image={'nema slike'}
            links={'https://github.com/MilosIl/doggo_favorite'}
          />
          <Project
            name={'Netflix'}
            description={'Clone of netflix, as a final project from Scrimba'}
            technologies={['React', 'Styled components', 'Express', 'Firebase']}
            image={'nema slike'}
            links={'https://github.com/MilosIl/netflix-clone'}
          />
        </main>
      </div>
    </AnimateIn>
  );
};

export default Projects;
