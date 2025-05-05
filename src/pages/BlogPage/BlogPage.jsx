"use client"

import { useState } from "react"
import "./BlogPage.css"
import imgday1 from "../../assets/day1.jpg"
import imgday1_2 from "../../assets/day1_2.jpg"
import imgday1_3 from "../../assets/day1_3.jpg"
import imgday1_4 from "../../assets/day1_4.jpg"
import imgday1_5 from "../../assets/day1_5.jpg"
import imgday1_6 from "../../assets/day1_6.png"

import imgday2 from "../../assets/day2.jpg"
import imgday2_2 from "../../assets/day2_2.jpg"
import imgday2_3 from "../../assets/day2_3.jpg"
import imgday2_4 from "../../assets/day2_4.jpg"
import imgday2_5 from "../../assets/day2_5.jpg"
import imgday2_6 from "../../assets/day2_6.jpg"

import imgday3 from "../../assets/day3.jpg"
import imgday3_2 from "../../assets/day3_2.jpg"
import imgday3_3 from "../../assets/day3_3.jpg"
import imgday3_4 from "../../assets/day3_4.jpg"
import imgday3_5 from "../../assets/day3_5.jpg"
import imgday3_6 from "../../assets/day3_6.jpg"

import imgday4 from "../../assets/day4.jpg"
import imgday4_2 from "../../assets/day4_2.jpg"
import imgday4_3 from "../../assets/day4_3.jpg"
import imgday4_4 from "../../assets/day4_4.jpg"
import imgday4_5 from "../../assets/day4_5.jpg"
import imgday4_6 from "../../assets/day4_6.jpg"

import imgday5 from "../../assets/day5.jpg"
import imgday5_2 from "../../assets/day5_2.jpg"
import imgday5_3 from "../../assets/day5_3.jpg"
import imgday5_4 from "../../assets/day5_4.jpg"
import imgday5_5 from "../../assets/day5_5.jpg"
import imgday5_6 from "../../assets/day5_6.jpg"

import imgday6 from "../../assets/day6.jpg"
import imgday6_2 from "../../assets/day6_2.jpg"
import imgday6_3 from "../../assets/day6_3.jpg"
import imgday6_4 from "../../assets/day6_4.jpg"
import imgday6_5 from "../../assets/day6_5.jpg"
import imgday6_6 from "../../assets/day6_6.jpg"

import imgday7 from "../../assets/day7.jpg"
import imgday7_2 from "../../assets/day7_2.jpg"
import imgday7_3 from "../../assets/day7_3.jpg"
import imgday7_4 from "../../assets/day7_4.jpg"
import imgday7_5 from "../../assets/day7_5.jpg"
import imgday7_6 from "../../assets/day7_6.jpg"

