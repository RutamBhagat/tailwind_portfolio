import React from "react";

const FirebaseIcon = () => {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      className="h-[50px] w-[50px] rounded-lg text-gray-700 group-hover:text-cyan-500"
      viewBox="2 1 25 25"
    >
      <defs>
        <clipPath id="id1">
          <path
            d="M 6.371094 2 L 19 2 L 19 22 L 6.371094 22 Z M 6.371094 2 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="id2">
          <path
            d="M 6.371094 8 L 17 8 L 17 22 L 6.371094 22 Z M 6.371094 8 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="id3">
          <path
            d="M 6.371094 6 L 23.789062 6 L 23.789062 25.8125 L 6.371094 25.8125 Z M 6.371094 6 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#id1)">
        <path
          fill="rgb(100%, 100%, 100%)"
          d="M 15.628906 5.648438 C 15.417969 5.246094 14.832031 5.246094 14.625 5.648438 L 13.34375 8.003906 L 10.398438 2.445312 C 10.144531 1.980469 9.421875 2.097656 9.335938 2.617188 L 6.371094 21.3125 L 18.480469 11.070312 Z M 15.628906 5.648438 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
      <g clip-path="url(#id2)">
        <path
          fill="rgb(100%, 100%, 100%)"
          d="M 16.054688 13.121094 L 13.34375 8.003906 L 6.371094 21.3125 Z M 16.054688 13.121094 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
      <g clip-path="url(#id3)">
        <path
          fill="rgb(100%, 100%, 100%)"
          d="M 21.535156 7.390625 C 21.464844 6.964844 20.929688 6.792969 20.613281 7.101562 L 6.371094 21.316406 L 14.253906 25.367188 C 14.753906 25.640625 15.359375 25.640625 15.859375 25.367188 L 23.789062 21.316406 Z M 21.535156 7.390625 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

export default FirebaseIcon;
