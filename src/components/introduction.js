import React from "react";
import "./default.css";
import { H1, H2, H3, H4, Link, Bold} from "./utils";
import Headshot from "../data/YolandaWang.jpg";

function Introduction(props) {
  return (
    <div id="introduction">
      <H1 text={props.name} />
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <p>
            Hello, I'm {props.name}, currently pursuing my Bachelor's in
            Computer Science at Cornell University. I really enjoy deep learning
            and I am passionate about automating tedious tasks with
            self-supervised learning. At Cornell, I had the pleasure to work
            with
            <Link
              href="https://www.cs.cornell.edu/~kilian/"
              text="prof. Kilian Weinberger"
            />{" "}
            and{" "}
            <Link
              href="https://www.cs.cornell.edu/~bharathh/"
              text="prof. Bharath Hariharan"
            />{" "}
            on computer vision and generative modeling research. Prior to this,
            I delved into Human-Computer Interaction (HCI) at{" "}
            <Link href="https://www.scifilab.org/" text="the SciFi lab" />. My
            research is supported by the Bowers CIS Undergraduate Research
            Experience Grant and the Student Assembly Summer Experience Grant.{" "}
            <Bold text="I am looking for Machine Learning internships for Summer 2024, June 1st - August 30th. Feel free to shoot me an email if you would like to chat!" />
            {/* This summer, I am working at <Link href="https://www.moloco.com/" text="Moloco" /> on recommendation system for e-commerce platforms. Feel free to shoot me an email if you would like to chat! */}
          </p>
        </div>
        <div style={{ width: "40%" }}>
          <img
            className="object-cover inline-block size-[300px] rounded-full"
            src={Headshot}
            alt="A headshot of Yolanda Wang"
          />
          {/* <img src={Headshot} alt="A headshot of Yolanda Wang" /> */}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
