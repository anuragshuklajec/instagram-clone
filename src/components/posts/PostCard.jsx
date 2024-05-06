import { useState } from "react";
import { Avatar } from "@mui/material";

function PostCard() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
  repellat repellendus ipsum dolor! Ea magni saepe ex consequuntur
  dolor? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptatibus praesentium. Dignissimos rerum quas neque itaque soluta exercitationem facere autem culpa, consectetur at explicabo atque, sequi eligendi excepturi corporis nulla minima quos!`;

  const trimmedContent = content.slice(0, 150);
  const shouldTrim = content.length > 150;

  return (
    <>
      <div className="border border-slate-300 w-full md:w-96 mb-2">
        <div className="flex p-2">
          <Avatar sx={{ width: 30, height: 30 }}>AS</Avatar>
          <span className="flex-1 ml-2">Anurag Shukla</span>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold rounded w-20 font-sans">
            Follow
          </button>
        </div>
        <div className="p-2">
          <h2 className="text-xl font-bold text-blue-900">How python works ?</h2>
          <p>{expanded ? content : trimmedContent}</p>
          {shouldTrim && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:text-blue-700"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>


      <div className="border border-slate-300 w-full md:w-96 mb-2">
        <div className="flex p-2">
          <Avatar sx={{ width: 30, height: 30 }}>SA</Avatar>
          <span className="flex-1 ml-2">Suyash Agrawal</span>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold rounded w-20 font-sans">
            Follow
          </button>
        </div>
        <div className="p-2">
          <h2 className="text-xl font-bold text-blue-900">How python works ?</h2>
          <p>{expanded ? content : trimmedContent}</p>
          {shouldTrim && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:text-blue-700"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default PostCard;
