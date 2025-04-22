import { Link } from 'react-router-dom';
import React from "react";

export const MainPage = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/one">Page One</Link>
                </li>
                <li>
                    <Link to="/two">Page Two</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
;