import './Skills.css'
import Skill from './Skill//Skill'
import nodejs from '../../assets/images/nodejs.jpg'
import angular from '../../assets/images/angular.jpg'
import react from '../../assets/images/react.jpg'
import html from '../../assets/images/html.jpg'
import css from '../../assets/images/css.jpg'
import javascript from '../../assets/images/javascript.jpg'
import typescript from '../../assets/images/typescript.jpg'
import flutter from '../../assets/images/flutter.jpg'
import mongodb from '../../assets/images/mongodb.jpg'
import mysql from '../../assets/images/mysql.jpg'
import postgresql from '../../assets/images/postgresql.jpg'
import sublime from '../../assets/images/sublime.jpg'
import vs from '../../assets/images/vs.jpg'
import vscode from '../../assets/images/vscode.jpg'
import apigee from '../../assets/images/apigee.jpg'
import concourse from '../../assets/images/concourse.jpg'
import heroku from '../../assets/images/heroku.jpg'
import jira from '../../assets/images/jira.jpg'
import pcf from '../../assets/images/pcf.jpg'
import servicenow from '../../assets/images/servicenow.jpg'
import bash from '../../assets/images/bash.jpg'
import cpp from '../../assets/images/cpp.jpg'
import git from '../../assets/images/git.jpg'
import java from '../../assets/images/java.jpg'
import linux from '../../assets/images/linux.jpg'
import photoshop from '../../assets/images/photoshop.jpg'
import { useState } from 'react'

const Skills = () => {
    const skills = [
        { text: 'Node.js', image: nodejs },
        { text: 'Angular', image: angular },
        { text: 'React', image: react },
        { text: 'HTML', image: html },
        { text: 'CSS', image: css },
        { text: 'JavaScript', image: javascript },
        { text: 'TypeScript', image: typescript },
        { text: 'Flutter', image: flutter },
        { text: 'MongoDB', image: mongodb },
        { text: 'MySQL', image: mysql },
        { text: 'PostgreSQL', image: postgresql },
        { text: 'Sublime Text', image: sublime },
        { text: 'Microsoft Visual Studio', image: vs },
        { text: 'Visual Studio Code', image: vscode },
        { text: 'Apigee API Management', image: apigee },
        { text: 'Concourse CI', image: concourse },
        { text: 'Heroku', image: heroku },
        { text: 'Jira', image: jira },
        { text: 'Pivotal Cloud Foundry', image: pcf },
        { text: 'ServiceNOW', image: servicenow },
        { text: 'Bash Scripting', image: bash },
        { text: 'C++', image: cpp },
        { text: 'Git', image: git },
        { text: 'Java', image: java },
        { text: 'Linux/UNIX', image: linux },
        { text: 'Adobe Photoshop', image: photoshop }
    ]
    const [wiggleIndex, setWiggleIndex] = useState(0)
    const sequence = [0, 2, 4, 9, 20, 16, 3, 19, 12, 18, 24, 22, 5, 7, 15, 10, 23, 21, 1, 17, 6, 8, 11, 13, 25, 14] // Hardcoded as Math.random glitches out for some reason
    const timeOuts = [1000, 2000, 3000, 4000, 5000, 5000, 5000, 4000, 3000, 2000, 3000, 4000, 5000, 2000] // As above

    setTimeout(() => {
        setWiggleIndex(wiggleIndex < skills.length - 1 ? wiggleIndex + 1 : 0)
    }, timeOuts[wiggleIndex % timeOuts.length])

    return (
        <div className="skillGrid">
            {skills.map((skill, index) => <Skill alt={skill.text} image={skill.image} wiggle={index === sequence[wiggleIndex]}></Skill>)}
        </div>
    );
};

export default Skills;