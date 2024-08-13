import React from 'react'

export default function LogoIcon({ color , width , height,stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_180_3102)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.9413 3.3978C20.413 3.85953 23.4851 5.62965 25.6695 8.2098C25.4571 8.3112 25.2184 8.42577 24.963 8.5455C23.6723 9.1533 21.958 9.9278 21.1251 10.1604C19.6908 10.5614 17.7898 10.1661 17.3432 6.95295L17.048 4.34244L16.9815 3.7524L16.9413 3.3978ZM2.95539 19.0958C2.25892 15.7349 2.90061 10.9647 4.92072 8.30318C5.06661 8.40744 5.60433 8.7775 5.79214 8.93848C6.52551 9.56518 7.5663 10.6668 8.80106 12.5658C11.1716 16.2098 5.1974 17.8865 2.95539 19.0958ZM12.1196 28.7651L13.8876 23.3928C13.8876 23.3928 16.365 18.4473 19.0391 23.3928C20.9485 27.5306 15.6557 29.6633 12.1196 28.7651ZM3.30139 20.3933C3.32766 20.3859 3.34946 20.3761 3.36847 20.3641C3.69211 20.2266 5.1471 19.6417 6.5842 19.5827C12.7949 19.3284 11.6976 22.9798 11.0291 28.4517C7.05094 26.8454 4.54733 24.2452 3.30139 20.3933ZM6.20522 7.4691C5.97213 7.3488 5.76531 7.24052 5.58477 7.14428C8.07999 4.7463 11.4355 3.27693 15.1263 3.27693C15.2934 3.27693 15.4595 3.28151 15.6249 3.28724L15.5494 3.6785V3.68079L15.5472 3.68996C15.289 5.00581 14.8284 7.18267 14.474 7.95545C13.9525 9.09143 12.6171 10.5304 9.38797 9.02441C8.03136 8.3914 6.97436 7.86609 6.20466 7.46852L6.20522 7.4691ZM24.5074 24.7711C24.5074 24.7711 26.181 21.8232 23.5734 16.8049C21.9809 13.7407 23.081 12.1751 25.9009 9.96905C26.1206 9.79719 26.3548 9.62247 26.6041 9.44545C30.3291 14.9558 29.8433 23.3367 25.0306 28.0948L24.9814 28.1384C28.2095 25.2947 30.2542 21.0808 30.2542 16.3759C30.2542 7.81338 23.4812 0.87207 15.1269 0.87207C6.77257 0.87207 -0.000976562 7.81338 -0.000976562 16.3759C-0.000976562 31.815 20.0011 36.0077 24.5074 24.7717V24.7711Z"
          fill={color}
          stroke={stroke}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_180_3102"
          x="-0.169061"
          y="0.87207"
          width="30.5911"
          height="30.5911"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.168084" />
          <feGaussianBlur stdDeviation="0.084042" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_180_3102"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_180_3102"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}