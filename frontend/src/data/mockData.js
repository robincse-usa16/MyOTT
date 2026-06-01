import DesktopBanner1 from "../assets/Images/lux.jpeg";
import mobileBanner1 from "../assets/Images/luxmobile.png";
import Typo from "../assets/Images/luxtypograpy.png";

import DesktopBanner2 from "../assets/Images/brokenlive.jpg";
import mobileBanner2 from "../assets/Images/brokenmobile.jpg";
import DesktopBanner3 from "../assets/Images/choitali.jpg";
import mobileBanner3 from "../assets/Images/choitali-mobile.jpg";
import DesktopBanner4 from "../assets/Images/Ajrobibar.png";
import mobileBanner4 from "../assets/Images/ajrobibarmobile.png";

console.log("DesktopBanner1", DesktopBanner1);
console.log("mobileBanner1", mobileBanner1);
console.log("Typo", Typo);
export const banners = [
  {
    id: 1,
    title: "Lux Superstar Grand Finale",
    type: "Thriller",
    category: "Action",
    desktopBanner: DesktopBanner1,
    mobileBanner: mobileBanner1,
    typography: Typo,
    contentId: 101,
  },
  {
    id: 2,
    title: "Broken Live",
    type: "Documentary",
    category: "Lifestyle",
    desktopBanner: DesktopBanner2,
    mobileBanner: mobileBanner2,
    typography: Typo,
    contentId: 101,
  },
  {
    id: 3,
    title: "Choitali",
    type: "Drama",
    category: "Romance",
    desktopBanner: DesktopBanner3,
    mobileBanner: mobileBanner3,
    typography: Typo,
    contentId: 101,
  },
  {
    id: 4,
    title: "Ajrobibar",
    type: "Comedy",
    category: "Entertainment",
    desktopBanner: DesktopBanner4,
    mobileBanner: mobileBanner4,
    typography: Typo,
    contentId: 101,
  },
];

export const getAllContents = () => {
  return banners.map((banner) => ({
    id: banner.contentId,
    title: banner.title,
    description: `${banner.title} Description`,
    poster: banner.mobileBanner,
    landscape: banner.desktopBanner,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  }));
};

export const getContentById = (id) => {
  return getAllContents().find((item) => item.id === Number(id));
};
