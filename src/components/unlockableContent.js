import React, { useState } from 'react'
import AddressForm from './addressForm';

function UnlockableContent() {
  const [unlockCode, setUnlockCode] = useState('');

  return (
    <div className="AboutMe">
      <div className="AboutMe-container">
        <div className="AboutMe-text">
        <h1 className="AboutMe-title">About Me</h1>
        <h2>Aerialist:</h2>
        In just one year of intensive training in aerial arts, Zoe has soared to remarkable heights, securing four prestigious top-ranking medals in both international and national aerial competitions. Her exceptional talent extends across a diverse range of apparatuses, including pole, silks, sling, loops, lyra, chains, and even silk fans.

        <h2>The Classroom:</h2>
         She is not only a captivating performer but also a dedicated instructor, sharing her aerial mastery at various events, including the illustrious 2023 Denver Fan Expo, which boasted an audience of over 100,000 attendees.

        <h2>Abilities:</h2>
        Zoe possesses a versatile skill set that goes beyond the aerial world. Her modeling skills include the ability to maintain challenging poses, a high pain threshold for intense photoshoots, and the grace to pose effortlessly in 8+ inch heels. She also brings her acting prowess, having graced the stage in more than ten full-scale productions.

        <h2>Events:</h2>
        Beyond her artistic talents, Zoe boasts a wealth of professional skills. Her exceptional communication skills have seen her announce and interact at numerous events, engaging with thousands of attendees. Her confidence shines through in demanding routines performed on the international stage, seamlessly blending artistry and acting. Zoe's time management skills are equally impressive, demonstrated by her ability to balance two jobs while tackling a demanding 18+ credit-hour semester load and contributing to two graduate research projects.

        <h2>Education:</h2>
        Education-wise, Zoe holds a Bachelor of Science in Horticulture from Colorado State University, complemented by a certification in Leadership from CSU SLICE, underscoring her commitment to personal and professional growth.

        <h2>Physical details:</h2>
        Height: 5'3 
        Weight: 120 lbs 
        Build: Athletic, petite 
        Tattoos: 3 tattoos, one under right arm, 2 on left ankle. 
        Hair Color: Natural Redhead
        Eye Color: Brown 
        Location: Colorado Springs and Dallas (Willing to travel with stipend) 
        </div>
      </div>
    </div>
  );
}

export default UnlockableContent;
