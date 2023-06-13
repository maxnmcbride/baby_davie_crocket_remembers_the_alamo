import placeholder from '../media/placeholder.png';
import TechStack from './About_Comp/TechStack';
import Team from './About_Comp/Team';

function About() {

    return ( 
        <>
            <h1>ABOUT THE PROJECT PAGE DUMMY</h1>
            <img id='about-page-banner' src={placeholder} alt='park prowler banner'/>
            <section> 
                <h1>What is Park Prowler?</h1>
                <p>Whos-a-whats-it is a cool person and they do... Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
            </section>
            <section id='tech-stack-parent-section'>
                <h1>Tech Stack</h1>
                <section id='tech-stack-icon-section'>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react icon'/>
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt='ruby icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt='rails icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" alt='sqlite icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html5 icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='css3 icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github logo' />
                    </div>   
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm icon' />
                    </div>
                    <div className='tech-stack-divs'>
                        <TechStack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt='visual studio code icon' />  
                    </div>      
                </section>
            </section>
            <section>
                <h1>Meet The Prowler Team!</h1>
                <section>
                    <Team name='' src='' alt='' />
                    <Team name='' src='' alt='' />
                    <Team name='' src='' alt='' />
                    <Team name='' src='' alt='' />
                    <Team name='' src='' alt='' />
                </section>
            </section>
            <hr></hr>
            <section>
                {}
            </section>
        </>
     );
    }
export default About;