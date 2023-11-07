import Image from "next/image";
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
    title: "Blog1",
    date: "October 21, 2023",
    description: "This is my first blog",
    slugURL: "blog1",
    image: riceimage, 
  },
    {
      title: "Blog2",
      date: "October 21, 2023",
      description: "This is my second blog",
      slugURL: "blog2",
      image: phoimage,
    },
  ];

  export default blogs;

  