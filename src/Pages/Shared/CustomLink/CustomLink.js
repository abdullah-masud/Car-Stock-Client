import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? '#144e5f' : 'black', textDecoration: match ? "none" : "none", fontWeight: match ? "bold" : "normal", borderBottom: match ? "2px solid rgb(33, 30, 71)" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomLink;