import Image from "next/image";
export interface Blog {
  title : string;
  date: string;
  description: string;
  slugURL: string;
  image: string;
}


const blogs: Blog[] = [
    {
      title: "Blog1",
      date: "October 21, 2023",
      description: "This is my first blog",
      slugURL: "blog1",
      image: '/rice.png'
    },
    {
      title: "Blog2",
      date: "October 21, 2023",
      description: "This is my second blog",
      slugURL: "blog2",
      image: '/rice.png'
    },
  ];

  export default blogs;

  