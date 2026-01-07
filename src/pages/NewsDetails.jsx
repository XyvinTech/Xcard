import bg from "../assets/images/news/newsbanner.png";
import image from "../assets/images/news/imagenews.webp";
import communityimage from "../assets/images/news/community.webp";
import featureimage from "../assets/images/news/featureskit.webp";
import adimage from "../assets/images/news/advertisement.webp";
import reportimage from "../assets/images/news/report.webp";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import NewsHero from "../components/news.jsx";
import CommunityOverview from "../components/News/CommunityOverview.jsx";
import AdvertisingPromotion from "../components/News/AdvertisingPromotion.jsx";
import ReportsAnalytics from "../components/News/ReportAnalytics.jsx";
import CommunityDetails from "../components/News/CommunityDetails.jsx";
import FeatureKit from "../components/News/FeatureKit.jsx";
const NewsDetails = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const newsData = {
    title: "BUZINESS CONNECT",
    subtitle: "Now we can bring everyone together through this app.",
    description: "Community Management App",
    bannerImage: bg,
    contentImage: image,
  };
  const CommunityOverviewData = {
    description: "This is the era of communities. Today, we are all part of many groups such as WhatsApp communities and Facebook communities. But have you ever heard of an app where every member of a community can use the same platform while still having their own digital card and personal digital profile page? That is exactly what the Buziness Connect Community Management App offers. From business associations, chambers of commerce, and cultural organizations to residential associations, religious communities, alumni groups, and training groups, members from all kinds of communities—no matter where they are—can use this app in the most efficient and productive way. The app allows you to store member data, collect payments, list ongoing events, automate community activities, send notifications to members, and search for people within the group whenever you need a service or reference. If you provide or receive any service, it can be recorded inside the app. This makes it easy to conduct business within the community, schedule meetings, and carry out various beneficial activities. Admins can record feedback, create new clubs or groups, and maintain confidentiality wherever needed. Unlike WhatsApp groups where everyone can see each other’s phone numbers, this app allows you to keep members’ personal data, including phone numbers, completely private. With all these conveniences and innovations, the Buziness Connect Community Management App stands out as a powerful tool for modern community management.",
    image: communityimage,
  };
  const featuresKitData = {
    title: "FEATURES KIT",
    intro: `A digital profile combined with a digital card makes your business networking far more effective. In a community, every member can use the platform equally while still creating their own digital card and digital profile page. Have you ever heard of such an app? That is exactly what Buziness Connect's "Community Management App" offers`,
    subtitle: "MEMBERSHIP MANAGEMENT",
    description: `The app provides digital onboarding, data security, and easy membership renewals, supported by automated reminders. Members receive verification badges in different colors based on their position, similar to those seen on WhatsApp or celebrity social media profiles, helping others quickly identify their role or status. Each member can create a rich digital profile that includes their photo, contact number, address, website, Instagram or YouTube videos, achievements such as awards or certifications, and detailed business information. This feature-rich profile page acts like a mini-website. It can be shared with others through a QR code or a link, and used as a digital business card, eliminating the need for printed cards. Most importantly, this mini-website (digital profile page) can be edited anytime through the mobile app, making it extremely convenient and flexible for members. Event listing, detailed event information, registration, attendee management, and complete event management are all made simple through this app. As part of your community activities, you can list multiple events, add details about the speakers, location, participation progress, and all relevant updates. Entry to events can be managed through QR code scanning, and photos or videos of the programs can be uploaded by both members and the association. Notifications, posters, and event photos can also be posted for the entire group to see. Members can pay and book their event participation, and once payment is made, automated notifications and receipts will be sent to them. Additionally, events can be live-streamed through the app. Members can communicate easily within the app. They can chat directly, share their business needs, and reach out to other members. `,
    image: featureimage,
  };
  const advertisingPromotionData = {
    title: "ADVERTISING & PROMOTION",
    description: `Members, service providers, and partners within the community have the opportunity to place advertisements and promotions inside the app. When users open the app, banners, posters, and videos can be displayed instantly, allowing you to reach a wider audience more effectively. Through these ads, business promotions, discounts, and announcements can be communicated to all members.`,
    subtitle: "SUBSCRIPTION BASED FUNDRAISING/LOAN & PAYMENT COLLECTION",
    subdescription: `The app enables easy fundraising or service-based subscription collections from anywhere. Payments can be received through QR code scanning, bank transfers, or other supported methods. Community admins can track contributions accurately, send automatic notifications, and ensure complete transparency for all collected funds.`,
    image: adimage,
  };
  const reportsAnalyticsData = {
    title: "REPORTS, ACTIVITIES & ANALYTICS",
    intro: `The app provides comprehensive reporting for all member data, product listing data, and all the activities happening within the community. Every detail is available for effective management. Different hierarchy levels can be created inside the community, and roles can be assigned, ensuring smoother operations and better workflow.`,
    subtitle: "NEWS READING & UPLOADING",
    description: `Members can stay updated with the latest news and announcements, and they can also view important notices. Both admins and members can publish news, group updates, photos, videos, or text content in any format directly inside the app.`,
    subtitle2: "MEMBER LOYALTY POINTS",
    description2: `Members can receive loyalty cards and vouchers. These can be used to redeem discounts at partner services or businesses.`,
    image: reportimage,
  };
  const communityDetailsData = {
    title: "COMMUNITY DETAILS - ABOUT US",
    description: `Through this section, members can access complete details about the community, and those with admin or community-management roles can edit this information whenever needed. The community can be organized using tags so that members can be filtered easily based on districts, local clubs, or any other categories. Members can post their requirements just like a social media feed, share the services they offer, and allow others in the community to view and respond to them. Important alerts and notifications can be instantly sent to members as in-app messages, and community announcements can be shared quickly with the whole group or with specific sub-groups. Posters, flyers, and event materials can also be uploaded, and members can share their digital profile links or QR codes whenever required. The app also provides features to collect visitor information, enquiries, and feedback, helping the community build a useful database and generate business leads. Role-based access allows multiple people to manage tasks such as posting announcements, handling transactions, or managing events, with their duties and permissions clearly assigned. Members can search for businesses using names, categories, or filters, view business profiles, product details, and send appointment or enquiry requests. Meetings and leads can be shared within the community so that members can support and grow each other's businesses. This advanced application is currently used by more than twenty well-established communities across India and abroad. The app was developed by SkyberTech, a premium technology company based in Infopark, Ernakulam, known for building secure and modern digital solutions. Their experienced team, including professionals like Sunarsh and Anaro, has achieved more than seven national awards for excellence in the IT industry, and SkyberTech now provides IT services to over a hundred businesses.`,
    phone: "7592 888 111, 98957 12132",
    email: "hello@buzinessconnect.com | mail@skybertech.com",
  };
  return (
    <>
      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <NewsHero data={newsData} />

        <CommunityOverview data={CommunityOverviewData} />

        <FeatureKit data={featuresKitData} />

        <AdvertisingPromotion data={advertisingPromotionData} />

        <ReportsAnalytics data={reportsAnalyticsData} />

        <CommunityDetails data={communityDetailsData} />

      </Box>
    </>
  );
};

export default NewsDetails;