import React from 'react';
import {H1, H2, H3, H4, Link, Bold, Skill} from "./utils" ;

function Teaching() {
    return (
        <div id="teaching">
            <H2 text="Teaching"/>
            
            <H3 text="Stanford University"/>
            <hr /> 
            <p> Upcoming!</p>
            {/* <ul> 
                <li></li>
            </ul>  */}

            <H3 text="Cornell University"/>
            <hr /> 
            <p> <Link text="Undergraduate Course Creator for ECornell" /> </p>
            <ul> 
                <li>CIS 537: Deep Learning and Neural Networks</li>
                <li>CIS 538: Generative AI and Transformer Models</li>
            </ul> 

            <p> Undergraduate Course Assistant for the Department of Computer Science </p>
            <ul> 
                <li>CS 4780: Introduction to Machine Learning</li>
                <li>CS 4820: Introduction to Algorithms</li>
                <li>CS 2800: Discrete Structures</li>
            </ul> 
        </div>
    );
}

export default Teaching;
