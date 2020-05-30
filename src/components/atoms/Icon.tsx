/**
 * Sources:
 * - https://github.com/adamwathan/entypo-optimized
 * - https://github.com/sschoger/heroicons-ui
 * - http://www.zondicons.com/
 */

type Icons = {
  [id: string]: {
    label: string;
    data: () => JSX.Element;
    width?: number;
    height?: number;
    color?: string;
  };
};

const icons: Icons = {
  adjust: {
    label: "Adjust",
    data() {
      return (
        <path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 004.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4v8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z" />
      );
    },
  },
  air: {
    label: "Air",
    data() {
      return (
        <path d="M2.643 6.357c1.747-1.5 3.127-2.686 6.872-.57 1.799 1.016 3.25 1.4 4.457 1.398 2.115 0 3.486-1.176 4.671-2.193a1.037 1.037 0 00.122-1.439.987.987 0 00-1.41-.125c-1.746 1.502-3.127 2.688-6.872.57-4.948-2.793-7.266-.803-9.128.797a1.037 1.037 0 00-.121 1.439.986.986 0 001.409.123zm14.712 2.178c-1.746 1.5-3.127 2.688-6.872.57-4.948-2.795-7.266-.804-9.128.795a1.037 1.037 0 00-.121 1.439.986.986 0 001.409.125c1.747-1.501 3.127-2.687 6.872-.572 1.799 1.018 3.25 1.4 4.457 1.4 2.115 0 3.486-1.176 4.671-2.195a1.035 1.035 0 00.122-1.438.986.986 0 00-1.41-.124zm0 5.106c-1.746 1.502-3.127 2.688-6.872.572-4.948-2.795-7.266-.805-9.128.795a1.037 1.037 0 00-.121 1.439.985.985 0 001.409.123c1.747-1.5 3.127-2.685 6.872-.57 1.799 1.016 3.25 1.4 4.457 1.4 2.115 0 3.486-1.178 4.671-2.195a1.037 1.037 0 00.122-1.439.988.988 0 00-1.41-.125z" />
      );
    },
  },
  arrowRight: {
    label: "Arrow Right",
    width: 24,
    height: 24,
    data() {
      return (
        <path d="M18.59 13H3a1 1 0 010-2h15.59l-5.3-5.3a1 1 0 111.42-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.42-1.4l5.3-5.3z" />
      );
    },
  },
  backInTime: {
    label: "Back In Time",
    data() {
      return (
        <path d="M11 1.799c-4.445 0-8.061 3.562-8.169 7.996V10H.459l3.594 3.894L7.547 10H4.875v-.205C4.982 6.492 7.683 3.85 11 3.85c3.386 0 6.131 2.754 6.131 6.15 0 3.396-2.745 6.15-6.131 6.15a6.099 6.099 0 01-3.627-1.193l-1.406 1.504A8.13 8.13 0 0011 18.199c4.515 0 8.174-3.67 8.174-8.199S15.515 1.799 11 1.799zM10 5v5a1.01 1.01 0 00.293.707l3.2 3.2c.283-.183.55-.389.787-.628L12 11V5h-2z" />
      );
    },
  },
  check: {
    label: "Check",
    data() {
      return (
        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z" />
      );
    },
  },
  credit: {
    label: "Credit",
    data() {
      return (
        <path d="M11 16.755V19H9v-2.143c-1.712-.1-3.066-.589-4.241-1.797l1.718-1.74c.859.87 2.023 1.16 3.282 1.16 1.565 0 2.405-.599 2.405-1.702 0-.483-.133-.889-.42-1.16-.267-.251-.572-.387-1.202-.483L8.9 10.903c-1.164-.174-2.022-.541-2.634-1.141-.648-.657-.973-1.546-.973-2.707 0-2.155 1.382-3.743 3.707-4.1V1h2v1.932c1.382.145 2.465.62 3.415 1.551l-1.679 1.682c-.859-.832-1.889-.947-2.787-.947-1.412 0-2.099.792-2.099 1.74 0 .348.115.716.401.986.267.252.706.464 1.26.541l1.602.232c1.241.174 2.023.522 2.596 1.063.726.696 1.05 1.702 1.05 2.92 0 2.25-1.567 3.662-3.759 4.055z" />
      );
    },
  },
  creditCard: {
    label: "Credit Card",
    data() {
      return (
        <path d="M18 3H2C.899 3 0 3.9 0 5v10c0 1.1.899 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H2V9h16v6zm0-9H2V5h16v1zM4 11.1v.6h.6v-.6H4zm3.6 1.199v.601h1.2v-.601h.6v-.6h.6v-.6H8.8v.6h-.601v.6H7.6zm2.4.601v-.601h-.601v.601H10zm-3 0v-.601H5.8v.601H7zm.6-1.201h.6v-.6H7v1.199h.6v-.599zm-2.401.6H5.8v-.6h.6v-.6H5.2v.6h-.6v.6H4v.601h1.199v-.601z" />
      );
    },
  },
  chevronLeft: {
    label: "Chevron-left",
    data() {
      return (
        <path d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 010-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z" />
      );
    },
  },
  chevronRight: {
    label: "Chevron-right",
    data() {
      return (
        <path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z" />
      );
    },
  },
  chevronDown: {
    label: "Chevron-Down",
    data() {
      return (
        <path d="M17.418 6.109a.697.697 0 01.979 0 .68.68 0 010 .969l-7.908 7.83a.697.697 0 01-.979 0l-7.908-7.83a.68.68 0 010-.969.697.697 0 01.979 0L10 13.25l7.418-7.141z" />
      );
    },
  },
  magnifyingGlass: {
    label: "Magnifying glass",
    data() {
      return (
        <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
      );
    },
  },
  text: {
    label: "Text",
    data() {
      return (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 11h-11c-.275 0-.5.225-.5.5v1a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0-4h-11c-.275 0-.5.225-.5.5v1a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-5 8h-6c-.275 0-.5.225-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm5-12h-11c-.275 0-.5.225-.5.5v1a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"
        />
      );
    },
  },
  tick: {
    label: "Tick",
    width: 612,
    height: 792,
    data() {
      return (
        <path d="M562 396c0-141.4-114.6-256-256-256S50 254.6 50 396s114.6 256 256 256 256-114.6 256-256zm-60.3-99.7l-241 241-17.2 17.2-133.2-133.2 58.8-58.8 74.5 74.5L443 237.6l58.7 58.7z" />
      );
    },
  },
  typing: {
    label: "Typing",
    data() {
      return (
        <path d="M16 4H4c-1.101 0-2 .9-2 2v7c0 1.1.899 2 2 2h4l4 3v-3h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 10.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zm4 0a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zm4 0a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z" />
      );
    },
  },

  // social
  facebook: {
    label: "Facebook",
    data() {
      return (
        <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z" />
      );
    },
  },
  instagram: {
    label: "Instagram",
    data() {
      return (
        <path d="M17.946 5.29a6.606 6.606 0 00-.418-2.185 4.412 4.412 0 00-1.039-1.594A4.412 4.412 0 0014.895.472a6.606 6.606 0 00-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 00-2.185.418A4.412 4.412 0 001.51 1.511 4.412 4.412 0 00.472 3.105a6.606 6.606 0 00-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 00.418 2.185 4.412 4.412 0 001.039 1.594 4.411 4.411 0 001.594 1.039 6.606 6.606 0 002.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 002.185-.418 4.602 4.602 0 002.633-2.633 6.606 6.606 0 00.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 01-.31 1.67 2.98 2.98 0 01-1.708 1.709 4.979 4.979 0 01-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 01-1.67-.31 2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035 4.978 4.978 0 01-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 01.31-1.67 2.788 2.788 0 01.673-1.036 2.788 2.788 0 011.035-.673 4.979 4.979 0 011.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 011.67.31 2.788 2.788 0 011.036.673 2.788 2.788 0 01.673 1.035 4.979 4.979 0 01.31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1013.622 9 4.622 4.622 0 009 4.378zM9 12a3 3 0 113-3 3 3 0 01-3 3zm5.884-7.804a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z" />
      );
    },
  },
  linkedin: {
    label: "LinkedIn",
    data() {
      return (
        <path d="M5 3c0 1.1-.7 2-2 2-1.2 0-2-.9-2-1.9C1 2 1.8 1 3 1s2 .9 2 2zM1 19h4V6H1v13zM14.6 6.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z" />
      );
    },
  },
  nextjs: {
    label: "Next.js",
    width: 207,
    height: 124,
    color: "#000",
    data() {
      return (
        <g fillRule="nonzero">
          <path d="M48.942 32.632h38.96v3.082H52.512v23.193h33.278v3.082H52.513v25.464h35.794v3.081H48.942V32.632zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373zM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zM183.397 86.523c.738 0 1.276-.563 1.276-1.29 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29zm3.509-3.393c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928z" />
        </g>
      );
    },
  },
  react: {
    label: "React",
    width: 841.9,
    height: 595.3,
    color: "#61DAFB",
    data() {
      return (
        <g>
          <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
          <circle cx="420.9" cy="296.5" r="45.7" />
          <path d="M520.5 78.1z" />
        </g>
      );
    },
  },
  twitter: {
    label: "Twitter",
    data() {
      return (
        <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z" />
      );
    },
  },
  typescript: {
    label: "TypeScript",
    color: "#3178c6",
    width: 128,
    height: 128,
    data() {
      return (
        <>
          <rect height="100%" rx="6" width="100%" />
          <path
            clipRule="evenodd"
            d="M74.262 99.468v14.026c2.273 1.168 4.96 2.045 8.063 2.629 3.102.585 6.373.877 9.81.877 3.35 0 6.533-.321 9.548-.964 3.016-.643 5.659-1.702 7.932-3.178a16.179 16.179 0 005.397-5.786c1.325-2.381 1.988-5.325 1.988-8.831 0-2.542-.379-4.77-1.136-6.684a15.632 15.632 0 00-3.278-5.107c-1.427-1.49-3.139-2.827-5.134-4.01-1.996-1.183-4.246-2.301-6.752-3.353a84.756 84.756 0 01-4.938-2.213c-1.456-.716-2.695-1.447-3.714-2.192-1.02-.745-1.806-1.534-2.36-2.367-.553-.832-.83-1.775-.83-2.827 0-.964.247-1.833.743-2.608s1.194-1.439 2.097-1.994c.903-.555 2.01-.986 3.321-1.293 1.311-.307 2.768-.46 4.37-.46 1.166 0 2.396.088 3.693.263 1.296.175 2.6.445 3.911.81 1.311.366 2.585.826 3.824 1.381a21.071 21.071 0 013.43 1.929V54.41c-2.127-.818-4.45-1.425-6.97-1.82S101.866 52 98.603 52c-3.321 0-6.468.358-9.44 1.074-2.97.716-5.586 1.833-7.843 3.353a16.732 16.732 0 00-5.353 5.807C74.656 64.587 74 67.4 74 70.672c0 4.178 1.202 7.743 3.605 10.694 2.404 2.951 6.053 5.45 10.947 7.495 1.923.789 3.714 1.563 5.375 2.323 1.66.76 3.095 1.549 4.304 2.367s2.163 1.71 2.862 2.674c.7.964 1.049 2.06 1.049 3.287 0 .906-.218 1.746-.655 2.52s-1.1 1.446-1.988 2.016c-.89.57-1.996 1.016-3.322 1.337-1.325.321-2.876.482-4.654.482-3.03 0-6.03-.533-9.002-1.6-2.971-1.066-5.724-2.666-8.259-4.799zm-23.56-34.914H69V53H18v11.554h18.208V116h14.495z"
            fill="#fff"
            fillRule="evenodd"
          />
        </>
      );
    },
  },
};

export type IconName = keyof typeof icons;

type IconProps = {
  id: IconName;
  className?: string;
  style?: React.CSSProperties;
};

export const Icon = ({ id, className, style }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${icons[id].width ? icons[id].width : 20} ${
      icons[id].height ? icons[id].height : 20
    }`}
    className={className}
    style={style}
  >
    {icons[id].data()}
  </svg>
);
