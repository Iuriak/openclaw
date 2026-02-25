/**
 * Open external links with noopener,noreferrer. Used by chat/UI to avoid
 * window.opener and referrer leakage.
 */

// Type assertion: DOM types may expect literal union for windowFeatures.
const FEATURES = "noopener,noreferrer" as "noopener" | "noreferrer";

export function openExternalLink(url: string): Window | null {
  const w = window.open(url, "_blank", FEATURES);
  if (w) {
    w.opener = null;
  }
  return w;
}

export function setRelNoOpener(el: Element): void {
  el.setAttribute("rel", FEATURES);
}
