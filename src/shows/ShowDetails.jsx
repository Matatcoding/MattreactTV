import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show) {
    return (
      <section className="show-details">
        <h2>No Show Selected</h2>
        <p>Please select a show to see details!</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        setSelectedEpisode={setSelectedEpisode}
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
