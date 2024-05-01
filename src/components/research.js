import React from "react";
import {H1, H2, H3, H4, Link, Bold} from "./utils" ;

// util import
import {ResearchButton} from "./utils" ;

// data import
import EchoSpeechImg from "../data/EchoSpeech.png";


function ResearchItem(props) {
    return (
        <div className="container mx-auto py-4 flex">
            <div style={{ width: "15%", display: "flex", alignItems: "center" }}>
                <img className="object-cover inline-block px-4 py-4 w-full h-full" src={props.img} alt={props.altText} />
            </div>
            <div style={{ width: "85%" }}>
                <H3 text={props.title}/>
                <p>{props.abstract}</p>
                <div className="gap-x-1 flex">
                    <ResearchButton text="website" link={props.link} />
                    <ResearchButton text="pdf" link={props.pdf} />
                    <ResearchButton text="bibtex" link={props.bibtex} />
                </div>
            </div>
        </div>
    );
}

function Research() {
  return (
    <div id="research">
      <H2 text="Research"/>
      <p>
        My research work focus on Computer Vision and Generative Models. I am
        currently interested to explore improving the performance of autonomous
        driving algorithms with self-supervised methods of data-augmentation.{" "}
      </p>

      <ResearchItem
        title="EchoSpeech: Continuous Silent Speech Recognition on Minimally-obtrusive Eyewear Powered by Acoustic Sensing"
        abstract="A minimally-obtrusive silent speech interface (SSI) powered by low-power active acoustic sensing. Through echos of inaudible soundwaves, EchoSpeech captures subtle skin deformations caused by silent utterances and uses them to infer silent speech."
        img={EchoSpeechImg}
        altText="Image of the EchoSpeech glass frame prototype"
        link="https://dl.acm.org/doi/10.1145/3544548.3580801"
        pdf="https://ruidongzhang.com/files/papers/EchoSpeech_authors_version.pdf"
        bibtex="data/bib_EchoSpeech.bib"
      />

      <ResearchItem
        title="EchoSpeech: Continuous Silent Speech Recognition on Minimally-obtrusive Eyewear Powered by Acoustic Sensing"
        abstract="A minimally-obtrusive silent speech interface (SSI) powered by low-power active acoustic sensing. Through echos of inaudible soundwaves, EchoSpeech captures subtle skin deformations caused by silent utterances and uses them to infer silent speech."
        img={EchoSpeechImg}
        altText="Image of the EchoSpeech glass frame prototype"
        link="https://dl.acm.org/doi/10.1145/3544548.3580801"
        pdf="https://ruidongzhang.com/files/papers/EchoSpeech_authors_version.pdf"
        bibtex="data/bib_EchoSpeech.bib"
      />

      <ResearchItem
        title="EchoSpeech: Continuous Silent Speech Recognition on Minimally-obtrusive Eyewear Powered by Acoustic Sensing"
        abstract="A minimally-obtrusive silent speech interface (SSI) powered by low-power active acoustic sensing. Through echos of inaudible soundwaves, EchoSpeech captures subtle skin deformations caused by silent utterances and uses them to infer silent speech."
        img={EchoSpeechImg}
        altText="Image of the EchoSpeech glass frame prototype"
        link="https://dl.acm.org/doi/10.1145/3544548.3580801"
        pdf="https://ruidongzhang.com/files/papers/EchoSpeech_authors_version.pdf"
        bibtex="data/bib_EchoSpeech.bib"
      />
    </div>
  );
}

export default Research;
