const config = {
  siteTitle: "Omid Haqbin", // Site title.
  siteTitleShort: "Omid Haqbin, Frontend Developer", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Omid Haqbin, Frontend Developer, Aspiring Programmer, Wannabe Writer", // Alternative site title for SEO.
  siteLogo: "/logos/profile.png", // Logo used for SEO and manifest.
  siteUrl: "https://haqbin.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Omid Haqbin, Frontend Developer, Aspiring Programmer, Wannabe Writer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Omid Haqbin, Frontend Developer, Aspiring Programmer, Wannabe Writer", // Title of the RSS feed
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-187323310-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 0, // Amount of posts displayed per listing page.
  userName: "Omid", // Username to display in the author segment.
  userEmail: "omid.haqbin@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "omidhq", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole", // User location to display in the author segment.
  userAvatar: "/logos/profile.png", // User avatar to display in the author segment.
  userDescription:
    "Navigating through life trying to be useful. Still learning how to keep learning. Writing stuff only for the sake of writing stuff.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/omidhq",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/omidhq",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:omid.haqbin@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Omid Haqbin", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
