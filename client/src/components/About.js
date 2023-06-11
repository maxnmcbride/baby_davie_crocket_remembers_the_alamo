import { useState } from 'react';

import placeholder from '../media/placeholder.png';
import TechStack from './About_Comp/TechStack';
import Team from './About_Comp/Team';
import MemberDetails from './About_Comp/MemberDetails';

import aaron_full from '../media/aaron_full.jpg';
import aaron_circle from '../media/aaron_circle.png';
import leah_full from '../media/leah_full.jpg';
import leah_circle from '../media/leah_circle.png';
import max_full from '../media/max_full.jpg';
import max_circle from '../media/max_circle.png';
import keila_ph from '../media/keila_ph.jpg';
import keila_circle from '../media/keila_circle.png';
import lindsay_ph from '../media/lindsay_ph.jpg';
import lindsay_circle from '../media/lindsay_circle.png';

function About() {

    const prowlerPeople = [ {
        id: 1,
        name: 'Leah Cardoz',
        img_circle: leah_circle,
        img_full: leah_full,
        alt_title: 'leah cardoz',
        bio: 'Leah is a full stack software engineer based in Brooklyn, NY. They love going to concerts, exploring the great outdoors, and spending quality time with the homies :)',
        linkedin: '',
        github: '',
        medium: '',
        other_url: '',
        }, {
        id: 2,
        name: 'Aaron David',
        img_circle: aaron_circle,
        img_full: aaron_full,
        alt_title: 'aaron david',
        bio: "Aaron David is a Full-Stack Software Engineer with programming experience centered around React.js and Ruby on Rails based web-development. His professional experience is rooted in Art & Design and Production Management. After 5 years as a Screen Printer and Manager he switched gears and joined the Flatiron School's Software Engineering Program. He's currently seeking an opportunity to tie his background in art and creative problem-solving with his new found skills in software engineering.",
        linkedin: '',
        github: '',
        medium: '',
        other_url: '',
        }, {
        id: 3,
        name: 'Keila Lopez',
        img_circle: keila_circle,
        img_full: keila_ph,
        alt_title: 'keila lopez',
        bio: '',
        linkedin: '',
        github: '',
        medium: '',
        other_url: '',
        }, {
        id: 4,
        name: 'Max McBride',
        img_circle: max_circle,
        img_full: max_full,
        alt_title: 'max mcbride',
        bio: 'Max McBride is a Philadelphia based musician, coder, printmaker, birder, asshole about town.',
        linkedin: '',
        github: '',
        medium: '',
        other_url: '',
        }, {
        id: 5,
        name: 'Lindsay Taylor',
        img_circle: lindsay_circle,
        img_full: lindsay_ph,
        alt_title: 'lindsay taylor',
        bio: '',
        linkedin: '',
        github: '',
        medium: '',
        other_url: '',
        }   
    ];

    const iconArray = [ 
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            alt:'html5 icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            alt:'css3 icon'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
            alt: 'react icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt:'javascript icon' 
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg",
            alt:'ruby icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
            alt:'rails icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
            alt:'sqlite icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            alt:'figma icon' 
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
            alt:'github logo'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
            alt:'npm icon'
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
            alt:'visual studio code icon'
        }

    ];

    const [showAbout, setShowAbout] = useState(false)

    const handleProwlerClick = () => {
        setShowAbout(!showAbout);
        // console.log('clicking');
    };


    return ( 
        <>
            <h1>ABOUT THE PROJECT PAGE DUMMY</h1>
            <img id='about-page-banner' src={placeholder} alt='park prowler banner'/>
            <section id='about-pp-parent-section'>
                <div id='about-pp-header-div'>
                    <h1>What is Park Prowler?</h1>
                </div> 
                <div id='about-paragraph-div'>
                    <p>Whos-a-whats-it is a cool person and they do... Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                </div>
            </section>
            <section id='tech-stack-parent-section'>
                <h1 id='tech-stack-title'>Tech Stack</h1>
                <section>
                    <TechStack icons={iconArray}/>
                </section>
            </section>
            <section>
                <h1 id='meet-prowlers-title'>Meet The Prowler Team!</h1>
                <section>
                    <Team prowlerPeople={prowlerPeople} clickFn={handleProwlerClick}/>
                </section>
            </section>
            <hr></hr>
            <section>
                {showAbout ? <MemberDetails /> : null}
            </section>
        </>
     );
}

export default About;