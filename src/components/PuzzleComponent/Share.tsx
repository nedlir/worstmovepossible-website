import React, { useState } from "react";

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
import ShareButton from "./ShareButton";

const Share: React.FC<{ puzzleId: string }> = ({ puzzleId }) => {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const shareUrl = `https://worstmovepossible.com/#/puzzles/${puzzleId}`;
  const shareText = `Check out this chess puzzle: ${shareUrl}`;

  const platforms = [
    { platform: "facebook", icon: FacebookIcon },
    { platform: "twitter", icon: TwitterIcon },
    { platform: "linkedin", icon: LinkedInIcon },
    { platform: "reddit", icon: RedditIcon },
    { platform: "whatsapp", icon: WhatsAppIcon },
    { platform: "telegram", icon: TelegramIcon },
    { platform: "discord", icon: DiscordIcon },
    { platform: "copy", icon: CopyIcon },
  ];

  return (
    <div className="share-container">
      <button
        className="share-header"
        onClick={() => setIsShareVisible(!isShareVisible)}
        aria-expanded={isShareVisible}
      >
        <h3>Share Your Victory ⚔️</h3>
        <span className={`chevron ${isShareVisible ? "open" : ""}`}></span>
      </button>

      <div className={`share-buttons ${isShareVisible ? "visible" : ""}`}>
        {platforms.map(({ platform, icon }) => (
          <ShareButton
            key={platform}
            platform={platform}
            icon={icon}
            shareUrl={shareUrl}
            shareText={shareText}
          />
        ))}
      </div>
    </div>
  );
};

export default Share;
