import React from "react";
import { Link } from "react-router-dom";

export const UtilitySidebar = () => {
    return (
        <>
            <div className="utilities-side-bar">
                <Link to="/style-guide" className="utilities-flex-title w-inline-block"><img src="../images/Vectors-Wrapper_2.svg" loading="lazy" width="Auto" height="Auto" alt="" className="utilities-icon" />
                    <h4 className="no-wrap">Style Guide</h4>
                </Link>
                <Link to="/instructions" className="utilities-flex-title w-inline-block"><img src="../images/Vectors-Wrapper_3.svg" loading="lazy" width="Auto" height="Auto" alt="" className="utilities-icon" />
                    <h4 className="no-wrap">Instructions</h4>
                </Link>
                <Link to="/licenses" className="utilities-flex-title w-inline-block"><img src="../images/Vectors-Wrapper.svg" loading="lazy" width="Auto" height="Auto" alt="" className="utilities-icon" />
                    <h4 className="no-wrap">Licenses</h4>
                </Link>
                <Link to="/changelog" aria-current="page" className="utilities-flex-title w-inline-block w--current"><img src="../images/Vectors-Wrapper_1.svg" loading="lazy" width="Auto" height="Auto" alt="" className="utilities-icon" />
                    <h4 className="no-wrap">Changelog</h4>
                </Link>
            </div>
        </>
    )
}
