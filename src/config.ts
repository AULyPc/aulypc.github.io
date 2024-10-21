import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'AULyPc',
  subtitle: 'Blog',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/liliya.webp',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: '葛城リーリヤ-wake up',              // Credit text to be displayed
      url: 'https://www.youtube.com/watch?v=X56QfFhKXEU'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
     {
       src: '/favicon/favicon_liliya-light-32.png',    // Path of the favicon, relative to the /public directory
       theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     },
     {
      src: '/favicon/favicon_liliya-dark-32.png',    // Path of the favicon, relative to the /public directory
      theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Friends,
    {
      name: 'GitHub',
      url: 'https://github.com/AULyPc',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/favicon_amiya.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'AULyPc',
  bio: '今日も生きててえらい ☁',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com/AULyPc1',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561198813644850/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/AULyPc',
    },
    {
      name: 'bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/88023998',
    },    
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
