import React from 'react';
import TeamMember from './TeamMember';

const Quotes = () => {
  return (
    <span >
        <center id="ourourou"><TeamMember
      
      
      description={
        "`'Find a good team is not by trolhshing publshied annonces but,infact it was good experience.`'___________Dr Ve.Borris"
      }
      url="/img/logoo.png"
    /></center>

      <TeamMember
      
        name="Ergeuz Makrem  - CEO Bus Software"
        description={
          "Makrem a Dalon hhhhhhhh a lens into your financial machine that's working for you. Returns, loans, exchanging, if it's not the UI for the next 100M, then whatever will be is going to be damn close."
        }
        url="/img/mie.png"
      />

      <TeamMember
        name="Kortas Helmi - Chef Projet Web "
        description="I truly believe that wallets are a major component in the road to adoption and mainstream use of cryptocurrencies and Dexwallet has positioned as an agile user-focused product."
        url="/img/helmi.jpg"
      />

      <TeamMember
        name="Kain Warwick - Founder Synthetix"
        description="A mobile native integration of defi protocols is critical to increasing accessibility of DeFi."
        url="/img/kain.jpg"
      />

      <TeamMember
        name="Gabriedle Rigo - CEO RigoBlock"
        description="DexWallet is a gateway to the decentralized world, reducing friction for the user, a much needed app for crypto adoption."
        url="/img/rigo.jpg"
      />

      <TeamMember
        name="Tom Bean - CEO BZX"
        description="The DexWallet app provides a slick interface and intuitive gateway to decentralized finance. The team behind it is talented and knows what they are doing. I look forward to partnering with them while we work together to build out the future of finance, and unleash the power of the blockchain."
        url="/img/tom.jpg"
      />
    </span>
  );
};

export default Quotes;
