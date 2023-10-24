var blogs = [
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
var parentEl = document.querySelector(".blog_container");
blogs.forEach(function (blog) {
    var blog_div = document.createElement("div");
    var blog_URL = "".concat(blog.slugURL, ".html");
    blog_div.innerHTML = "\n    <h2><a href=\"".concat(blog_URL, "\">").concat(blog.title, "</a></h2>\n    <p>Date: ").concat(blog.date, "</p>\n    <p>").concat(blog.description, "</p>\n");
    parentEl === null || parentEl === void 0 ? void 0 : parentEl.appendChild(blog_div);
    console.log(parentEl);
});
