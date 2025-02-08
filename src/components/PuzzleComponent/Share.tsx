import React from "react";
import { ResetIcon } from "../../assets/Icons";

const Share: React.FC<{ puzzleId: string }> = ({ puzzleId }) => {
  const shareUrl = `https://worstmovepossible.com/#/puzzles/${puzzleId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="puzzle-navigation share-container">
      <h3>Share Puzzle</h3>
      <div className="share-buttons">
        <button
          className="control-button"
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
        >
          Facebook
        </button>
        <button
          className="control-button"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
        >
          Twitter
        </button>
        <button
          className="control-button"
          onClick={() =>
            window.open(
              `https://api.whatsapp.com/send?text=${encodeURIComponent(
                `Check out this chess puzzle: ${shareUrl}`
              )}`,
              "_blank"
            )
          }
        >
          WhatsApp
        </button>
        <button className="control-button" onClick={handleCopy}>
          <ResetIcon /> Copy URL
        </button>
      </div>
    </div>
  );
};

export default Share;
