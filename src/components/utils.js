import React from "react";
import "./default.css";
// data import

export function H1(props) {
  return <p className="text-4xl dark:text-white font-mono">{props.text}</p>;
}

export function H2(props) {
  return (
    <p className="text-3xl dark:text-white font-mono font-semibold">
      {props.text}
    </p>
  );
}

export function H3(props) {
  return (
    <p className="text-2xl dark:text-white font-mono font-semibold">
      {props.text}
    </p>
  );
}

export function H4(props) {
  return <p className="text-1xl dark:text-white font-mono">{props.text}</p>;
}

export function Link(props) {
  return (
    <a className="underline text-blue hover:text-lightblue" href={props.href}>
      {props.text}
    </a>
  );
}

export function Bold(props) {
  return <p className="inline font-semibold">{props.text}</p>;
}

export function ResearchButton(props) {
  return (
    <a href={props.link}>
      <button
        type="button"
        className="py-0.5 px-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-white text-blue hover:bg-faintblue hover:text-darkblue disabled:opacity-50 disabled:pointer-events-none dark:bg-white"
      >
        {props.text}
      </button>
    </a>
  );
}

export function Skill(props) {
  return (
    <p className="text-left text-sm font-semibold text-darkblue">
      {props.text}
    </p>
  );
}

export function NavItem(props) {
  return (
    <a
      className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-blue hover:text-lightblue focus:outline-none focus:text-darkblue dark:text-white dark:focus:text-faintblue active"
      href={props.link}
      aria-current="page"
    >
      {props.text}
    </a>
  );
}
