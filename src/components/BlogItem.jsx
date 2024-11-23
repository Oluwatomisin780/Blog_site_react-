import React from 'react';
import BlogList from './BlogList';
import Search from './Search';
import { useBlogContext } from '../context/BlogContext';
import Loader from './Loader';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks: A Complete Guide',
    summary:
      'Dive into the world of React Hooks, covering useState, useEffect, and custom hooks to enhance your functional components.',
    author: 'Alice Johnson',
    author_image: 'https://i.pravatar.cc/48?u=933372',
    author_role: 'Frontend development',
    category: 'React',
    publishedDate: '2024-11-21',
  },
  {
    id: 2,
    title: 'Getting Started with TypeScript in React',
    summary:
      "A beginner's guide to integrating TypeScript with React for type-safe applications.",
    author: 'Bob Williams',
    author_image: 'https://i.pravatar.cc/48?u=499476',
    author_role: 'Software developer',
    category: 'TypeScript',
    publishedDate: '2024-10-10',
  },
  {
    id: 3,
    title: 'Top 10 CSS Tricks for Modern Web Design',
    summary:
      'Learn CSS tricks and techniques to enhance your web design, including Flexbox, Grid, animations, and more.',
    author: 'Charlie Kim',
    author_image: 'https://i.pravatar.cc/48?u=499476',
    author_role: 'Software developer',
    category: 'CSS',
    publishedDate: '2024-09-15',
  },
  {
    id: 4,
    title: 'Exploring Node.js for Backend Development',
    summary:
      'Node.js is a powerful tool for building scalable backend applications. This article covers the essentials to get started.',
    author: 'Diana Garcia',
    author_image: 'https://i.pravatar.cc/48?u=499476',
    author_role: 'Backend developer',
    category: 'Node.js',
    publishedDate: '2024-08-01',
  },
  {
    id: 5,
    title: 'The Benefits of Using Context API in React',
    summary:
      'Understand when and how to use the Context API for managing global state in your React applications.',
    author: 'Ethan Brown',
    author_image: 'https://i.pravatar.cc/48?u=499476',
    author_role: 'React developer',
    category: 'React',
    publishedDate: '2024-07-20',
  },
  {
    id: 6,
    title: 'A Guide to Responsive Design with Flexbox and Grid',
    summary:
      'Responsive design is essential for modern websites. Learn how to use Flexbox and Grid for fluid layouts.',
    author: 'Fiona Lee',
    author_image: 'https://i.pravatar.cc/48?u=499476',
    author_role: 'Frontend developer',
    category: 'CSS',
    publishedDate: '2024-06-11',
  },
];

function BlogItem() {
  const { posts, isLoading } = useBlogContext();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <Search />

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading ? (
            <Loader />
          ) : (
            posts.map((post) => <BlogList post={post} key={post.id} />)
          )}
        </div>
      </div>
      {/* Add button here later  */}
    </div>
  );
}

export default BlogItem;
