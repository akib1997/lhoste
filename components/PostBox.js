import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";

export default function PostBox({ posts }) {
  const breakpointColumnsObj = {
    default: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts &&
        posts.map((post) => (
          <div className="mb-6" key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a className="post-box shadow-xl overflow-hidden rounded-2xl bg-white block">
                {post.img === "" ? null : (
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-72 object-cover"
                  />
                )}

                <div className="px-8 md:px-10 relative pb-8">
                  <div className="w-36 h-0.5 bg-green-400 mt-8 mb-4" />
                  <h3 className="text-2xl font-bold py-2 text-colorOne">
                    {post.title}
                  </h3>
                  <p className="pb-6 text-base md:text-xl text-colorTwo">
                    {post.text}
                  </p>
                  <ul className="flex pb-6 flex-wrap">
                    {post.tags &&
                      post.tags.map((tag, i) => (
                        <li key={i}>
                          <Link href="#">
                            <a className="inline-block px-4 xl:px-6 py-2 rounded-full tag-bg capitalize mr-4 font-bold text-colorFour text-xs mb-3">
                              {tag}
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <div className="flex items-center">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-12 h-12 object-cover mr-5 rounded-full"
                    />
                    <h6 className="font-normal text-colorTwo">{post.author}</h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </Masonry>
  );
}
