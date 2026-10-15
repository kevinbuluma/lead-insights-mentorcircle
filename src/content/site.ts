export const brand = { name: 'Lead Insights Africa Consulting', email: 'jmburia@leadinsightsafrica.com', linkedin: 'https://www.linkedin.com/in/jane-mburia', location: 'Nairobi, Kenya' };
export const navigation = [
  {label:'About',to:'/about'}, {label:'Services',to:'/services'}, {label:'International Growth',to:'/international-growth'}, {label:'Leadership & Culture',to:'/leadership-culture'}, {label:'MentorCircle',to:'/mentorcircle'}, {label:'Insights',to:'/insights'}, {label:'Contact',to:'/contact'},
] as const;
export const services = [
 {slug:'strategic-advisory',title:'Strategic Advisory & Management Consulting',short:'Clarity for the decisions that matter.',description:'Reviewing strategy, clarifying growth priorities and strengthening organisational effectiveness.',details:['Strategy review and growth priorities','Organisational effectiveness','Leadership alignment and implementation planning']},
 {slug:'business-development',title:'Business Development & Market Representation',short:'Local presence. Regional opportunity.',description:'Supporting organisations entering or growing across Kenya and East Africa through in-market representation, relationship building and opportunity development.',details:['Business development and market representation','Stakeholder engagement and strategic partnerships','Local market intelligence']},
 {slug:'corporate-investor-advisory',title:'Corporate & Investor Advisory',short:'The right perspective. The right connections.',description:'Supporting stakeholder engagement, strategic introductions, market intelligence and investor conversations.',details:['Stakeholder mapping and engagement','Strategic introductions and investor conversations','Market intelligence and partnership development']},
 {slug:'experience-culture-transformation',title:'Customer, Employee & Culture Transformation',short:'Stronger experiences, from the inside out.',description:'Improving customer experience, employee experience, operational excellence and workplace culture.',details:['Customer experience strategy and design','Employee experience and culture transformation','Customer insights and data-led transformation','Operations and service excellence advisory','Digital and tech-enabled solutions partnerships']},
 {slug:'leadership-coaching',title:'Leadership Mentorship & Professional Coaching',short:'Perspective for your next chapter.',description:'Supporting leaders and professionals through mentoring, executive coaching, career development and leadership growth.',details:['Leadership mentorship and professional coaching','Corporate mentorship programmes','Leadership team development','Workplace culture transformation']},
 {slug:'capacity-building',title:'Capacity Building & Training Facilitation',short:'Capability that moves organisations forward.',description:'Designing and facilitating tailored workshops and programmes that build organisational capability.',details:['Capacity building and training facilitation','Tailored leadership workshops','Team learning and facilitated conversations']},
];
export const serviceGroups = [
 {title:'Strategy, Growth & Market Access',items:['Strategic Advisory & Management Consulting','Business Development & Market Representation','Corporate & Investor Advisory','Stakeholder Engagement and Strategic Partnerships','Local Market Intelligence']},
 {title:'Experience, Operations & Transformation',items:['Customer Experience Strategy & Design','Employee Experience & Culture Transformation','Customer Insights and Data-Led Transformation','Operations and Service Excellence Advisory','Digital and Tech-Enabled Solutions Partnerships']},
 {title:'Leadership & Capability',items:['Leadership Mentorship and Professional Coaching','Corporate Mentorship Programmes','Capacity Building and Training Facilitation','Leadership Team Development','Workplace Culture Transformation']},
];
export const programmeAreas = [
 {title:'Executive and Career Coaching',description:'For professionals navigating growth, transitions, leadership opportunities and career direction.'},
 {title:'Mentorship',description:'Practical guidance, perspective and accountability for emerging and experienced leaders.'},
 {title:'Corporate Leadership Programmes',description:'Tailored programmes for organisations investing in stronger leaders, teams and workplace cultures.'},
 {title:'Growth & Leadership Conversations',description:'Thoughtful sessions, forums and learning experiences that bring people together around leadership, work and purposeful growth.'},
];
export const programmes: {id:string; title:string; date:string; description:string}[] = [];
export const insightCategories = ['Growth & Market Access','Leadership & Culture','Customer & Employee Experience','Mentorship & Career Development','Conversations with Jane'];
export const insights: {slug:string; title:string; category:string; body:string}[] = [];
export const team = [{name:'Jane Mburia',role:'CEO & Principal Consultant',biography:'Jane Mburia is the CEO and Principal Consultant of Lead Insights Africa Consulting. She is a strategic advisor, board member, mentor, coach and management consultant with over two decades of executive experience across leading local and multinational financial institutions in Sub-Saharan Africa.',portrait:null}];
export const experience = [
 'Senior leadership experience across leading financial institutions, including Citigroup, Barclays Kenya, ABSA Africa Regional Office and Co-operative Bank of Kenya.',
 'Deep relationships across corporate, financial, public-sector and leadership networks.',
 'A practical approach that combines strategic thinking with implementation support.',
 'Regional understanding for organisations navigating Kenya, East Africa and wider African markets.',
 'Leadership and culture expertise grounded in real corporate experience.',
];
export const marketSteps = ['Understand the market','Shape the opportunity','Build the right relationships','Support action on the ground'];
