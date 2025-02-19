"use client";
import { useState } from "react";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

type Props = {
  copyText?: string;
};
export function ClipboardCopy({ copyText }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string = "") {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {copyText ? (
        <button className={``} onClick={handleCopyClick}>
          {isCopied ? (
              <CheckIcon className='size-4'/>
          ) : (
            <ClipboardDocumentIcon className='size-4'/>
          )}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
