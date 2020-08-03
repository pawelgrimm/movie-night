import React from "react";
import InfoCard from "../../../components/InfoCard/InfoCard";
import VoterInfo from "../../../containers/Results/components/VoterInfo";

const VoteInfo = () => {
  return (
    <InfoCard title="Voting">
      <p>You can use this page to vote on movies you’d like to watch.</p>
      <p>
        Click on a movie to expand it, view additional details, and watch a
        trailer.
      </p>
      <p>
        Use the Thumbs Up and Thumbs Down buttons to vote! You can also choose
        to not vote on a movie.
      </p>
      <p>Click the Submit Vote button once you are finished.</p>
      <VoterInfo
        text="These people have already voted:"
        noResultsText="You are the first one to vote!"
      />
    </InfoCard>
  );
};

export default VoteInfo;
