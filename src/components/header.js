import React from "react";
import "./default.css";
import { NavItem } from "./utils";


function Header() {
    return (
        // <p> Hi!</p>
        // "sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm"
        <div className="sticky top-0 border-b-2 bg-white border-blue">
            <nav className="-mb-0.5 flex space-x-6">
                <NavItem text="Home" link="#introduction" />
                <NavItem text="Research" link="#research" />
                <NavItem text="Project" link="#project" />
                <NavItem text="Teaching" link="#teaching" />
            </nav>
        </div>
    );
}

export default Header;
