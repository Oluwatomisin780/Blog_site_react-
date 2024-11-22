import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { useBlogContext } from '../context/BlogContext';
import Loader from '../components/Loader';
export default function CreateBlog() {
  const { createBlog, isLoading } = useBlogContext();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');
  const id = crypto.randomUUID();
  const navigate = useNavigate();
  async function handleSubmitBlog(e) {
    e.preventDefault();

    const newBlog = {
      title,
      author: 'oluwatomisin',
      author_role: 'DevOps Engineer 🚀',
      category,
      publishedDate: '2023-08-05',
      summary: description,
      author_image: `${image}?=${id}`,
    };
    createBlog(newBlog);
    navigate('/');
    setTitle('');
    setImage('https://i.pravatar.cc/48');
    setCategory('');
  }
  return (
    <>
      <NavBar />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create Your Blog
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* -------------------  The Form is  here----------------- */}
          <form method="POST" className="space-y-6" onSubmit={handleSubmitBlog}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm/6 font-medium text-gray-900"
              >
                title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="category"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  category
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="desciption"
                  type="text"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <Loader /> : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
