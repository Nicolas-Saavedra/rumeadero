// Must always be a whole number. No verification, but better for readability
export type Integer = number;
// Must be a single word. Represents a tag for a post
export type Tag = string;
// Must be a valid image file url.
export type ImageUrl = string;
// Must be a valid url.
export type ResourceUrl = string;
// Represents a primary social media source
export type SocialMedia =
  | "discord"
  | "whatsapp"
  | "telegram"
  | "facebook"
  | "private";
// Simple GEOLocation
export type SimpleLocation = {
  lat: number;
  long: number;
};
