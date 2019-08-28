import React from 'react';
import './Layout.css';

export default function Layout(props) {
    return (
        <div>
            <div className="Content">
                Toolbar, SideDrawer, Backdrop
            </div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
