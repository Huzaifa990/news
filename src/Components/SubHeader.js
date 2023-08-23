import React from "react";
import { Link } from "react-router-dom";

export default function SubHeader(props) {
  return (
    <div>
      <div className="w3l-about-breadcrumb w3l-search-results py-5 text-center">
        <div className="container py-lg-4 py-md-3">
          <ul className="breadcrumbs-custom-path mb-sm-3 mb-2 text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <span
                className="fa fa-arrow-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              {props.linkName}{" "}
            </li>
          </ul>
          <h3 className="title-big">{props.headerName}</h3>
        </div>
      </div>
    </div>
  );
}
