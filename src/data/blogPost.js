const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    date: "May 15, 2025",
    readTime: "5 min read",
    excerpt: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to create your first React application.",
    content: `
      React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to create your first React application.

      React was developed by Facebook (now Meta) and has become one of the most widely used front-end libraries. Its component-based architecture makes it excellent for building reusable UI elements.

      To get started with React, you'll need to have Node.js installed on your computer. Once you have Node.js, you can create a new React application using Create React App, which sets up a modern React application with a good default configuration.

      The key concepts in React include components, props, and state. Components are the building blocks of React applications. Props allow you to pass data from parent components to child components. State represents the data that can change during the lifetime of a component.

      JSX is a syntax extension that lets you write HTML-like code in your JavaScript. It makes your React code more readable and expressive.
    `,
    categories: ["React", "JavaScript", "Web Development"],
    featuredImage: "react-thumbnail.jpg"
  },
  {
    id: 2,
    title: "CSS Best Practices for Modern Web Design",
    slug: "css-best-practices",
    date: "May 10, 2025",
    readTime: "7 min read",
    excerpt: "Learn the best practices for writing maintainable and scalable CSS code for modern web applications.",
    content: `
      CSS has evolved significantly over the years. In this post, we'll explore best practices for writing maintainable and scalable CSS code.

      One of the most important aspects of modern CSS is understanding the cascade and specificity. These concepts determine which styles are applied to an element when multiple rules conflict.

      Using a CSS methodology like BEM (Block, Element, Modifier) can help keep your CSS organized and maintainable. BEM provides a structured way to name your CSS classes, making your code more predictable and easier to understand.

      CSS variables (custom properties) are a powerful feature that allows you to define reusable values in your CSS. They're especially useful for theme colors, spacing, and other design values that are used throughout your application.

      Flexbox and CSS Grid are modern layout systems that make it easier to create complex layouts. Flexbox is ideal for one-dimensional layouts (rows or columns), while CSS Grid excels at two-dimensional layouts.
    `,
    categories: ["CSS", "Web Design", "Frontend"],
    featuredImage: "css-thumbnail.jpg"
  },
  {
    id: 3,
    title: "Introduction to JavaScript ES6 Features",
    slug: "javascript-es6-features",
    date: "May 5, 2025",
    readTime: "6 min read",
    excerpt: "Explore the powerful features introduced in ES6 that make JavaScript more expressive and developer-friendly.",
    content: `
      ECMAScript 2015, also known as ES6, introduced many features that make JavaScript more powerful and easier to work with.

      Arrow functions provide a more concise syntax for writing function expressions. They also maintain the "this" value from their surrounding context, which can be very useful in certain situations.

      Template literals allow for string interpolation and multi-line strings, making it easier to work with strings in JavaScript.

      Destructuring assignment makes it possible to unpack values from arrays or properties from objects into distinct variables. This can lead to more concise and readable code.

      The spread operator and rest parameters make it easier to work with arrays and function arguments. The spread operator can be used to expand an array into individual elements, while rest parameters allow you to represent an indefinite number of arguments as an array.

      Classes in ES6 provide a clearer syntax for creating objects and dealing with inheritance, although they're syntactical sugar over JavaScript's existing prototype-based inheritance.
    `,
    categories: ["JavaScript", "ES6", "Programming"],
    featuredImage: "js-thumbnail.jpg"
  },
  {
    id: 4,
    title: "Building a Personal Portfolio Website",
    slug: "building-portfolio-website",
    date: "April 28, 2025",
    readTime: "8 min read",
    excerpt: "Learn how to create an impressive portfolio website to showcase your skills and projects to potential employers.",
    content: `
      A personal portfolio website is essential for showcasing your skills and projects to potential employers or clients.

      When designing your portfolio, focus on simplicity and usability. Your visitors should be able to easily find the information they're looking for without being overwhelmed by excessive animations or complicated navigation.

      The key sections to include in your portfolio are an about section, your skills, projects, and contact information. Each section should be concise and focused on what matters most to your target audience.

      Your projects section is the most important part of your portfolio. For each project, include a title, description, technologies used, and links to the live site and source code if applicable. Screenshots or demos can also be very effective.

      Make sure your portfolio is responsive and works well on all device sizes. Many people will view your portfolio on mobile devices, so it's important that it looks good and functions properly on smaller screens.

      Performance is also crucial. Optimize your images, minimize HTTP requests, and use lazy loading where appropriate to ensure your site loads quickly and provides a good user experience.
    `,
    categories: ["Web Development", "Career", "Design"],
    featuredImage: "portfolio-thumbnail.jpg"
  },
  {
    id: 5,
    title: "Understanding State Management in React",
    slug: "state-management-react",
    date: "April 20, 2025",
    readTime: "9 min read",
    excerpt: "A deep dive into various state management approaches in React applications, from useState to Redux and Context API.",
    content: `
      State management is a critical aspect of building React applications, especially as they grow in complexity.

      React's built-in useState hook is perfect for managing local component state. It's simple to use and sufficient for many components that don't need to share their state with the rest of the application.

      For sharing state between components, you have several options. Prop drilling involves passing state down through props, which works for shallow component trees but becomes unwieldy as your application grows.

      The Context API provides a way to share state without explicitly passing props through every level of the component tree. It's useful for global state like themes, user authentication, or preferences.

      For more complex applications, you might consider a dedicated state management library like Redux, Recoil, or Zustand. Redux follows a strict unidirectional data flow pattern and is well-suited to applications with complex state logic.

      When choosing a state management solution, consider the size and complexity of your application, the team's familiarity with different approaches, and the specific requirements of your project.
    `,
    categories: ["React", "State Management", "JavaScript"],
    featuredImage: "state-management-thumbnail.jpg"
  }
];

export default blogPosts;