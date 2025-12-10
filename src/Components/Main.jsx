import CXLogo from "./../assets/Cimg2.png";
import FutureBanksLogo from './../assets/Fimg1.png';
import WomenLeadersLogo from './../assets/wimg3.png';
export default function Main(){
   
  const whoWillMeet = [
    "CXOs, VPs, Directors",
    "Chief Marketing Officers",
    "Heads of Customer Experience & UX",
    "Heads of Customer Insights & Analytics",
    "Heads of Digital Transformation",
    "Heads of Customer Loyalty & Brand Loyalty",
    "Heads of Customer Value & Loyalty Partnerships",
    "Heads of Rewards and Loyalty",
  ];

  const industries = [
    "BFSI",
    "Retail & E-Commerce",
    "Telecommunication",
    "Hospitality",
    "Travel & Tourism",
    "Aviation",
    "FMCG & CPG",
    "Others",
  ];

  const topicHighlights = [
    "Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally",
    "Brand communities driving Loyalty, Retention & Advocacy",
    "Delivering the ‘Unattainable’ CX dream and transformation towards Hyper Personalization",
    "Unveiling how exceptional brands retain their customers and build loyalty",
    "Using Data, CRM, and Marketing Automation to drive friction-free experiences",
    "Driving Customer Loyalty and Top-line revenue through Gamification",
    "Linking Voice of the Employee and Voice of the Customer",
    "Using social media to improve brand perception and shape the Customer Experience",
    "Ensuring effective complaint handling as the foundation of a Customer Retention Strategy",
    "How loyalty programs boost revenue and how to measure it",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
     
      <header className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white py-16">
        <div className="container mx-auto px-6 lg:px-32 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            2nd Annual CX & LOYALTY SUMMIT MENA 2023
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            1st-2nd November 2023 | Dubai, UAE
          </p>
          <p className="mt-2 italic text-sm md:text-base">
            Driving revenue building relations through CX transformation & increased brand Loyalty
          </p>

          {/* Event Logos */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <img src={CXLogo} alt="CX Loyalty Summit" className="h-16 object-contain" />
            <img src={FutureBanksLogo} alt="Future Banks Summit" className="h-16 object-contain" />
            <img src={WomenLeadersLogo} alt="Women Leaders Summit" className="h-16 object-contain" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <a
              href="#register"
              className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Register Now
            </a>
            <a
              href="#topics"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-indigo-700 transition"
            >
              View Topics
            </a>
          </div>
        </div>
      </header>
 
       <main className="container mx-auto px-6 lg:px-32 py-12 space-y-16">
         {/* About Section */}
         <section id="about">
           <h2 className="text-2xl md:text-3xl font-bold mb-4">Event Overview</h2>
           <p className="text-slate-700 leading-relaxed">
             A strong customer experience, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries...
           </p>
         </section>
 
         {/* Who Will You Meet */}
         <section id="who">
           <h2 className="text-2xl md:text-3xl font-bold mb-6">Who Will You Meet?</h2>
           <ul className="list-disc pl-6 space-y-2">
             {whoWillMeet.map((person, i) => (
               <li key={i}>{person}</li>
             ))}
           </ul>
         </section>
 
         {/* Target Industries */}
         <section id="industries">
           <h2 className="text-2xl md:text-3xl font-bold mb-6">Target Industries</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
             {industries.map((industry, i) => (
               <div
                 key={i}
                 className="bg-white p-4 rounded-lg shadow text-center font-medium hover:scale-105 transform transition"
               >
                 {industry}
               </div>
             ))}
           </div>
         </section>
 
         {/* Why Attend */}
         <section id="why">
           <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Attend?</h2>
           <ul className="list-disc pl-6 space-y-2 text-slate-700">
             <li>Gain Knowledge and Insights from Top Industry Leaders</li>
             <li>Network with Industry Peers</li>
             <li>Discuss Significant Partnerships and Collaborations</li>
             <li>Deep Dive into Insights derived from real-time case studies</li>
             <li>Build Industry Ecosystem Collaboration</li>
           </ul>
         </section>
 
         {/* Topic Highlights (Accordion) */}
         <section id="topics">
           <h2 className="text-2xl md:text-3xl font-bold mb-6">Topic Highlights</h2>
           <div className="space-y-2">
             {topicHighlights.map((topic, i) => (
               <details key={i} className="bg-white p-4 rounded-xl shadow">
                 <summary className="cursor-pointer font-medium">{topic.split(":")[0]}</summary>
                 <p className="mt-2 text-slate-700">{topic}</p>
               </details>
             ))}
           </div>
         </section>
 
         {/* Sponsor Section */}
         <section id="sponsor" className="bg-indigo-50 p-6 rounded-xl shadow">
           <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Sponsor?</h2>
           <p className="mb-2">
             The Summit presents the perfect opportunity for solution providers to engage with key decision-makers across diverse industries.
           </p>
           <p>Contact: +919876543210 | Email: abcd@gmail.com</p>
         </section>
 
         {/* Registration Form */}
         <section id="register">
           <h2 className="text-2xl md:text-3xl font-bold mb-4">Register</h2>
           <form className="max-w-xl bg-white p-6 rounded-xl shadow space-y-4">
             <div>
               <label className="block text-sm font-medium">Full Name</label>
               <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your full name" />
             </div>
             <div>
               <label className="block text-sm font-medium">Email</label>
               <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
             </div>
             <div className="flex flex-col sm:flex-row sm:items-center gap-3">
               <button type="button" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                 Submit
               </button>
               
             </div>
           </form>
         </section>
       </main>
 
       {/* Footer */}
       <footer className="bg-slate-800 text-white py-8 text-center">
         <p>© 2023 CX & Loyalty Summit MENA. Website: www.cxloyaltymena.com</p>
       </footer>
     </div>)
} 
  
