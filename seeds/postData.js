const { Post } = require("../models");
const postData = [
  {
    id: 1,
    title: "What is Gravity Forms?",
    content:
      "Gravity Forms is a WordPress plugin that allows website owners, developers, and admins to create contact forms, WordPress posts, use calculators, employment applications, and much more. Every website with an audience or significant customer base needs a contact form to collect information on your WordPress site. Whether you own a blog or an online business, you need to connect with your audience to drive growth and traffic. Apart from contact forms, these days, request a quote form, surveys, bookings, content submission, and other such forms are also required for websites. Gravity Forms allows you to create all sorts of simple and complex forms. Gravity Forms also offers add-ons to integrate with form submissions on other external services such as PayPal, Zapier, MailChimp, etc. It is one of the most popular form builder plugins that offers numerous extensions to the core functionality via third parties.",
    user_id: 1,
    cat_id: 1,
  },
  {
    id: 2,
    title: "The benefits of Office 365",
    content:
      "With Office 365, Microsoft takes care of all the dirty work so you don’t have to. Updates, patches, and upgrades just happen in the background without you needing to worry about it. When the server crashes, its Microsoft’s problem. When a hard drive needs to be replaced, Microsoft will handle it. You get the benefits of using Office without any of the headaches of updating and maintaining it all. Office 365 lives in the cloud. This means you have access to Word, Excel, Outlook, and other Microsoft Office tools from anywhere you can get a Web connection, and from virtually any device Windows or Mac desktops and laptops, Android devices, iPhones, iPads, and other smartphones and tablets.",
    user_id: 2,
    cat_id: 2,
  },
  {
    id: 3,
    title: "Why Move To Office 365?",
    content:
      "Office 365 is Microsoft’s cloud productivity suite, containing several useful applications, some of which most of us are use to such as Word, Outlook & Excel & some which we may not be so familiar with like One Note, Share Point which is a management project tool and One Drive for cloud storage. Using office 365 reduces risk of network problems in an office. Its very time efficient when using applications such as skype for business video conferencing and hosted email exchange. Office 365 apps also reduces the number of severs and computer resources, which lowers the cost for business. It’s also a great disaster recovery contingency as if your computers & devices in your office where unavailable you would still be able to use 365’s online resources.",
    user_id: 1,
    cat_id: 2,
  },
  {
    id: 4,
    title: "What is WooCommerce?",
    content:
      "Created by developers Mike Jolley and James Koster, WooCommerce is an open-source, flexible commerce solution built on WordPress. It’s a WordPress plugin that can be used by business owners to build their online store. You can use it to sell both physical and digital goods. It’s a versatile solution with a massive range of features. The basic WooCommerce plugin is free to buy and use but for additional functionality, you may want to purchase other add-ons to the platform. It is an unmatched eCommerce platform with customization options via themes and extensions. Most importantly, you own it and have complete control over the display and payments.",
    user_id: 2,
    cat_id: 1,
  },
  {
    id: 5,
    title: "VPNs Explained",
    content:
      "VPN stands for Virtual Private Network, which is also called an IP-based private network. It’s one of the most effective ways of bypassing geographical barriers and ensuring privacy when using the internet. A VPN  switches your IP address from one country to another by basically putting you somewhere else. An IP address (also called an IP address block) is a numerical number assigned to various computers (a computer, a laptop, a tablet, or a phone) whenever they connect to the web. There are two types of IP addresses, IP Version 2 (i.e. IPv2) and IPv3. When you surf the web, there are many different reasons for using a VPN. One of the most common reasons is that you want to access the web from a country that may be hostile to your own. Perhaps you’re currently involved in a war zone, or you’re on business trips. For this reason, you should consider getting a VPN as a security measure. You may think that VPNs aren’t useful for protecting your privacy and security online, but the truth is that a VPN can actually do a lot of good.",
    user_id: 3,
    cat_id: 3,
  },
  {
    id: 6,
    title: "STOP Words Are Damaging Your Websites SEO",
    content:
      "Stop words, you say? What in the name of information overload is a stop word? In a nutshell, stop words are words Google overlooks when it’s ranking your website for SEO. Words like what, when, who and where, as well as small words like the, an, of and or. It might help to visualise a big STOP sign. You know – the kind you see when you’re driving. These signs have one purpose: to stop traffic. In internet terms, stop words do the same with your website. They stop the flow of traffic to your site by using up valuable space in your meta tags and titles that could be working harder for you. Removing stop words from your website can help boost your site’s visibility and Google ranking… which is precisely why you should be doing it.",
    user_id: 4,
    cat_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
