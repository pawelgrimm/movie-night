import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="list-body">
      <h3>Welcome to Movie Night!</h3>
      <p>Use the search to add some movies to your list.</p>
      <p>
        Once you're done, send the list to your friends. They will be able to
        vote on the movies you selected!
      </p>
      <p>
        When all the votes are in, the most favorable movie will be selected for
        your movie night!
      </p>
      <p>Enjoy!</p>
    </div>
  );
};

export default WelcomeMessage;
