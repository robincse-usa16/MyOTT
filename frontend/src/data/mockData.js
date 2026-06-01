import desktop1 from "../assets/Images/lux final BANNER.jpeg";
import mobile1 from "../assets/Images/LUX SUPER STAR  FINALE LOGO.png";
import  from "../assets/Images/horizantal1.png";

import Banner4 from "../assets/Images/horizantal2.jpg";

import Banner5 from "../assets/Images/brokenlive.jpg";

export const banners = [
  {
    id: 1,
    title: "lux super star finale",
    type: "Thriller",
    category: "Action",
    desktopBanner: Banner1,
    mobileBanner: mobileBanner1,
    typography: typography1,
    contentId: 101,
  },
  {
    id: 1,
    title: "Global Fan Round",
    type: "Sports",
    category: "Football",
    bannerImage: Banner3,
    posterImage: Banner2,
    contentId: 101,
  },
  {
    id: 1,
    title: "Global Fan Round",
    type: "Sports",
    category: "Football",
    bannerImage: Banner4,
    posterImage: Banner2,
    contentId: 101,
  },
  {
    id: 1,
    title: "Global Fan Round",
    type: "Sports",
    category: "Football",
    bannerImage: Banner5,
    posterImage: Banner2,
    contentId: 101,
  },
];
export const categories = [
  {
    id: 1,
    title: "Top 10",
    layoutType: "vertical",
    isTop10: true,
    contents: [
      {
        id: 101,
        title: "Dark City",
        description: "A mystery thriller from Bingme originals.",
        poster:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: 102,
        title: "Last Mission",
        description: "An action-packed mission story.",
        poster:
          "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 2,
    title: "Horizontal Banner Contents",
    layoutType: "horizontal",
    contents: [
      {
        id: 201,
        title: "The Lost Planet",
        description: "A sci-fi adventure beyond Earth.",
        poster:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: 202,
        title: "Battle Ground",
        description: "A war drama with emotional storytelling.",
        poster:
          "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1523207911345-32501502db22?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 3,
    title: "Other Category - Vertical",
    layoutType: "vertical",
    contents: [
      {
        id: 301,
        title: "Red Night",
        description: "A dark romantic thriller.",
        poster:
          "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: 302,
        title: "Silent Road",
        description: "A journey full of secrets.",
        poster:
          "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600",
        landscape:
          "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
];

export const getAllContents = () => {
  return categories.flatMap((category) => category.contents);
};

export const getContentById = (id) => {
  return getAllContents().find((item) => item.id === Number(id));
};