import imgday8 from "../../assets/day8.jpg"
import imgday8_2 from "../../assets/day8_2.jpg"
import imgday8_3 from "../../assets/day8_3.jpg"
import imgday8_4 from "../../assets/day8_4.jpg"
import imgday8_5 from "../../assets/day8_1.jpg"
import imgday8_6 from "../../assets/day8_5.jpg"

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogs = [
    {
      id: 1,
      title: "Day 1: First Flight, First Steps — A Journey into Manila's Past",
      date: "April 7, 2025",
      excerpt:
        "Our OJT tour officially began with excitement and a bit of nervousness as we headed to the airport in Zamboanga City...",
      content: `
        <p>Our OJT tour officially began with excitement and a bit of nervousness as we headed to the airport in Zamboanga City. For me, this day was extra special it was my very first time flying on a plane! The experience was unforgettable. Watching the clouds from above and feeling the thrill of takeoff made the start of this journey truly memorable.</p>
        
        <p>Upon arriving in Manila, I was filled with a mix of curiosity and anticipation. It was my first time in the city, and everything felt both new and overwhelming. Thankfully, our group was warmly welcomed by DJM Travel & Tours, who picked us up at the airport and guided us throughout our day.</p>
        
        <p>We kicked things off with a much-needed lunch before beginning our city tour. Our first destination was Intramuros, famously known as the "Walled City." Our tour guide shared that "Intramuros" is Spanish for "within the walls," a name that reflects its historic, fortified nature. Walking through its old streets felt like stepping back in time.</p>
        
        <p>From there, we visited Fort Santiago, a fortress rich in history. We learned that it served various roles throughout time as a prison and headquarters for Spanish, British, American, and Japanese forces. The stories of its past gave us a deeper appreciation for the resilience of the Filipino people.</p>
        
        <p>Next, we headed to Rizal Park, also known as Luneta Park, where we saw the iconic Rizal Monument. It was fascinating to learn about the symbolism behind it. The bronze statue of Dr. Jose Rizal stands 22 feet high, representing the 22 languages and dialects he mastered. The 15-step stairway leading to it symbolizes the 15 years between his birth and the moment the nation began to awaken through his writings. His famous novels, Noli Me Tangere and El Filibusterismo, are even interred in the monument's base a touching tribute to his legacy.</p>
        
        <p>We also passed by significant churches such as the Manila Cathedral and the San Agustin Church. The Manila Cathedral has been rebuilt eight times due to destruction by fire, earthquakes, and war the current version was completed in 1958. Meanwhile, the San Agustin Church, built in 1607, holds the title of the oldest stone church in the Philippines.</p>
        
        <p>Another intriguing stop was the Cultural Center of the Philippines (CCP). Aside from its cultural significance, our tour guide shared chilling folklore about workers allegedly buried alive during its rushed construction some claim to hear mysterious footsteps or see moving shadows within the building. It definitely added a spooky twist to our day!</p>
        
        <p>Finally, we wrapped up the tour at SM Mall of Asia in Pasay City, the 4th largest mall in the Philippines and the 14th largest in the world. It was a fun and relaxing way to end a long day. We took time to explore, shop a little, and enjoy the vibrant atmosphere before heading back to our dormitory for dinner and rest.</p>
        
        <p>Day 1 was a perfect mix of history, culture, and excitement. From flying for the first time to walking through the heart of Manila's heritage, it was a day I'll never forget and it was only the beginning!</p>
      `,
      images: [imgday1, imgday1_2, imgday1_3, imgday1_4, imgday1_5, imgday1_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Travel",
    },
    {
      id: 2,
      title: "Day 2: Exploring Subic's Strength — Security, Systems, and Stories",
      date: "April 8, 2025",
      excerpt:
        "Our second day started bright and early with breakfast at 5:00 AM as we prepared for a long but exciting journey to Subic in Olongapo...",
      content: `
        <p>Our second day started bright and early with breakfast at 5:00 AM as we prepared for a long but exciting journey to Subic in Olongapo. By 6:00 AM, we were on the road, beginning our three-hour drive from Quezon City. Though the early wake-up call was a challenge, the road trip was anything but dull, thanks to our ever-energetic tour guide who filled the ride with interesting facts and bits of local history.</p>
        
        <p>One of the first things we learned was about the Subic Bay Metropolitan Authority (SBMA) a thriving free port and economic zone established after the U.S. military's withdrawal in 1992. Located near Olongapo, SBMA is rich in history and now plays a key role in regional development. Our guide also gave us insight into the catastrophic Mount Pinatubo eruption of 1991, which led to devastating lahars that buried entire towns in Pampanga, such as Lourdes and Bacolor. It was eye-opening to realize how nature can drastically reshape lives and landscapes.</p>
        
        <p>Our first stop upon arrival was the Subic Bay Exhibition and Convention Center (SBECC). Inside, we admired a series of oil paintings created by artists from the UP College of Fine Arts. These artworks illustrated the evolution of the Subic Bay Freeport Zone, from the Spanish colonial period up to the modern day. The creative blend of history and artistry gave us a deeper understanding of Subic's transformation over the centuries.</p>
        
        <p>Next, we visited the SBMA Seaport Department, where we got a behind-the-scenes look at how Subic's port operations are managed. The staff presented their advanced Vessel Traffic Management System, which helps coordinate the movement of cargo and ships efficiently and securely. We were particularly impressed by their emphasis on cybersecurity they've chosen not to rely on third-party GPS software, opting instead to use their own internal systems to prevent hacking threats. It was a great example of how innovation and caution go hand in hand.</p>
        
        <p>After a packed lunch and a short break, we proceeded to the SBMA Law Enforcement Department – Communication Branch. The officer who briefed us was both humorous and professional, making the session engaging and insightful. We learned that Subic Bay Freeport has its own police force, working in close coordination with the Philippine National Police (PNP). Their high-tech surveillance system blew us away. The video quality of their CCTV footage especially the zoom clarity was astonishing. They shared a few real (and slightly embarrassing!) stories to show how effective the system is in maintaining peace and order across the Freeport Zone.</p>
        
        <p>We wrapped up our Subic experience with a base tour and some time at their local supermarket. We discovered that residential zones are located far from commercial areas like supermarkets. This setup encourages people to do monthly bulk shopping. We also learned that public transportation like jeeps is rare here most residents own private vehicles. The Freeport Zone is also home to numerous businesses and even flying schools, showcasing its role as a hub for both commerce and education.</p>
        
        <p>By 6:30 PM, we were back in Quezon City. After a long, information-filled day, we had our dinner and took time to rest. Day 2 was both educational and inspiring it gave us a glimpse of how a well-planned zone like Subic can thrive through a combination of discipline, security, and innovation.</p>
      `,
      images: [imgday2, imgday2_2, imgday2_3, imgday2_4, imgday2_5, imgday2_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Education",
    },
    {
      id: 3,
      title: "Day 3: A Walk Through Time — Heroes, History, and the Heart of Nature",
      date: "April 9, 2025",
      excerpt:
        "Day 3 began with a hearty breakfast at 6 a.m. a real feast that left everyone full and satisfied, ready to take on the day...",
      content: `
        <p>Day 3 began with a hearty breakfast at 6 a.m. a real feast that left everyone full and satisfied, ready to take on the day. Since it was a holy day, we were not scheduled to visit any companies or agencies. Instead, the day was reserved for rich cultural exploration and meaningful learning experiences.</p>
        
        <p>Our first destination was Museo ni Manuel Quezon, where we were warmly welcomed by our tour guide. Right away, we were introduced to the architectural and symbolic beauty of the museum. The base of the museum is a triangular structure, which actually serves as the mausoleum of President Manuel L. Quezon and his wife, Aurora. Standing above it are the Pylons of Significance three 66-meter high towers that represent Quezon's age at the time of his death, as well as the three major island groups of the Philippines: Luzon, Visayas, and Mindanao.</p>
        
        <p>Inside the museum, we were taken through the remarkable journey of President Quezon's life, leadership, and legacy. It was inspiring to learn about his efforts and struggles, especially during the time he led the Philippine government-in-exile in the United States. However, his story also had its tragic side, particularly when we learned about the assassination of his wife, Aurora Quezon, and their daughter María Aurora while en route to Baler. Still, there was something beautifully romantic in knowing that Manuel and Aurora now rest together at the Quezon Memorial Shrine a place that holds both honor and remembrance.</p>
        
        <p>After the museum, we had a relaxing walk around Quezon Memorial Circle, where we witnessed the joyful energy of children playing and people enjoying the park's natural beauty. The atmosphere was refreshing and light, a perfect contrast to the emotional depth of our earlier tour.</p>
        
        <p>Next, we visited the Presidential Car Museum, still located within the Quezon Memorial Circle. As someone who appreciates both history and aesthetics, I found this stop surprisingly fascinating. The museum showcases the actual state cars used by past Philippine Presidents, all restored to their former glory. Sleek and vintage, the cars looked as if they could still hit the road today. Personally, I found myself leaning toward the old models more than the modern ones they just had so much character!</p>
        
        <p>After this rich start to the day, we returned to the dorm to have lunch and take a short breather. Later in the afternoon, we headed out again for our next destination: the National Museum of Natural History.</p>
        
        <p>From the moment we entered, the experience felt magical. The first thing that caught everyone's attention was the breathtaking "Tree of Life" a stunning glass-and-steel structure at the center of the museum that also functions as an elevator. It was both a literal and symbolic centerpiece, representing the interconnectedness of the Philippines' diverse ecosystems. A definite 10/10 experience, even just riding it!</p>
        
        <p>As an animal lover, I was in awe. Walking through the museum felt like stepping into a vibrant jungle complete with animal sounds, immersive exhibits, and life-sized replicas. One of the highlights for me was the impressive Lolong replica, a giant saltwater crocodile that once held the record as the world's largest in captivity. The craftsmanship and detail that went into recreating him were absolutely stunning.</p>
        
        <p>Another favorite was Gallery V, which focused on high-elevation forests in the Philippines and showcased the unique wildlife that thrives there. And yes there were owls! That alone made the experience unforgettable for me. Although I felt a little sad seeing preserved animals, I appreciated the way the museum used them for education and awareness. Time flew so fast inside the museum that I felt like I barely scratched the surface, but every moment was worth it.</p>
        
        <p>As the day came to a close, we returned to the dormitory, had dinner, and reflected on the day's adventures. Though we didn't visit any companies, the depth of history, culture, and nature we encountered made Day 3 one of the most enriching experiences yet.</p>
      `,
      images: [imgday3, imgday3_2, imgday3_3, imgday3_4, imgday3_5, imgday3_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "History",
    },
    {
      id: 4,
      title: "Day 4: From Minting Millions to Mixed Realities A Day of Currency and Cutting-Edge Tech",
      date: "April 10, 2025",
      excerpt:
        "Day 4 began just like the others with a hearty breakfast at 6 a.m. The food, once again, didn't disappoint. With satisfied tummies and ...",
      content: `
        <p>Day 4 began just like the others with a hearty breakfast at 6 a.m. The food, once again, didn't disappoint. With satisfied tummies and full energy, we geared up for another exciting day of learning and exploration.</p>
        
        <p>Our first stop for the day was the Bangko Sentral ng Pilipinas (BSP). The moment we arrived, we were already briefed about one thing: security. And they weren't kidding! No gadgets, no bags just a trusty notebook to take down all the important information. It felt intense but also gave us a sense of how crucial and protected this place is, especially as the main institution responsible for issuing our national currency.</p>
        
        <p>Once inside, a representative from BSP welcomed us warmly and explained why the tight protocols were necessary. Every corner of the building was under surveillance, and the security team was highly alert. It felt like walking into a vault of national treasures and in many ways, it was</p>
        
        <p>We were given a detailed presentation about the new polymer banknotes, highlighting the advanced security features like embossed prints, tactile marks, watermarks, and color-shifting ink all designed to prevent counterfeiting. They also discussed why the ₱200 bill wasn't reissued in polymer form: statistically, it's the least used denomination in circulation. Another fun fact: while the carabao is the national animal, it wasn't chosen for the banknotes because they only featured endangered species found in the Philippines.</p>
        
        <p>Another cool part was learning why the ₱20 note was converted into a coin it circulates more often, so making it a coin increases its lifespan. They also showed us the actual process of printing money and creating gold bars. I didn't know that the change of a president's signature also affects currency production. Everything was so technical and impressive I understood why photos weren't allowed; some secrets are better guarded.</p>
        
        <p>After our time at BSP, we returned to the dorm for lunch and a short break before heading out again.
        ur next destination took us to Hytec Power Inc. (HPI) in Novaliches. HPI provides technological solutions and training equipment for both industry and education sectors. They aim to bridge the gap between academic learning and real-world industrial needs something that really resonated with us as students.
        </p>
        
        <p>We were shown a range of advanced learning systems and training simulators, including tools using Extended Reality (XR), which combines Augmented Reality (AR) and Virtual Reality (VR). These immersive tools are used for safe, hands-on training. The highlight? We got to try out some of their robots and training equipment ourselves! It was a fun and futuristic experience seeing how this tech could shape the future of Philippine education and workforce development was very inspiring.</p>
        
        <p>To wrap up the day, our tour bus dropped us off at TriNoma Mall for some free time. We explored, shopped, and relaxed. But the fun didn't end there! After returning to the dorm and having dinner, my friends and I decided to make the most of our time by heading out again this time to SM North EDSA. We walked around, laughed, and soaked in the vibe of the bustling city, making sure to get back before curfew, of course. It was a day packed with learning, tech, and unexpected night strolls. Day 4 was definitely one for the books.</p>
        
       `,
      images: [imgday4, imgday4_2, imgday4_3, imgday4_4, imgday4_5, imgday4_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Technology",
    },
    {
      id: 5,
      title: "Day 5: Tracks, Traffic, and First Train Rides — A Day of Speed and Systems",
      date: "April 11, 2025",
      excerpt:
        "Day 5 began with the perfect combo: warm coffee and a plate full of delicious food at 6 a.m. It was exactly the kind of breakfast we needed for a day packed with...",
      content: `
        <p>Day 5 began with the perfect combo: warm coffee and a plate full of delicious food at 6 a.m. It was exactly the kind of breakfast we needed for a day packed with adventure and insight. After preparing ourselves, we boarded our designated buses—Bus A in my case—and were instructed to wear protective gear and helmets. Why? Because our first stop was the Light Rail Transit Authority (LRTA) Line 2, and safety was non-negotiable.</p>
        
        <p>Excitement bubbled up inside me because this was going to be my first time ever riding a train. I could barely sit still from all the anticipation.
        Upon arrival, a representative from LRTA warmly welcomed us and gave us a briefing. We learned that the LRTA is a government-owned corporation responsible for the construction, operation, and maintenance of light rail systems like Line 2. We were then taken around the facility for a full tour.
        </p>
        
        <p>One of the first safety facts shared with us was about umbrellas apparently, they are not advisable inside stations. Why? Because if one accidentally gets dragged into the overhead lines which carry anywhere from 230V to 400,000V it could lead to dangerous power interruptions. Shutting down power just to remove something as small as an umbrella could disrupt train operations and inconvenience hundreds of passengers. That really put into perspective how every little detail in public transport matters.</p>
        
        <p>We then explored different sections of the LRTA facility, including maintenance areas and emergency response systems. One particularly interesting segment was about how they recover a train stuck mid-track—using a special tugger train to safely tow it out, preventing passengers from having to step onto the tracks.</p>
        
        <p>Then came another cool learning moment: why are there rocks along the tracks? They're called track ballast, and they're essential for track stability, support, and proper drainage all crucial for the safety and smooth running of the train system. A fun surprise? Part of the Shake, Rattle & Roll film series was shot there! That definitely added a pop-culture twist to our educational tour.</p>
        
        <p>We also got to peek inside the control room, where staff work around the clock to monitor and manage train operations. Seeing how every train movement was precisely tracked made me appreciate how complex yet efficient our transport systems really are.
        Then came the moment I had been waiting for: riding the train! As expected, it did not disappoint. That first ride was a mix of thrill, curiosity, and satisfaction—I couldn't stop smiling.
        </p>

        <p>Afterward, we headed back to the dorm for lunch and a much needed rest. But the day was far from over.</p>
        
        <p>In the afternoon, we were off again this time to the Traffic Engineering Center, which also served as the first destination for Bus B. The building itself was tall and modern, and looking out from one of the high floors was already an experience in itself.</p>
        
        <p>We were welcomed into their meeting room, where a representative presented the company's background. They specialize in traffic engineering, planning, and even forensic traffic investigation, offering reliable and technically sound consultancy services. It was fascinating to see how their work directly impacts public safety and urban mobility.</p>
        
        <p>One highlight was the demonstration of their CCTV systems. We were amazed by how advanced and clear their surveillance footage was. We also learned how the center collaborates with law enforcement, especially the Philippine National Police, in providing evidence from traffic footage. But it wasn't all tech and talk—the representative showed us five real-life accident clips as case studies. Those moments were sobering, reminding us how important traffic management and safety truly are.</p>
        
        <p>With a mix of reflection and newfound knowledge, we boarded our bus back to the dorm. Dinner followed shortly after, and though the day had been full, our energy wasn't quite drained yet. So, we decided to cap off the night with a fun karaoke session—singing our hearts out before finally calling it a night. We had to sleep early, after all, since Day 6 would start at 1 a.m.</p>
     
        <p>And just like that, Day 5 came to a close, memorable as ever filled with firsts, facts, and a deeper appreciation for the systems that move and protect us.</p>
         
        `,
      images: [imgday5, imgday5_2, imgday5_3, imgday5_4, imgday5_6, imgday5_5],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Transportation",
    },
    {
      id: 6,
      title: "Day 6: Breezes, Beliefs, and Breathtaking Views Baguio Bound",
      date: "April 12, 2025",
      excerpt:
        "Day 6 kicked off before the sun could even think of rising we woke up at 12 a.m., drowsy but excited, and boarded our buses for the much-anticipated trip to Baguio City. Our departure time was set at 1 a.m...",
      content: `
        <p>Day 6 kicked off before the sun could even think of rising we woke up at 12 a.m., drowsy but excited, and boarded our buses for the much-anticipated trip to Baguio City. Our departure time was set at 1 a.m., with an estimated travel time of around six hours. Naturally, we all dozed off inside the cold, air-conditioned bus, waking only during our two bus stops for bathroom breaks.</p>
        
        <p>At exactly 6 a.m., we arrived in the heart of Baguio—and wow, it instantly lived up to its nickname as the "Summer Capital of the Philippines." Stepping out of the bus felt like walking into a giant air-conditioned room—but better, because it came with the fresh scent of pine trees and cool mountain breeze. The morning chill was refreshing, and we instantly knew this was going to be a day to remember.</p>
        
        <p>Our first stop was the Strawberry Farm, though since it was still early, the actual farm area hadn't opened yet. Fortunately, nearby shops were open, welcoming tourists with souvenirs and food. We shopped, snapped photos, and, of course, tried the famous strawberry taho—a local twist on a classic snack that turned out to be incredibly delicious!</p>
        
        <p>Next, we made our way to the Chinese Bell Church, and along the road, our ever enthusiastic tour guide filled us with fun facts. We learned that Baguio earned its title due to its elevated location and lush greenery, offering a cool escape from the country's usual heat. As we passed the Valley of Colors, the guide told us it was inspired by the favelas of Rio de Janeiro and the Gamcheon Cultural Village of Korea—a wonderful mix of global inspirations turned local gem.</p>
        
        <p>At the Bell Church, we were told something really fascinating: the temple honors five patron saints, each representing Taoism, Confucianism, Islam, Christianity, and Buddhism. That strong message of interfaith unity was humbling. We climbed stairs, took in panoramic views of colorful mountain-side homes, and even made wishes at the wishing well it was equal parts fun and spiritual.After that, we checked into our Baguio hotel, finally getting a chance to rest and eat breakfast. But our exploration was far from over.</p>
        
        <p>Next up was the Philippine Military Academy. Before heading in, we were briefed on the rules: what not to wear and how to behave, given that it's a military training institution. Upon arrival, we were greeted by stalls selling souvenirs and goods, and the entire place had a peaceful yet prestigious vibe. We wandered around, took photos, and soaked in the fresh air the view and breeze there were simply unmatched.</p>
        
        <p>Then it was back to the hotel for lunch and a short rest. Not long after, we were off again, this time to The Mansion House, the official summer residence of the President of the Philippines. The guide gave us a brief history lesson: the Mansion has hosted significant events, including sessions of the Philippine Legislature and serving as home to the first American High Commissioner. The grand gate and elegant façade made it the perfect photo backdrop.</p>
        
        <p>Our final tourist spot for the day was Mines View Park. As we traveled there, our guide once again gave us some cool background info. The park overlooks abandoned gold and copper mines in Benguet, serving as a visual reminder of Baguio's mining roots. Upon arriving, we were greeted by a lively atmosphere—vendors selling all sorts of items, from souvenirs and exotic plants to tasty local snacks. My friends tried on traditional outfits, we saw the adorable St. Bernard dogs, and even took some horseback riding photos.</p>
        
        <p>Once we reached the Observation Deck, the view was nothing short of breathtaking. We rented binoculars to spot the old mines and took tons of photos. With the high-altitude scenery and cool wind, it felt like we were in another world entirely.</p>
        
        <p>As the sun began to set, we returned to our buses and headed back to the hotel for dinner. But the day wasn't over yet—after eating, we went out once more to explore the famous Baguio Night Market. The place was buzzing with energy crowds, colorful lights, rows of bargains, and unique finds at every corner. We shopped to our hearts' content, satisfied with both the experience and our purchases.</p>
     
        <p>And with that, Day 6 ended cold air, warm memories, and bags full of souvenirs in tow.</p>
        
        `,
      images: [imgday6, imgday6_2, imgday6_3, imgday6_4, imgday6_5, imgday6_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Travel",
    },
    {
      id: 7,
      title: "Day 7: Chilling Goodbyes and City Strolls — The Calm Before Home",
      date: "April 13, 2025",
      excerpt:
        "I woke up on Day 7 feeling unusually at peace. The bed was warm and cozy, the room was quiet, and as I opened the window, a gentle breeze welcomed me...",
      content: `
        <p>I woke up on Day 7 feeling unusually at peace. The bed was warm and cozy, the room was quiet, and as I opened the window, a gentle breeze welcomed me cool, refreshing, and distinctly Baguio. It was my first time staying in a hotel, and I found myself silently appreciating the little luxuries, like soft pillows and the serene mountain air. It was a simple yet memorable morning.</p>
        
        <p>At 7 a.m., we had breakfast, and for the first time in days, we were given the entire morning to ourselves. Some of my classmates decided to visit Burnham Park, but my partner and I had other plans. We set off on foot to SM Baguio, and even though the sun was already high in the sky, the walk was cool and pleasant so unlike the heat we're used to. It was a strange but welcome feeling.</p>
        
        <p>The most fascinating part? SM Baguio doesn't even use air conditioning yet it feels like it does. The mall's open design and Baguio's naturally cold climate work together in perfect harmony. We spent the morning exploring, taking pictures, window shopping, and simply soaking in every moment of our last day in this mountain paradise.</p>
        
        <p>As the sun crept higher, we returned to the hotel for lunch and started packing our things. It felt too soon. Like Baguio was just starting to open up to us, and suddenly we had to go. When it was finally time to leave, we boarded our bus with bags full of souvenirs and hearts heavy with the weight of farewell. As we pulled away from the city, everyone waved their own quiet goodbyes some smiling, some just staring out the window in thoughtful silence.</p>
        
        <p>We arrived back at the dorm around nightfall. Some of our classmates still had enough energy to venture out and explore parts of Manila for one last time. But for those of us who stayed behind, we shared dinner and a few final conversations. We laughed, talked about the trip, clinked a few drinks together, and took in the final stretch of our journey.</p>
        
        <p>As I laid in bed that night, I couldn't help but feel a bittersweet mix of emotions. It was our last night in the dorm the same dorm that had become a second home in just a few days. Everything felt like a blur. From the excitement of Day 1 to the cool winds of Baguio and now, this quiet ending. It really did feel like the whole experience flew by in a flash.</p>
        
        <p>And just like that, Day 7 came to a close—a quiet, reflective end to a loud, fun, and unforgettable adventure.</p>
        
      `,
      images: [imgday7, imgday7_2, imgday7_3, imgday7_4, imgday7_5, imgday7_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Reflection",
    },
    {
      id: 8,
      title: "Day 8: The Long Goodbye — Manila in the Rearview",
      date: "April 14, 2025",
      excerpt:
        "The final day of our OJT tour began with a simple breakfast that somehow felt different. As we quietly ate, there was a feeling of contentment and closure in the air...",
      content: `
        <p>The final day of our OJT tour began with a simple breakfast that somehow felt different. As we quietly ate, there was a feeling of contentment and closure in the air. Each bite was a reminder of the warmth and hospitality we'd experienced throughout our stay. We had grown used to this dorm, this routine, this temporary life away from home and now, it was time to say goodbye.</p>
        
        <p>We packed our things carefully, making sure no memory was left behind. As we boarded the bus, I took one last look at the dorm, the place that sheltered us during our Manila adventure. I thanked the staff who had taken care of us and turned away with a quiet smile, taking my seat as the engine roared to life.</p>
        
        <p>As we traveled down the Expressway, the city slowly unfolded in reverse—the landmarks we visited, the streets we walked, and even places we never got the chance to explore. All of it blended into a final scenic reminder of how far we'd come. Closer to the airport, our tour guide bid us farewell, and we made sure to thank him for his stories, guidance, and the energy he carried throughout the trip.</p>
        
        <p>At the airport, we said our last goodbye to the DJM Tours and Travel Service crew, who played such a big part in making this experience safe and memorable. While waiting for our flight, we opened our packed lunch, and as I took the final bite, I realized just how much I appreciated the food they lovingly prepared for us every day. It wasn't just the flavor it was the feeling of being cared for.</p>
        
        <p>Once aboard the plane, as the aircraft took off, I found myself waving silently at the window, saying goodbye to Manila in my own quiet way. A flood of memories rushed in—laughter, bus rides, city lights, cold breezes in Baguio, and the thrill of learning something new each day. It was a bittersweet moment—one filled with deep satisfaction and a hint of longing.</p>
        
        <p>When we finally landed in Zamboanga, the sight of familiar faces waiting to welcome us back warmed my heart. We were home. I hugged my family tight and reunited with my pets, their excitement making me laugh. And as I lay back in my own bed that night, I couldn't help but reflect: the OJT tour was finally over. It felt like a dream one filled with knowledge, friendship, first times, and unforgettable memories.</p>
        
        <p>With that, Day 8 and our unforgettable journey came to an end.</p>
        
      `,
      images: [imgday8_5, imgday8_2, imgday8_3, imgday8_4, imgday8, imgday8_6],
      institution: "WESTERN MINDANAO STATE UNIVERSITY",
      program: "INFORMATION TECHNOLOGY EDUCATIONAL FIELDTRIP AND SEMINAR",
      category: "Reflection",
    },
  ]

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedBlog(null)
  }

  return (
    <div className="blog-page-container">
      <div className="blog-page-content">
        {selectedBlog ? (
          <div className="blog-detail content-container">
            <div className="blog-header">
              <div className="institution-header">
                <h3>{selectedBlog.institution}</h3>
                <h4>{selectedBlog.program}</h4>
                <div className="header-line"></div>
              </div>

              <h1 className="blog-detail-title gradient-text text-outline">{selectedBlog.title}</h1>
              <p className="blog-date">{selectedBlog.date}</p>
            </div>

            <button className="back-button" onClick={handleBack}>
              &larr; Back to All Posts
            </button>

            {/* Top image */}
            <div className="blog-top-image">
              <img src={selectedBlog.images[0] || "/placeholder.svg"} alt={`${selectedBlog.title} - main image`} />
              <p className="image-caption">Figure 1. {selectedBlog.title}</p>
            </div>

            {/* First two paragraphs */}
            <div
              className="blog-content-section"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content.split("<p>").slice(0, 3).join("<p>") }}
            />

            {/* Middle images - left side */}
            <div className="blog-middle-images-left">
              <div className="blog-image">
                <img src={selectedBlog.images[1] || "/placeholder.svg"} alt={`${selectedBlog.title} - image 2`} />
                <p className="image-caption">Figure 2. {selectedBlog.title}</p>
              </div>
              <div className="blog-image">
                <img src={selectedBlog.images[2] || "/placeholder.svg"} alt={`${selectedBlog.title} - image 3`} />
                <p className="image-caption">Figure 3. {selectedBlog.title}</p>
              </div>
            </div>

            {/* Middle paragraphs */}
            <div
              className="blog-content-section"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content.split("<p>").slice(3, 6).join("<p>") }}
            />

            {/* Middle images - right side */}
            <div className="blog-middle-images-right">
              <div className="blog-image">
                <img src={selectedBlog.images[3] || "/placeholder.svg"} alt={`${selectedBlog.title} - image 4`} />
                <p className="image-caption">Figure 4. {selectedBlog.title}</p>
              </div>
              <div className="blog-image">
                <img src={selectedBlog.images[4] || "/placeholder.svg"} alt={`${selectedBlog.title} - image 5`} />
                <p className="image-caption">Figure 5. {selectedBlog.title}</p>
              </div>
            </div>

            {/* Remaining paragraphs */}
            <div
              className="blog-content-section"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content.split("<p>").slice(6).join("<p>") }}
            />

            {/* Bottom image */}
            <div className="blog-bottom-image">
              <img
                src={selectedBlog.images[5] || "/placeholder.svg"}
                alt={`${selectedBlog.title} - conclusion image`}
              />
              <p className="image-caption">Figure 6. {selectedBlog.title}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="blog-header-section">
              <h1 className="blog-page-title gradient-text text-outline">Blog Post</h1>
            </div>

            <div className="blog-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card content-container" onClick={() => handleBlogClick(blog)}>
                  <div className="blog-card-image">
                    <img src={blog.images[0] || "/placeholder.svg"} alt={blog.title} />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-category">{blog.category}</div>
                    <h3 className="blog-card-title gradient-text text-outline">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{blog.date}</span>
                      <span className="blog-read-more">Read More →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPage
