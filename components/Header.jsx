import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="flex bg-gray px-10 mb-8 border-b w-screen border-black ">
      <div className=" w-full inline-block py-8 ">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black border border-red ">
              Mujahid Elmaki.
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents ">
          <Link key={'About me'} href={`/aboutme`}>
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:bg-gray-400/50">
              About me
            </span>
          </Link>
          <Link key={'Projects'} href={`/projects`}>
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:opacity-40">
              Projects
            </span>
          </Link>
          <Link key={'blog'} href={`/blog`}>
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:opacity-40">
              Articles
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
