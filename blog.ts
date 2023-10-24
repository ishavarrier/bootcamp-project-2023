type Blog = {
  title: string;
  date: string;
  description: string;
  slugURL: string;
};

const blogs: Blog[] = [
  {
    title: "Blog1",
    date: "October 21, 2023",
    description: "This is my first blog",
    slugURL: "blog1",
  },
  {
    title: "Blog2",
    date: "October 21, 2023",
    description: "This is my second blog",
    slugURL: "blog2",
  },
];

const parentEl = document.querySelector(".blog_container");
blogs.forEach(function (blog) {
  const blog_div = document.createElement("div");
  const blog_URL = `${blog.slugURL}.html`;

  blog_div.innerHTML = `
    <h2><a href="${blog_URL}">${blog.title}</a></h2>
    <p>Date: ${blog.date}</p>
    <p>${blog.description}</p>
`;

  parentEl?.appendChild(blog_div);
  console.log(parentEl);
});
