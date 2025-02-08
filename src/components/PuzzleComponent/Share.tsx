import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsAppIcon,
  CopyIcon,
  LinkedInIcon,
  RedditIcon,
  TelegramIcon,
  DiscordIcon,
} from "../../assets/Icons";

const Share: React.FC<{ puzzleId: string }> = ({ puzzleId }) => {
  const shareUrl = `https://worstmovepossible.com/#/puzzles/${puzzleId}`;
  const shareText = `Check out this chess puzzle: ${shareUrl}`;

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
      <h3>Share Your Victory ⚔️</h3>
      <div className="share-buttons">
        <button
          className="share-button facebook"
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
        >
          <FacebookIcon width={16} height={16} />
          <span>Facebook</span>
        </button>

        <button
          className="share-button twitter"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(shareText)}`,
              "_blank"
            )
          }
        >
          <TwitterIcon width={16} height={16} />
          <span>Twitter</span>
        </button>

        <button
          className="share-button linkedin"
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
        >
          <LinkedInIcon width={16} height={16} />
          <span>LinkedIn</span>
        </button>

        <button
          className="share-button reddit"
          onClick={() =>
            window.open(
              `https://www.reddit.com/submit?url=${encodeURIComponent(
                shareUrl
              )}&title=${encodeURIComponent(
                "Worst Move Possible Chess Puzzle"
              )}`,
              "_blank"
            )
          }
        >
          <RedditIcon width={18} height={18} />
          <span>Reddit</span>
        </button>

        <button
          className="share-button whatsapp"
          onClick={() =>
            window.open(
              `https://api.whatsapp.com/send?text=${encodeURIComponent(
                shareText
              )}`,
              "_blank"
            )
          }
        >
          <WhatsAppIcon width={16} height={16} />
          <span>WhatsApp</span>
        </button>

        <button
          className="share-button telegram"
          onClick={() =>
            window.open(
              `https://t.me/share/url?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent("Check out this chess puzzle")}`,
              "_blank"
            )
          }
        >
          <TelegramIcon width={16} height={16} />
          <span>Telegram</span>
        </button>

        <button
          className="share-button discord"
          onClick={() =>
            window.open(
              `https://discord.com/channels/@me?text=${encodeURIComponent(
                shareText
              )}`,
              "_blank"
            )
          }
        >
          <DiscordIcon width={16} height={16} />
          <span>Discord</span>
        </button>

        <button className="share-button copy" onClick={handleCopy}>
          <CopyIcon width={16} height={16} />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default Share;
