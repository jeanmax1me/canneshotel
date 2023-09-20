"use client";
import { alegreya, playfair } from './../../fonts.jsx'
import "./sidemenu.css"
import {motion} from 'framer-motion'

function page() {
  return (
    <div className={alegreya.className}>
      <h1 className={playfair.className}>Upcoming Events</h1>
      <motion.div
       initial={{x: 100, opacity: 0}}
       animate={{x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.8 }}}
       transition={{delay: 0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,}}
      >
        <h3
        className="mb-1 text-xl">From 2 until 5 October</h3>
        <h2 className="mb-2 text-3xl">TFWA World Exhibition & Conference</h2>
        <p>TFWA World Exhibition & Conference is the annual international meeting place for the duty free and travel retail industry.

          This unique event, which brings together over 3,000 prestigious brands, is held in October.

          The show is the leading event for the sector. TFWA also offers a programme of conferences and workshops where ideas, experiences and business are shared.</p>
      </motion.div>
      <motion.div
       initial={{x: 120, opacity: 0}}
       animate={{x: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8 }}}
       transition={{delay: 0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,}}
      >
        <h3 className="mb-1 text-xl mt-4">From 16 until 19 October</h3>
        <h2 className="mb-2 text-3xl ">MIPCOM</h2>
        <p>MIPCOM is the world leader in audiovisual content for the creation, co-production, purchase, sale, financing and distribution of content on all platforms (media, TV, mobile, cinema, internet, etc.).

          Every autumn, the international audiovisual content market meets at the Palais des Festivals.

          Television executives and stars of the small screen all gather in Cannes for a major media event.

          MIPCOM offers you the opportunity to do business, discover future trends and conclude partnerships at a global level.</p>
      </motion.div>
      <motion.div
       initial={{x: 140, opacity: 0}}
       animate={{x: 0, opacity: 1, transition: { delay: 0.7, duration: 0.8 }}}
       transition={{delay: 0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,}}
      >
        <h3 className="mb-1 text-xl mt-4">From 8 until 9 November</h3>
        <h2 className="mb-2 text-3xl ">E-Retail and E-Commerce Meetings</h2>
        <p>the One-to-One meetings for digital and technological solutions for e-commerce and the connected shop.
   This new event will offer pre-organised and targeted &ldquo;one-to-one&rdquo; meetings between exhibitors with solutions and digital directors, customer experience directors, innovation directors, e-commerce directors, marketing directors, IT directors, buyers and solution/product specifiers at retailers, etc., so that they can find the digital tools and solutions they need to equip their stores as effectively as possible while developing the possibilities offered by connected commerce.</p>
00
      </motion.div>
      <motion.div
       initial={{x: 160, opacity: 0}}
       animate={{x: 0, opacity: 1, transition: { delay: 1, duration: 0.8 }}}
       transition={{delay: 0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,}}
      >
        <h3 className="mb-1 text-xl mt-4">From 8 until 9 November</h3>
        <h2 className="mb-2 text-3xl ">Transports and Logistics Meetings</h2>
        <p>the business exhibition for transport and the entire logistics chain.
          A top-of-the-range trade show and meeting event, with pre-organised, targeted and highly qualified business meetings between top decision-makers and exhibitors prior to the event.
          With 2 days of benchmarking, matchmaking and networking, this event is the new business networking accelerator for the logistics and transport market.
        </p>
      </motion.div>
      <motion.div
       initial={{x: 180, opacity: 0}}
       animate={{x: 0, opacity: 1, transition: { delay: 1.3, duration: 0.8 }}}
       transition={{delay: 0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,}}
      >
        <h3 className="mb-1 text-xl mt-4">From 7 until 9 November</h3>
        <h2 className="mb-2 text-3xl ">Mare di Moda</h2>
        <p>the most famous business session for all professionals looking for prestige in beachwear and underwear.
The best collections of fabrics and accessories, for marine and lingerie fashion, are presented in November during Mare di Moda in Cannes.
Exclusively European exhibitors, hand-picked visitors, trend previews, market strategies: MarediModa provides only services and contacts that fuel solid and healthy business. MarediModa represents the best of business-to-business (B2B) because it is entirely organised by companies for companies.
        </p>
      </motion.div>
    </div>
  )
}

export default page