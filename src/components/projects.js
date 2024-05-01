import React from 'react';
import {H1, H2, H3, H4, Link, Bold, Skill} from "./utils" ;


function ProjectItem(props) {
    return (
        <div className="container mx-auto py-4 text-left">
            <H3 text={<Link link={props.link} text={props.title} />} />
            <p>{props.abstract}</p>
            <Skill text={props.skill}/>
        </div>
    );
}

function Projects() {
  return (
    <div id="project">
      <H2 text="Projects"/>
      
      <ProjectItem
        title="Make It Move: Gif Meme Generator"
        link="https://docs.google.com/document/d/1rjbNmcNeu3hN_0vtRTOG5FE0QMAv1vqx_GSdMEWltJ8/edit?usp=sharing"
        abstract="A video generator that transforms still image memes into gif memes, pipelined with SOTA image captioning model, video2text diffusion model, and large language model, and finetuned with custom dataset collected by data scraping."
        skill="PyTorch / HuggingFace / Selenium"
      />

      <ProjectItem
        title="SQL Database with OCaml"
        link="https://github.com/fengyuli2002/camel_db"
        abstract="A SQL database management system (DBMS), including a SQL parser, an interpreter, an executer, and CSV loading/storing functionality."
        skill="OCaml / SQL / CSV"
      />


    </div>
  );
}

export default Projects;
