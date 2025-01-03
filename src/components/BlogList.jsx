import React from 'react';

function BlogList({ post }) {
  console.log(post);

  return (
    <article
      key={post.id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.publishedDate}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-indigo-600 hover:text-white"
        >
          {post.category}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <a href={post.href}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          {post.summary}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          alt=""
          src={post.author_image}
          className="size-10 rounded-full bg-gray-50"
        />
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author}
            </a>
          </p>
          <p className="text-indigo-600">{post.author_role}</p>
        </div>
      </div>
    </article>
  );
}

export default BlogList;
