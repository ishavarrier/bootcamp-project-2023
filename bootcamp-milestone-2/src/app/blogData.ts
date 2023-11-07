import Image, { StaticImageData } from "next/image";
import riceimage from './images/rice.png'
import phoimage from './images/pho.jpg'

export interface Blog {
  title: string;
  date: string;
  description: string;
  slugURL: string;
  image: StaticImageData; 
}

const blogs: Blog[] = [
  {
    title: "This is my Blog 1",
    date: "October 21, 2023",
    description: "This is my first blog. Here's a picture of some rice I made.",
    slugURL: "blog1",
    image: riceimage, 
  },
    {
      title: "Blog2",
      date: "October 21, 2023",
      description: "This is my second blog. Here's a picture of this awesome pho from Downtown SLO",
      slugURL: "blog2",
      image: phoimage,
    },
  ];

  export default blogs;

  