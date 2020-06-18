// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window?.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID as string, {
    page_path: url,
  });
};

type EventParams = {
  action: string;
  category: string;
  label: string;
  value: number;
  nonInteraction?: boolean;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}: EventParams) => {
  window?.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    non_interaction: nonInteraction,
  });
};
