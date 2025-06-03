// https://github.com/ShubhamSarda/codebook

import { Routes, Route } from "react-router-dom";
import { PostPage } from "../pages/PostPage";
import { HomePage } from "../pages/HomePage";

export const AllRoutes = () => {
  return (
    <div >
      <Routes>
         <Route path="/" element={ <HomePage /> }/>
         <Route path="/post" element={ <PostPage /> }/>
      </Routes>
    </div>
  );
};
