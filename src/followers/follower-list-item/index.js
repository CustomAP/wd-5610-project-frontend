import React from "react";

function FollowerCard(props) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-4 flex">
        <div className="w-1/4">
          <img
            width={120}
            height={120}
            alt="Profile"
            className="m-1 rounded-circle"
            src={props.follow.user[0].image_url}
          />
        </div>
        <a href={`/profile/${props.follow.user[0].id}`}>
          <div className="w-3/4 m-4">{props.follow.user[0].name}</div>
        </a>
      </div>
    </div>
  );
}

export default FollowerCard;
