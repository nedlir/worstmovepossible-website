import React from "react";
import "./share-button.css";

interface ShareButtonProps {
  platform: string;
  icon: React.ComponentType<{ width?: number; height?: number }>;
  shareUrl: string;
  shareText: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  platform,
  icon: Icon,
  shareUrl,
  shareText,
}) => {
  const getShareUrl = () => {
    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareText)}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
      case "reddit":
        return `https://www.reddit.com/submit?url=${encodeURIComponent(
          shareUrl
        )}&title=${encodeURIComponent("Worst Move Possible Chess Puzzle")}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareText
        )}`;
      case "telegram":
        return `https://t.me/share/url?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent("Check out this chess puzzle")}`;
      case "discord":
        return `https://discord.com/channels/@me?text=${encodeURIComponent(
          shareText
        )}`;
      default:
        return "";
    }
  };

  const handleClick = async () => {
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("URL copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    } else {
      window.open(getShareUrl(), "_blank");
    }
  };

  return (
    <button className={`share-button ${platform}`} onClick={handleClick}>
      <Icon width={16} height={16} />
      <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
    </button>
  );
};

export default ShareButton;
