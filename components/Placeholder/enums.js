import NotificationSvg from "./notification";
import ProjectSvg from "./project";

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const VARIANTS = {
  NOTIFICATION: "notification",
  PROJECT: "project",
};

export const ICONS = {
  [VARIANTS.NOTIFICATION]: NotificationSvg,
  [VARIANTS.PROJECT]: ProjectSvg,
};

export default {
  SIZE,
  VARIANTS,
  ICONS,
};
