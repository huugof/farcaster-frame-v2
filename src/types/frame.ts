/**
 * Types for Farcaster Frame v2
 */

export type FrameButtonType = "post" | "post_redirect" | "link" | "mint";

export interface FrameButton {
  /** Label for the button */
  label: string;
  /** Action type for the button */
  action: FrameButtonType;
  /** Target URL for the action */
  target?: string;
}

export interface FrameMetadata {
  /** Frame version - must be 'vNext' */
  version: "vNext";
  /** Image to display in the frame */
  image: string;
  /** Buttons to display in the frame */
  buttons: FrameButton[];
  /** Post URL for form submission */
  postUrl: string;
  /** Input text field configuration */
  input?: {
    text?: string;
  };
} 