import {
  mobile,
  backend,
  user,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  webDev,
  mobileDev,
  systemDev,
  consultancy,
  fundraising,
  marketing,
  startup,
  leadership,
  product,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Business Consultancy",
    icon: backend,
  },
  {
    title: "Fundraising",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Design & Development",
    company_name: "Starbucks",
    icon: webDev,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: `We excel in crafting visually appealing and user-friendly websites that are customized to your brand and objectives. Our focus on user experience ensures intuitive navigation and optimized conversion rates. We build websites with scalability in mind, allowing your online presence to grow seamlessly with your business. Leveraging cutting-edge web technologies and frameworks, we bring innovation to your digital presence.`,
  },
  {
    title: "System Development",
    company_name: "Tesla",
    icon: systemDev,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: `Our expertise lies in analyzing your operations and designing systems that streamline processes, reducing inefficiencies and costs. We seamlessly integrate data across your organization, facilitating improved decision-making and resource allocation. The systems we build are scalable and reliable, capable of handling increased loads while maintaining uptime. Robust security measures are a priority, safeguarding your data and protecting against cyber threats.`,
  },
  {
    title: "Mobile Development",
    company_name: "Shopify",
    icon: mobileDev,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: `We specialize in developing mobile applications for iOS and Android platforms, expanding your reach to a wider audience. Our commitment to user experience ensures that the apps we create are not only functional but also intuitive and visually appealing. We optimize app performance for speed, responsiveness, and efficient resource usage. Our support doesn't end with the launch; we provide ongoing updates and support to keep your app competitive.`,
  },
  {
    title: "Business Consultancy",
    company_name: "Meta",
    icon: consultancy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Our business consultancy services are designed to help you navigate the complexities of the business landscape. We develop clear and effective strategies tailored to your unique needs and objectives. Our market research expertise allows us to analyze trends, competition, opportunities, and threats, providing you with actionable insights. We optimize your processes and resource allocation for maximum efficiency and profitability and guide your organization through periods of change with strong and effective leadership.`,
  },
  {
    title: "Fundraising Services",
    company_name: "Meta",
    icon: fundraising,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Raising capital is a critical aspect of business growth, and we specialize in developing fundraising strategies tailored to your specific needs and objectives. We establish connections with potential investors, present your case effectively, and secure the necessary capital for your growth initiatives. Our assistance includes financial modeling, budgeting, and forecasting to ensure effective resource allocation. We craft compelling investment pitches and presentations that leave a lasting impression on potential investors.`,
  },
  {
    title: "Branding & Marketing Strategies",
    company_name: "Meta",
    icon: marketing,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Building a strong brand identity is essential in today's competitive market, and we help you achieve just that. We create a brand identity that resonates with your target audience and sets you apart from competitors. Our comprehensive digital marketing campaigns, executed across various platforms, increase your visibility and engage your audience effectively. We create engaging content that tells your brand's story and captivates your audience. Continuous monitoring and analysis of campaign performance allow us to optimize strategies for better results.`,
  },
  {
    title: "Startup Consultancy",
    company_name: "Meta",
    icon: startup,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Navigating the challenges of the startup world can be daunting, and our startup consultancy services provide expert guidance from inception to success. We assist in business planning, market entry strategies, and positioning for success in a competitive landscape. Efficient resource allocation is crucial for sustainable growth, and we help startups make the right decisions. We also provide mentorship and insights throughout the startup journey.`,
  },
  {
    title: "Strategic Leadership",
    company_name: "Meta",
    icon: leadership,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Effective leadership is the cornerstone of organizational success, and we equip leaders with the skills and mindset to navigate complex challenges and inspire their teams. We foster a culture of innovation and strategic thinking within your organization, empowering teams with leadership tools and practices to excel in their roles. During times of transition, our guidance and support ensure a smooth journey for your organization.`,
  },
  {
    title: "Product Management",
    company_name: "Meta",
    icon: product,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: `Successful product development requires a clear roadmap aligned with your business goals and user needs. We prioritize features based on market demand, user feedback, and resource availability. Throughout the development process, we oversee every aspect to ensure timely and quality product releases. Our planning and execution of product launches maximize market impact, driving success for your products.`,
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a multi-vendor platform to connect both businesses and consumer for my startup as our product, but Trigertron proved me wrong.",
    name: "Mohd Abuzar",
    designation: "CEO",
    company: "Poochiee",
    image: user,
  },
  {
    testimonial:
      "I've never met a technology firm who truly cares about their clients' success like Trigertron does.",
    name: "Akash Boxi",
    designation: "Freelancer",
    company: "Media Housing",
    image: user,
  },
  {
    testimonial:
      "After Trigertron optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Divyajyoti Puhan",
    designation: "CTO",
    company: "Sankatha",
    image: user,
  },
];

const projects = [
  {
    name: "Pet Care Platform - Poochiee",
    description:
      "Poochiee is your go-to platform for all things pet-related. We offer a wealth of resources, services, and a vibrant community to enhance the lives of pets and their owners. From expert care advice and grooming tips to adoption resources and a supportive network, Poochiee has it all. Join our community of passionate pet lovers to celebrate the joys of pet ownership and ensure your beloved companions receive the love and care they deserve.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webDev,
    source_code_link: "https://poochiee.in/",
  },
  {
    name: "Social Media Platform - Sankatha",
    description:
      "Sankatha is a dynamic social media platform akin to Twitter but dedicated to giving voice to the underrepresented. It thrives on discussions encompassing spirituality, science, culture, and technology. It is more than just a social network; it's a catalyst for societal change, fostering inclusivity and progress. With its diverse user base, Sankatha empowers individuals to engage in meaningful conversations and build connections that transcend boundaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mobileDev,
    source_code_link: "https://sankatha-web.vercel.app/"
  },

];

export { services, technologies, experiences, testimonials, projects };
