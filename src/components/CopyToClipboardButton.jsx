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
      <button
        onClick={handleCopyToClipboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Now
      </button>
    </div>
  );
}

export default CopyToClipboardButton;
