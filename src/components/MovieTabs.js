import React from "react";

const MovieTabs = ({
                       sort_by,
                       updatePage
                   }) => {
    return (<ul className="tabs nav nav-pills">
        <li className="nav-item">
            <div onClick={() => updatePage("popular.desc")}
                 className={`nav-link ${sort_by === "popular.desc" && "active"}`}>
                Popular
            </div>
        </li>
        <li className="nav-item">
            <div onClick={() => updatePage("revenue.desc")}
                 className={`nav-link ${sort_by === "revenue.desc" && "active"}`}>
                Revenue
            </div>
        </li>
        <li className="nav-item">
            <div onClick={() => updatePage("vote_average.desc")}
                 className={`nav-link ${sort_by === "vote_average.desc" && "active"}`}>
                Best average
            </div>
        </li>
    </ul>)
};

export default MovieTabs;