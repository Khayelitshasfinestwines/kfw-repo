import React from 'react';
import './storyPage.css';
import StoryPageImage from './storyPageImages/storypage2.jpg';
import StoryPageImage2 from './storyPageImages/lindileshot.jpeg';
import QRCode from './storyPageImages/StoryQR.jpg';

const StoryPage = () => {
  return (
    <div>
      <div className="heading-container">
        <img src={StoryPageImage} alt="story header" style={{ width: '100%' }} />
        <div className="centered">Our Story</div>
      </div>

      <div className="container">

        <div className="text">
          <div className = "spacing">
          <p>Welcome to Khayelitsha's Finest Wines! We are a home-grown brand that has captured the hearts of wine enthusiasts worldwide, and we're excited to share our journey with you. Founded in 2018 by Lindile Ndzaba, a visionary entrepreneur born and raised in Khayelitsha, our brand is dedicated to producing quality and affordable wines sourced from local wine producers across the province.</p>
          </div>
          <img src={StoryPageImage2} alt="Lindile Ndzaba" style={{ width: '100%' }} />

          <p className="caption mt-3">Lindile Ndzaba</p>
          <p className="caption-sub">Founder of Khayelitsha's Finest Wines</p>
<div className = "spacing">
<p>Lindile's passion for wine was ignited during his time in the hospitality industry, where he witnessed the stark difference in the quality of wines served in the shebeens and taverns of Khayelitsha. He recognized the need to bring exceptional wines to his community, challenging the perception that fine wines were exclusive to certain areas or individuals. Inspired by his background and driven by a desire to uplift his community, Khayelitsha's Finest Wines was born.</p>

<p>From the outset, our goal has been to democratize the wine culture and make it accessible to all. We collaborate directly with winemakers and vineyards, including esteemed partners such as The Fledge & Company and Saxenburg Wine Estate, to create small batches of high-quality wines. Lindile himself is involved in the blending and creation process, ensuring that every bottle of Khayelitsha's Finest Wines represents the essence of our brand. </p>

<p>Beyond our commitment to producing exceptional wines, we are passionate about making a difference in Khayelitsha. We run several feeding schemes, working to alleviate food insecurity and provide support to those in need. Additionally, we have established a tasting room that will not only introduce tourists to our community but also challenge stereotypes and showcase the beauty that lies within Khayelitsha.</p>

<p>We understand that there are still misconceptions and resistance when it comes to wine culture, particularly in underprivileged communities. However, we firmly believe that education and exposure can break down barriers. We aim to promote wine appreciation, celebrate diversity, and inspire others to pursue their dreams, regardless of their background or circumstances.</p>

<p>As we continue to grow our brand, our focus remains on expanding within the African continent and spreading our message of inclusivity and empowerment. We want everyone, regardless of their race or socioeconomic status, to feel welcome and comfortable exploring the world of wine.</p>

<p>Thank you for being a part of our story. Together, we are redefining what it means to enjoy fine wines and creating a positive impact in our community. Raise a glass with us and join the movement that is Khayelitsha's Finest Wines. Cheers to a future filled with great wine, shared experiences, and the celebration of the human spirit.</p>

<p>Scan the QR code below to learn even more about us and what we stand for.</p>
        </div>
        </div>

        <img src={QRCode} alt="QR Code" style={{ width: '50%' }} />
      </div>
    </div>
  );
};

export default StoryPage;
