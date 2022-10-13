import React from "react";

function SvgNotifications(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 332 309"
      {...props}
    >
      <defs>
        <filter
          id="notifications_svg__a"
          x={81.531}
          y={34.676}
          width={182.4}
          height={215.707}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="b" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
        <style>
          {".notifications_svg__d{stroke:#37517e;fill:none;stroke-width:4px}"}
        </style>
      </defs>
      <path
        d="M172.531 16.004c133.065-54.696 160 41.306 160 129.672s-43.778 182.47-160 160-206.675-31.431-160-160 26.935-74.977 160-129.672z"
        style={{
          fill: "#F2F2F2",
        }}
      />
      <g filter="url(#notifications_svg__a)">
        <path
          d="M172.73 235.387c12.488 0 27.5-11.508 27.5-25.348h-58.252c0 13.841 18.264 25.348 30.752 25.348zm76.155-49.867c-6.831-8.128-19.612-20.355-19.612-60.406 0-30.42-19.262-54.772-45.236-60.747v-8.159c0-6.918-5.063-12.528-11.307-12.528s-11.307 5.61-11.307 12.528v8.159c-25.974 5.975-45.236 30.327-45.236 60.747 0 40.052-12.782 52.278-19.612 60.406a12.981 12.981 0 00-3.045 8.5c.039 6.421 4.589 12.528 11.35 12.528h135.7c6.76 0 11.314-6.108 11.35-12.528a12.974 12.974 0 00-3.045-8.5z"
          style={{
            fill: "#FFFFFF",
            stroke: "#37517e",
          }}
          strokeLinejoin="round"
          strokeWidth={6}
        />
      </g>
      <g
        transform="translate(192.531 60.676)"
        fill="#e27a7a"
        style={{
          fill: "var(--em-primary-light)",
          stroke: "#37517e",
        }}
        strokeWidth={2}
      >
        <circle cx={20} cy={20} r={20} stroke="none" />
        <circle cx={20} cy={20} r={19} fill="none" />
      </g>
      <path
        className="notifications_svg__d"
        d="M89.031 261.176h70M166.031 261.176h56M229.031 261.176h18M173.031 54.176v11M103.031 180.176h101M213.031 180.176h29"
      />
    </svg>
  );
}

export default SvgNotifications;
