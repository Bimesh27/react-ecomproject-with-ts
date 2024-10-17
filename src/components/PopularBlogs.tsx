import { FaThumbsUp } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog title 1",
      author: "West",
      likes: 213,
      commments: 44,
    },
    {
      title: "My Amazing Blog title 2",
      author: "Zaps",
      likes: 113,
      commments: 40,
    },
    {
      title: "My Amazing Blog title 3",
      author: "Bimesh",
      likes: 903,
      commments: 89,
    },
  ];
  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">
        Popular Blogs
        <ul>
          {blogs.map((blog, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold mb-2 ">{blog.title}</span>
              </div>
              <span className="text-gray-600">
                Publishes by {blog.author}
              </span>
              <div className="flex items-center mt-2">
                <FiMessageCircle size={16}/>
                <span className="text-gray-500 mr-5 ml-1">
                  {blog.likes}
                </span>
                <FaThumbsUp size={16}/>
                <span className="text-gray-500 mr-2 ml-2">{blog.commments}</span>
              </div>
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default PopularBlogs;
