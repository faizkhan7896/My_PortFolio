import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Alfaiz khan',
  title: "Hi all, I'm Alfaiz",
  description:
    'I am a developer who loves building scalable, performant apps. I am passionate about JavaScript, react-native, Android & IOS Application development, redux & Build app and UI components from prototypes Work with native modules as and when required. Use Native APIs for tight integrations with both platforms – Android and iOS. Interested in Continuation of learning and Cooperation with excellent people.',
  resumeLink: 'https://drive.google.com/file/d/1qvuoWs9WJfY0WnOhJra5pZD-XxJVfPCl/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'faizkhan7896',
};

export const contact = {};

export const socialLinks = {
  // facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/faiz_yousaf_zai/',
  twitter: 'https://twitter.com/Alfaiz_khan789',
  github: 'https://github.com/faizkhan7896',
  linkedin: 'https://www.linkedin.com/in/alfaiz-khan-94647b202/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY REACT-NATIVE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Android and IOS Application Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Build app and UI components from prototypes'),
        emoji('⚡ Use Native APIs for tight integrations with both platforms – Android and IOS'),
        emoji('⚡ Work with native modules as and when required'),
        emoji('⚡ Building scalable, performant Apps using React Native'),
        emoji('⚡ Building responsive Single-Page-Apps.'),
        emoji('⚡ Building responsive Web Apps.'),
        emoji('⚡ Building responsive static Apps using React Native'),
        // emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'React-Native',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassname: 'logos:bootstrap',
        },
        {
          skillName: 'HTML',
          fontAwesomeClassname: 'fa-html5',
        },
        {
          skillName: 'CSS',
          fontAwesomeClassname: 'fa-css3',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'logos:github',
        },
        {
          skillName: 'Visual Studio',
          fontAwesomeClassname: 'logos:visual-studio-code',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Figma Design (UI/UX)', //Insert stack or technology you have experience in
    progressPercentage: '40', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'React-Native', //Insert stack or technology you have experience in
    progressPercentage: '75', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '30',
  },
  {
    Stack: 'Programming',
    progressPercentage: '72',
  },
  {
    Stack: 'GitHub',
    progressPercentage: '70',
  },
  {
    Stack: 'Visual Studio',
    progressPercentage: '85',
  },
];

export const educationInfo = [
  {
    schoolName: 'ILVA Higher Secondary School',
    subHeader: 'Complete Higher Secondary School',
    duration: 'March 2021',
    desc: 'Participated in the research of XXX and published 3 papers.',
    descBullets: ['Passed Secondary school', 'Passout higher secondary school'],
  },
  {
    schoolName: 'Makhanlal Chaturvedi University',
    subHeader: 'BCA (Bachelors in Computer Application)',
    duration: 'September 2021 - running',
    desc: 'Participated in the research of XXX and published 3 papers.',
    descBullets: ['Passed a first year', 'Currently running a 2nd year'],
  },
];

