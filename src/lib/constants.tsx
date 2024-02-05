import {
  BookmarkIcon,
  GithubIcon,
  LinkedinIcon,
  NotebookTextIcon,
  PencilLineIcon,
  SparkleIcon,
  TwitterIcon,
  Wand2,
  Wand2Icon,
} from "lucide-react";

export const SCROLL_AREA_ID = "scroll-area";

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <SparkleIcon size={16} />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <PencilLineIcon size={16} />,
  },
  {
    href: "/stack",
    label: "Stack",
    icon: <Wand2Icon size={16} />,
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: <BookmarkIcon size={16} />,
  },
  {
    href: "/notes",
    label: "Notes",
    icon: <NotebookTextIcon size={16} />,
  },
];

export const PROFILES = [
  {
    label: "Twitter",
    href: "https://twitter.com/Linmo_1",
    icon: <TwitterIcon size={16} />,
  },
  {
    label: "Github",
    href: "https://github.com/appleshell",
    icon: <GithubIcon size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pansen-lyu-878120283/",
    icon: <LinkedinIcon size={16} />,
  },
];
