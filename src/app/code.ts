export const coding_projects = [
  {
    title: 'A Comphrensive Chord Progression Ear Trainer',
    imgSrc: 'assets\\photos\\ear-trainer-img1.jpg',
    imgAlt: 'Screenshot of ear training app quiz view',
    imgId: 'ear-training-img',
    description: '<p>As a music educator, I was often frustrated with the online tools available for teaching the skill of recognizng chord progressions by ear. I decided to design my own, allowing the user all of the fine degree of control I wished that I had for my own students. This app allows the user to loop playback, enable/disable any chord in a given key, toggle chord inversions, and more. It is my wish that this website goes on to fulfill that educational purposes for students everywhere, not just my own. This project was written using React.JS.</p>',
    link: 'https://github.com/huntzinger92/Ear-Training-Chord-Progression-Website',
    linkText: 'Ear Training Website'
  },
  {
    title: 'Visualizing Finances for Freelancers',
    imgSrc: 'assets\\photos\\finances-img.jpg',
    imgAlt: 'Screenshot of displayed graph from this app',
    imgId: 'finances-img',
    description: "<p>As a freelancer, it has been difficult for me to track my income - the total amount, the average over a period of time, and seeing how much I made from each source of income. Failing to find a readily available app that fit my specific needs, I decided to use my knowledge of Python and its Pandas module to build one for myself.</p> <p>This program accepts a bank statement formatted as a .csv file and allows the user to exclude transactions over a specific amount (as an outlier). After importing the data, my program allows the user to see various data gleaned from their statement - average monthly income/expenditure/savings, tracking bank account balance, and, most importantly for freelancers like myself, the total amount of yearly income from each unique source in their account history. This data is stored in a local database (via sqlite) for easy recurrent access. It uses the PyQt5 framework to produce a desktop graphic user interface.</p>",
    link: "https://github.com/huntzinger92/bank_statement_processing",
    linkText: 'Link to Github Repository'
  }
];
