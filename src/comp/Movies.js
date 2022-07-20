import PropTypes from "prop-types";
import { ReactPropTypes } from "react";

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h4>{title}</h4>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li id={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