export const experience = [
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companylogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   descBullets: ['Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
  // },
  {
    role: 'Senior React Native Developer',
    company: 'Technorizen Software Solution',
    companylogo: '/img/icons/common/Techno.jpeg',
    date: 'Aug 2021 (Present)',
    desc: 'Build app and UI components from prototypes and wireframes. Work with native modules as and when required. Use Native APIs for tight integrations with both platforms – Android and iOS. Write automated tests to ensure error-free code and performance.',
  },
  {
    role: 'Junior React Native Developer',
    company: 'Avalanche Infotech Pvt Ltd',
    companylogo: '/img/icons/common/Avlanche.jpeg',
    date: 'Oct 2020 - Aug 2021',
    desc: 'Worked as React-Native Junior developer to create a Apps UI.',
  },
];

export const projects = [
  {
    name: 'Rocket.Chat',
    Screenshots: '/img/icons/common/rocketChat.png',
    desc: 'Rocket.Chat is a customizable open source communications platform for organizations with high standards of data protection. It enables real-time conversations between colleagues, with other companies or with your customers, across devices on web, desktop or mobile.  The result is an increase in productivity and customer satisfaction rates. Everyday, tens of millions of users in over 150 countries and in organizations such as Deutsche Bahn, The US Navy and Credit Suisse trust Rocket.Chat to keep their communications completely',
    link: 'https://play.google.com/store/apps/details?id=chat.rocket.android',
  },
  {
    name: 'Wyzant - Find a tutor',
    Screenshots: '/img/icons/common/wyzant.png',
    desc: 'The Wyzant App makes it easy for parents and students to instantly connect with expert tutors for in-person and online lessons.',
    link: 'https://apps.apple.com/us/app/wyzant-find-tutors-for-homework/id1042081370',
  },
  {
    name: 'Innclude',
    desc: 'Include is an event platform where you can create private events between you and users in your phone directory. You can also create events that the entire city can see and you can interact with other users.',
    Screenshots: '/img/icons/common/include.png',
    link: 'https://apps.apple.com/tr/app/innclude/id1460835077?l=tr&platform=iphone',
  },
  {
    name: 'CodeMode',
    desc: 'It is an online platform for students to take the tests and teachers to create those tests - all examinations covered. CodeMode provides students insight into their preparation and performance using advance data analysis. Students can see their strength and weakness by subject and topics, compare themselves at national and international level, understand their improvement over a period of time, find test taking pattern, access wide variety of practice tests and get a clear picture on speed as well as accuracy. The more you practice, more you will know about yourself and better you will become - that is a how CodeMode helps you.',
    Screenshots: '/img/icons/common/codemode.png',
    link: 'https://play.google.com/store/apps/details?id=com.perfectice',
  },
  {
    name: 'Almedad Annateq المداد الناطق',
    desc: 'Mushaf Almedad Annateq has new idea for reading arabic that using the color coding system which created by Nael Hijaz',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/Arabic.png',
    link: 'https://apps.apple.com/us/app/almedad-annateq-%D8%A7%D9%84%D9%85%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B7%D9%82/id1644702380',
  },
  {
    name: 'Speed Meeting - Connect Online',
    desc: 'We are connecting people. Someone a Girlfriend or just a friend or a contact inside the bank world, or an investor. People share their interest with others and connect. You make a profile. Write your information and when you login you can choose between private/business. If you chose private you enter the groups where other people are. this is speed meeting. 60 seconds you talk with 5 others. After 60 seconds you get a popup. Where it stands. Do you wanna connect with this person. Yes/no',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/speedMeeting.png',
    link: 'https://apps.apple.com/app/1606940095',
  },
  {
    name: 'Viceseo (Recruitment Managing Platform)',
    desc: 'WITH OUR IOS APP IT IS A SIMPLE, FAST, AND EASY TO MANAGE YOUR ACCOUNT AND NEW DRIVERS! • KEEP YOUR CANDIDATES AND HIRING TEAM WITHIN REACH WITH OUR MOBILE APP. • REDUCE TIME TO HIRE AND EASILY MANAGE NEW CDL DRIVERS • PROVIDES STATISTICS FOR HOW MANY POTENTIAL DRIVERS YOUR COMPANY RECEIVED DAY-MONTH-YEAR ',
    Screenshots: '/img/icons/common/viceseo.png',
    link: 'https://apps.apple.com/us/app/viceseo/id1601840773',
  },
  {
    name: 'Binbin Recycle',
    desc: 'Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot. Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot',
    Screenshots: '/img/icons/common/bin_bin.png',
    link: 'https://play.google.com/store/apps/details?id=com.bin_recycle',
  },
  {
    name: 'Mr. Bike Doctor',
    desc: 'We offer a wide variety of services from basic servicing to repairs. Get access to experienced and certified professional bike mechanics right at your doorstep with required tools, genuine spare parts and an affordable price. The possibilities are endless, just download our App, register and request for a service. It is as simple as that!!',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/bikedoctor_user.png',
    link: 'https://play.google.com/store/apps/details?id=com.bike_doctor',
  },
  {
    name: 'Mr. Bike Doctor (Provider)',
    desc: 'Mr. Bike is the best doorstep Bike service & repair App providing all types of services to over a million vehicle owners. Register with us and get access to service/repair request right on your mobile. You can accept requests on the go, provide the necessary repair/service and collect your fees through the App. Expand your business by downloading our App and registering in a few easy steps and get started.',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/bikedoctor_provider.png',
    link: 'https://play.google.com/store/apps/details?id=com.bike_doctor_provider',
  },
  {
    name: 'Synchrony App',
    desc: 'Plataforma online para coordinar tres grupos de personas: médico, biólogo y paciente en un proceso de reproducción asistida. El paciente estará conectado a través de una app desde su móvil que le avisará de cuando tiene que tomar la medicación. El médico y el biólogo tendrán acceso a la plataforma web donde introducirán los datos médicos de la pacientes. ',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/synchrony.png',
    link: 'https://play.google.com/store/apps/details?id=com.synchrony.android.app',
  },
  {
    name: 'Mumtrepreneurs',
    desc: 'The business coach will be running several courses so there will be a group inside the app that people can join relevant to that course. The group should be like a mobile Facebook group page. A feed you can scroll down on, comment in and interact in.',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/mumtreprenuors.png',
    link: 'https://play.google.com/store/apps/details?id=com.mumtrepreneurs',
  },
  {
    name: 'Manere Sanus',
    desc: 'Wir bieten ein Gesundheitskonzept für 0-112 Jahre an und sorgen dafür, dass du, egal in welchem Gesundheitszustand du dich gerade befindest, richtig, qualitativ, nach neuesten sportwissenschaftlichen Erkenntnissen gefördert und gefordert wirst. Wir sind ein anerkannter und zertifizierter Leistungserbringer für Rehabilitationssport nach §44 SGB. Außer Rehasport kannst du bei uns präventiv etwas für deine Gesundheit tun und unser Angebot im Breitensport ausprobieren und ausüben.',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/manerasanu.png',
    link: 'https://play.google.com/store/apps/details?id=com.manere.sanus',
  },
  {
    name: 'InLock - Encrypt Decrypt',
    desc: 'InLock is an application that provides a range of encryption and decryption tools. Many traditional ciphers are implemented such as the AES, Rabbit. our all encryptions tools are password protected i.e., they are encrypted using a key & are decrypted using the same key only.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    Screenshots: '/img/icons/common/fifth.png',
    link: 'https://play.google.com/store/apps/details?id=com.inlock.app',
  },
  {
    name: 'All fit - Fitness App',
    desc: 'AllFit (FitOL) tədbiqetməsi ilə siz indi həm vaxtınıza qənaət edəcəksiniz həm də sizə daha yaxın olan Fitness Salonlarında məşq etmə şansına sahib olacaqsınız. Mobil tətbiqin xəritəsindən istifadə edərək şəhərin hər bölgəsində olan fitness salonlarını incələyə və həmin salonların sizə təklif etdiyi xidmətlərdən yararlana biləcəksiniz. Tədbiqetməni yükləyərək, qeydiyyatdan keçib istədiyiniz salonun girişində sizə göstərilən QR kodunu oxudaraq daxil olacaq və vaxtınızı başladacaqsınız. Sizə lazım olan qədər məşq etdikdən sonra vaxtınızı dayandıraraq ödənişinizi mobil tətbiqin pul kisəsindən ödəyə biləcəksiniz. Mobil tətbiqin sosial tərəfi ilə siz yeni dostluqlar qazanaraq həm əyləncəli fotolar paylaşa həm də bir-birinizə ismarıclar göndərə',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    Screenshots: '/img/icons/common/allfit.png',
    link: 'https://play.google.com/store/apps/details?id=com.all_fit',
  },
  {
    name: 'Healthway - Digital Course App',
    desc: 'Numa sociedade em constante mudança, as solicitações e expectativas pessoais e profissionais de cada indivíduo alteram-se de forma contínua. O conhecimento, a ciência e a tecnologia progridem e inovam-se em cada dia, pelo que se torna imperioso apostar no Ensino ao longo da vida.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    Screenshots: '/img/icons/common/healthway.png',
    link: 'https://play.google.com/store/apps/details?id=com.healthway',
  },
];

export const feedbacks = [
  {
    name: 'Micheal Patchen',
    feedback:
      'Fantastic seller once again, he understood the requirements of the project perfectly. Clearly very experienced as he had great solutions for unique problems. Was very patient on small modifications that we needed and helped us through to getting it live on the App Store / Google Play Store Thanks again!',
  },
  {
    name: 'Pete jhone',
    feedback: 'This guy is the real deal. Highly responsive & easy to reach - I highly recommend him for IOS & Android dev projects!',
  },
  {
    name: 'Cliff',
    feedback: 'Greate Developer, Work through difficult requirements. Once he understand, he deliver',
  },
];
