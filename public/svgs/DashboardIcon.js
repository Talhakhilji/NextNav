import React from 'react'

export default function DashboardIcon({ color, width, height, stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.33366 0.666992C1.41318 0.666992 0.666992 1.41318 0.666992 2.33366V5.66699C0.666992 6.58747 1.41318 7.33366 2.33366 7.33366H5.66699C6.58747 7.33366 7.33366 6.58747 7.33366 5.66699V2.33366C7.33366 1.41318 6.58747 0.666992 5.66699 0.666992H2.33366ZM14.0005 7.33382C15.8414 7.33382 17.3338 5.84144 17.3338 4.00049C17.3338 2.15954 15.8414 0.667155 14.0005 0.667155C12.1595 0.667155 10.6672 2.15954 10.6672 4.00049C10.6672 5.84144 12.1595 7.33382 14.0005 7.33382ZM7.33382 14.0005C7.33382 15.8414 5.84144 17.3338 4.00049 17.3338C2.15954 17.3338 0.667155 15.8414 0.667155 14.0005C0.667155 12.1595 2.15954 10.6672 4.00049 10.6672C5.84144 10.6672 7.33382 12.1595 7.33382 14.0005ZM12.3338 10.6672C11.4133 10.6672 10.6672 11.4133 10.6672 12.3338V15.6672C10.6672 16.5876 11.4133 17.3338 12.3338 17.3338H15.6672C16.5876 17.3338 17.3338 16.5876 17.3338 15.6672V12.3338C17.3338 11.4133 16.5876 10.6672 15.6672 10.6672H12.3338Z"
        fill={color}
        stroke = {stroke}
      />
    </svg>
  );
}
