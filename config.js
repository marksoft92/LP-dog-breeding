import { config } from "dotenv";
import path from "path";
config();

const MODE = process.env.npm_lifecycle_event;

const pathSSL = (name) => path.join(process.cwd(), "ssl", name);

export default {
  TITLE: "Hodowla Maltańczyków Agnieszka Goździk - White Stars Maltan",
  URL: MODE === "dev" ? "/" : "https://crossfox.dev",
  BASEURL: true,
  FOOTER_YEAR: new Date().getFullYear(),
  LANG: "en-US",
  VERSION: "1.0",

  // COMPANY:
  COMPANY_NAME: "Hodowla Maltańczyków Agnieszka Goździk - White Stars Maltan",
  COMPANY_NAME_SHORT: "White Stars Maltan",
  COMPANY_DESCRIPTION:
    "Hodowla Maltańczyków Agnieszka Goździk - White Stars Maltan",
  OPENING_HOURS: "Mo,Tu,We,Th,Fr,Sa,Su",
  DAY_OF_WEEK:
    '"Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"',
  OPENS: "09:00",
  CLOSES: "17:00",
  PRICE_RANGE: "$$",

  //API:
  GOOGLE_ANALYTIC: null,

  // CONTACTS:
  EMAIL: "white-stars-maltan@gmail.com",
  PHONE: '<a href="tel:+48512784525">+48 512-784-525</a>',
  AUTHOR: "Oleksii Fursov",

  // DEPLOY:     https://github.com/mscdex/ssh2#user-content-client-methods
  SFTP: {
    HOST: process.env.SFTP_HOST,
    PORT: process.env.SFTP_PORT,
    USER: process.env.SFTP_USER,
    PASSWORD: process.env.SFTP_PASSWORD,
    REMOTE_DIR: process.env.SFTP_REMOTE_DIR,
    LIMIT: 3,
    INCLUDED_DIR: "all", //'all', // all | callback (dir => dir !== 'folder')
    INCLUDED_FILE: "all", //'all', // all | callback
  },

  //DESIGNED:
  THEME_BACKGROUND: "#111",
  THEME_COLOR: "#ff9800",

  PWA: true,
  PWA_DISPLAY: "standalone", //https://developer.mozilla.org/en-US/docs/Web/Manifest/display
  PWA_START_URL: "/index.html",
  PWA_ORIENTATION: "portrait", //https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
  PWA_APPLE_STATUS_BAR: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`

  // SERVER:
  FOLDER_BUILD: "./build",
  FOLDER_SOURCE: "./src",
  FOLDER_COPY: ["files"],
  SERVER_OPEN: false, //'external',
  HTTPS: true,
  SSL: {
    key: pathSSL("localhost-key.pem"),
    cert: pathSSL("localhost.pem"),
  },
  PORT: 777,
  GHOSTMODE: {
    clicks: true,
    forms: true,
    scroll: false,
    location: true,
  },
  TUNNEL: false,
  RENDER_HTML: [
    "html/**/*.html",
    "!/html/part/*.html",
    "!html/blocks/*.html",
    "!/html/blocks/**/*.html",
  ],
  MODE,
};
