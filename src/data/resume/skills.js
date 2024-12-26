const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'LAN/WAN Design',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Routers and Switches',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Firewalls',
    competency: 4,
    category: ['Networking Engineering'],
  },
  {
    title: 'Access Points',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Load Balancers',
    competency: 4,
    category: ['Networking Engineering'],
  },
  {
    title: 'Network Interface Cards',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'NFV (Network Functions Virtualization)',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Azure',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Hybrid Network Architecture',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Cisco ACI',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'VMware NSX',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'OpenFlow',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Juniper Contrail',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Ansible',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Puppet and Chef',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Cisco DNA Center',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'SaltStack',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'VMware vSphere',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Nexus 9000 Series',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Microsoft Hyper-VS',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Cloudflare',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Akamai',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Amazon CloudFront',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Palo Alto Netwokrs',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Fortinet',
    competency: 5,
    category: ['Networking Engineering'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Dagster',
    competency: 2,
    category: ['Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Mypy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#f7a400',
  '#64cb7b',
  '#64cb8b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
