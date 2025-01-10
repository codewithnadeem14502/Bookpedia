import React from "react";
import clipboard from "clipboard-copy";

function CopyToClipboardButton({ BookName }) {
  const textToCopy = BookName;

  const handleCopyToClipboard = async () => {
    try {
      await clipboard(textToCopy);
      alert(`Book Name:${BookName} is copied to your clipboard!`);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <div className="text-center">
      <button onClick={handleCopyToClipboard}>Go Now</button>
    </div>
  );
}

export default CopyToClipboardButton;
