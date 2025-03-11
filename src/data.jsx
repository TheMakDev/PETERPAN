import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,
        blog_1,blog_2,blog_3,project_1,project_2,project_5,project_3,project_4,project_6} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Portfolio",id:'portfolio'},
    {name:"Product",id:'product'},
    // {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"Artificial Intelligence, Machine Learning and Data Science",
    icon:<AiOutlineFileProtect/>,
    description:`Leveraging on the power of data for building bespoke automated solutions for businesses.`,
  },
  {
    name:"Servers, Networks & Cyber Security",
    icon:<SiBlueprint/>,
    description:`This involves managing the entire IT infrastructure from start to finish, including configuring servers, implementing cybersecurity measures, optimizing network performance, and ensuring compliance with industry standards and regulations.`,
  },
  {
    name:"Website, Software & Forensics",
    icon:<FaDrawPolygon/>,
    description:`This service integrates website development, software creation, and digital forensics into a single streamlined process, enhancing efficiency and ensuring seamless communication between development and security teams.

    `,
  },
  {
    name:"Cloud Computing Services:",
    icon:<GrUserManager/>,
    description:`Microsoft Azure, Microsoft 365, Google Cloud Services and Amazon Web Services. Deployment, migration and configuration services`,
  },
  {
    name:"UI/UX Design & Frontend Development",
    icon:<SiHomeassistantcommunitystore/>,
    description:`This service integrates user interface design, user experience optimization, and frontend development into a seamless process, ensuring visually appealing, responsive, and user-friendly digital experiences while maintaining efficient collaboration between designers and developers.`,
  },
  {
    name:"System Upgrades & Optimization",
    icon:<IoConstructSharp/>,
    description:`This service integrates hardware upgrades, software enhancements, and network optimizations into a seamless process, ensuring improved performance, security, and compatibility while maintaining efficient communication between IT and security teams.`,
  },
]

export const teams = [
  {
    name:"Peter Opeyemi James",
    title:"Founder",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Aboi Samson Aboi",
    title:"Systems Engineer",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },{
    name:"James Samuel Enitan",
    title:"Web Developer",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Data Science Training",
    image:project_1,
    description:`raining of members of Plateau State Government's Result Monitoring and Projects Delivery Unit on the use of Data for accessing projects within the state. October 2020, we trained members of the Plateau State government Results Delivery and Monitoring Unit on the use of advanced data analysis tools. The training held in Jos in partnership with TAXSERVE International Services.`,
  },
  {
    title:"Domain Controller at Marshal Star",
    image:project_3,
    description:`Deployment of Windows Server 2012 Active Directory Domain Services at the Corporate headquarters of Marshal Star Services Limited. Before the deployment of our solution, the company had suffered data theft and sabotage by staff. In 2015 particularly, a staff was sacked and the fellow, in turn, carted away very sensitive data of the organization. Also, the company had suffered from various malware infections as a result of the peer-to-peer networking that was in place. Our solution introduced a proper corporate networking system managed by a domain controller. Since installation to date, the company has not had a single case of malware infection and they are now more comfortable with their sensitive files.`,
  },
  {
    title:"NaturesGift Wellness",
    image:project_6,
    description:`Natures Gift Wellness is a Lagos based massaging company. PeterPan IT Solutions has developed a solution that`,
  },
  {
    title:"Development of Online Administration Portal",
    image:project_4,
    description:`Development of a robust and reliable online reporting platform for one of Africa's foremost dry cleaning companies, PrimeWash Limited. PrimeWash Limited is a leading dry cleaning company in Nigeria and Africa. With branches across Nigeria, the workload for management from day to day can be hucculean. Our solution simplified their reporting processes by introducing a full fledge reporting platform to replace their style of sending emails for every activity, making it difficult to extrapolate data for analysis and decision making..`,
  },
  {
    title:"Deployment of DNA Sanger Sequencer at Nigerian Defence Academy",
    image:project_2,
    description:`We installed, trained and deployed a DNA Sanger Sequencer at the Department of BioTechnology, Nigerian Defence Academy.During deployment, we observed a factory error on the machine, thankfully, our team followed manufacturer's specifications and rectified the factory error in the process.`,
  },
  {
    title:"Deployment and Computer Forensics Training",
    image:project_5,
    description:`Deployment and training of members of Faculty of the Department of Cyber Security, Faculty of Military Sciences, Nigerian Defence Academy.Some of the solutions deployed include: DIGITAL EVIDENCE INVESTIGATOR, BELKASOFT EVIDENCE CENTRE, PARABEN ELECTRONIC EVIDENCE CENTRE, and ACCESSDATA.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Enitan samuel',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile3,
    name:'Toluwa adeshina',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria ayanlo',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile5,
    name:'Precious Kiola',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const blogs = [
  {
      title:"The Future of IT Support: Trends You Can’t Afford to Ignore",
      image:blog_1,
      category:"IT Innovations",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"AI in IT Support: How Automation is Changing the Game",
      image:blog_2,
      category:"Tech Trends",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"The Rise of Remote IT Support: Benefits and Challenges",
      image:blog_3,
      category:"IT Support",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"info@peterpanng.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+234 703 923 7226",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Ogbomoso | Kaduna | Port Harcourt, Nigeria.",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Portfolio",id:'PortFolio'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


