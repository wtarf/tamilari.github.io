import { useState } from 'react';
import { Menu, X } from 'lucide-react'



export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [open, setOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(500);
  
  const researchAreas = [
    { id: 1, title: 'Tamizhar Flag', description: 'The Tamizhar Flag represents the cultural and historical identity of Tamil people.', image: './Tamizharflag.png', downloadLink: './Tamizharflag.pdf', filetype: 'PDF' },
    { id: 2, title: 'Tamil Books', description: 'Collection of Tamil literature, Tamil National Authors publications and historical texts', image: './tamilbook.PNG', downloadLink: '', filetype: 'PDF' },
    { id: 3, title: 'Tamil National Thoughts', description: 'Advancing the understanding of Tamil national identity and cultural values', image: './tamilarthoughts.JPG', downloadLink: '', filetype: 'PDF' },
    { id: 4, title: 'South Indian Tamils', description: 'Developing and preserving the cultural heritage of South Indian Tamils', image: './jallikattu.jpg', downloadLink: '', filetype: 'PDF' },
    { id: 5, title: 'Tamil Language and Inscription', description: 'Maintaining the richness of the Tamil language and Harnessing the wisdom of ancient Tamil inscriptions', image: './tamil_inscription.jpg', downloadLink: '', filetype: 'PDF' },
    { id: 6, title: 'Tamil Heritage', description: 'Preserving and promoting Tamil cultural heritage', image: './tamilheritage.jpeg', downloadLink: '', filetype: 'PDF' },
    { id: 7  , title: 'Tamil Culture Preservation', description: 'Preserving the richness of the ancient Tamil cultural traditions', image: './tamilculture.jpeg', downloadLink: '', filetype: 'PDF' },
    { id: 8  , title: 'Tamil National Activities', description: 'Promoting Tamil national activities and cultural events', image: './tamilaractivity.jpeg', downloadLink: '', filetype: 'PDF' },
  ];

  const publications = [
    { id: 1, title: 'Advancements in Neural Network Architectures', authors: 'Smith, J., et al.', journal: 'Nature AI', date: '2023', abstract: 'This paper presents novel approaches to deep learning architectures...' },
    { id: 2, title: 'CRISPR Applications in Modern Medicine', authors: 'Johnson, A., et al.', journal: 'Cell Biology', date: '2023', abstract: 'Exploring the latest developments in gene editing technologies...' },
    { id: 3, title: 'Solar Panel Efficiency Improvements', authors: 'Williams, R., et al.', journal: 'Renewable Energy Review', date: '2022', abstract: 'New materials and designs for enhanced photovoltaic performance...' },
  ];

  const teamMembers = [
    { id: 1, name: 'Mr. Prabhu Uvanthan R', role: 'Founder & Head', specialty: 'Tamil Nationalist', image: './prabhuuvan.jpeg' },
    { id: 2, name: 'Mr. Surendar SK', role: 'Secretary', specialty: 'Tamil Nationalist', image: './surendarsk.png' },
    { id: 3, name: 'Mr. Tamizhagan', role: 'Tamil Pulavar', specialty: 'Tamil Poetry', image: './tamilagan.jpeg' },
    // { id: 4, name: 'Dr. James Wilson', role: 'Data Analyst', specialty: 'Computational Physics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop' },
  ];

  const links = [
  { text: 'Research Areas', href: '#', className: 'font-semibold', name: 'research', shorttext: 'Research'},
  { text: 'Vision', href: '#', name: 'team', shorttext: 'Team' },
  { text: 'Join Now', href: '#', name: 'contact', shorttext: 'Contact' },
]

  const handleDonation = () => {
    alert(`Thanks! Your ${donationAmount} Amount received!`);
    setShowDonationModal(false);
    setDonationAmount(500);
  };

  const pageBorderStyle = {
    border: '1px solid #ab8040', // Shorthand works here
    padding: '50px 100px 75px 75px',
    borderRadius: '5px', // CamelCase for border-radius
    boxShadow: '0 4px 6px #ab8040'
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}     
{/* bg-gradient-to-r from-blue-800 to-teal-700 text-white shadow-lg

bg-[linear-gradient(0deg,#f40f68_0%,#f86e3d_55%,#fbcd11_100%)]

flex flex-col md:flex-row justify-between items-center
container mx-auto px-4 py-6
*/}
      <header className="bg-white shadow-sm sticky top-0 z-50">        
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
               <a href='/'> <img
                src="./wtarflogo.png"
                alt="WTA Research Foundation Logo"
                className="h-32 w-32 ml-0 mt-0 mb-0 mr-0" />
                </a>
                {/* <span className="ml-2 text-xl font-bold text-gray-900">WTA Research Foundation</span> */}
            </div>

            <nav className="bg-white items-right">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                      {/* Logo */}
                      
                      {/* Desktop Links */}
                      <div className="hidden md:flex space-x-6">
                        {links.map((link) => (
                          <button 
                              onClick={() => setActiveTab(link.name)} 
                              className={`px-4 py-2 rounded-lg transition ${activeTab === link.name ? 'bg-white text-[#412507] font-medium' : 'hover:bg-[linear-gradient(90deg,#F5CDA2_0%,#E78318_55%,#945410_100%)]'}`}
                            >
                              {link.text}
                            </button>
                        ))}
                      </div>
            
                      {/* Mobile Button */}
                      <div className="md:hidden">
                        <button
                          onClick={() => setOpen(!open)}
                          className="text-gray-700 hover:text-indigo-600 transition"
                        >
                          {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                      </div>
                    </div>
                  </div>
            
                  {/* Mobile Menu */}
                  {open && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                      {links.map((link) => (
                        <button 
                              onClick={() => setActiveTab(link.name)} 
                              className={`block text-gray-700 hover:text-indigo-600 transition ${activeTab === link.name ? 'bg-white text-[#412507] font-medium' : 'hover:bg-[linear-gradient(90deg,#F5CDA2_0%,#E78318_55%,#945410_100%)]'}`}
                            >
                              {link.text}
                            </button>
                      ))}
                    </div>
                  )}
                </nav>
              
            <div className="flex items-center">              
              <button onClick={() => setShowDonationModal(true)} className="bg-[#BD6B14] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6A3C0B] transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {activeTab === 'home' && (
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
            
            {/* ## Background Image */}
            <img src="./header-bg.jpg" alt="" className="w-full h-full" />
            {/* ## Background Image */}

            <div className="w-full -mt-12 flex justify-center items-center">
            {/* Main Banner Container */}
            <div className="relative w-full max-w-4xl h-24 px-4 flex flex-col md:flex-row items-center justify-between gap-8 px-10 rounded-sm shadow-2xl overflow-hidden
                      bg-gradient-to-r from-[#BD6B14] via-[#E98B4B] to-[#F2D448]">

                        {/* relative w-full max-w-6xl h-48 flex flex-col md:flex-row items-center justify-center gap-8 px-10 rounded-sm shadow-2xl overflow-hidden */}
                      {/* bg-gradient-to-r from-[#D8335B] via-[#E98B4B] to-[#F2D448] */}
        
            {/* Left Text Content */}
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight">
              Spread Tamil To The World . . .
            </h1>
          </div>
            </div>

            <div className="max-w-7xl mx-auto">           
              <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">                
                <div className="pt-10 px-4 sm:px-6 lg:px-8">
                  <div className="text-center sm:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block text-[#945410]">Tamil</span>
                      <span className="block text-[#28150D]">Authority Research Institution</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      <span className="font-bold text-[#945410]">TAMILARI</span> work for the development of the global Tamil community through research and innovation.
                    </p>
                    
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                      <div className="rounded-md shadow">
                        <button 
                          onClick={() => setActiveTab('research')}
                          // className='bg-[#BD6B14] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6A3C0B] transition-colors'
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#BD6B14] hover:bg-[#6A3C0B] md:py-4 md:text-lg md:px-10 transition-colors"
                        >
                          Explore Research
                        </button>
                      </div>
                      {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button 
                          onClick={() => setActiveTab('publications')}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                          View Publications
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research Areas Section */}
        {activeTab === 'research' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Research Areas
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Exploring frontiers of knowledge across multiple disciplines
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {researchAreas.map((area) => (
                  <div key={area.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img className="w-full h-full object-cover" src={area.image} alt={area.title} />
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">{area.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{area.description}</p>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                      <a 
                        href={area.downloadLink} 
                        download={area.title+'.'+area.filetype.toLowerCase()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#945410] hover:text-[#28150D] font-medium flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download
                      </a>
                      <span className="bg-[#F5E8D0] text-[#28150D] text-xs font-semibold px-2.5 py-0.5 rounded">
                        {area.filetype}
                      </span>
                    </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Publications Section */}
        {activeTab === 'publications' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Recent Publications
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Our latest research findings published in leading journals
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{pub.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{pub.authors}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Journal</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.journal}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Published</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.date}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Abstract</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.abstract}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div className="max-w-4xl mx-auto py-12 px-2 sm:px-6 lg:px-6">
            <div className="text-center" style={pageBorderStyle}>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                world TAMILARI vision
              </h2>
              <p className="mt-3 max-w-4xl mx-auto text-justify text-lg text-gray-500 sm:mt-4">
                To establish a sovereign and unified Tamil consciousness by restoring Tamil political power and nationhood, rooted in the theological philosophy of Murugu and the universal principle of compassion for all living beings; to achieve this through an authoritative research center in Tamil Nadu that globalizes the language, mandates Tamil-medium education, and restores Tamil as the primary tongue of South India.
              </p>
              {/* <ul className="mt-6 max-w-4xl mx-auto text-left text-lg text-gray-700 list-disc list-inside"> 
               <li>Global Language: To spread the Tamil language to people all over the world.</li>
               <li>Regional Language: To make Tamil the main spoken language across all of South India.</li>
               <li>Research Center: To build a dedicated Tamil language research center in Tamil Nadu.</li>
               <li>Tamil Religion: To create and grow a Tamil spiritual philosophy called the Murugu religion.</li>
               <li>Education: To set up schools where all subjects are taught in the Tamil language.</li>
               <li>Political Power: To establish strong and independent Tamil political leadership.</li>
               <li>Nationhood: To create a dedicated nation for the Tamil people.</li>
               <li>Universal Kindness: To spread the message of compassion for every living being across the globe.</li>
              </ul> */}

               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Global Language: </p>
                <p className='text-left text-lg text-gray-500'>To spread the Tamil language to people all over the world.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Regional Language: </p>
                <p className='text-left text-lg text-gray-500'>To make Tamil the main spoken language across all of South India.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Research Center: </p>
                <p className='text-left text-lg text-gray-500'>To build a dedicated Tamil language research center in Tamil Nadu.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Tamil Religion: </p>
                <p className='text-left text-lg text-gray-500'>To create and grow a Tamil spiritual philosophy called the Murugu religion.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Education: </p>
                <p className='text-left text-lg text-gray-500'>To set up schools where all subjects are taught in the Tamil language.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Political Power: </p>
                <p className='text-left text-lg text-gray-500'>To establish strong and independent Tamil political leadership.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Nationhood: </p>
                <p className='text-left text-lg text-gray-500'>To create a dedicated nation for the Tamil people.</p>
               <p className='font-bold text-left text-lg text-gray-500 sm:mt-4'>Universal Kindness: </p>
                <p className='text-left text-lg text-gray-500'>To spread the message of compassion for every living being across the globe through bionism.</p>
            </div>

            <div className="mt-20" >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="h-48 bg-gray-200">
                      <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm font-medium text-[#BD6B14]">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500">{member.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Member Registration Form
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Interested in joining our research community? Fill out the form below.
              </p>
            </div>

            <div className="mt-12 bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm h-7 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm h-7 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm h-7 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="shadow-sm h-7 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Write About You
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#BD6B14] hover:bg-[#6A3C0B] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Donate Now</h3>
                <button 
                  onClick={() => setShowDonationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">                
                  Please help us in the development of the Tamil language. Your donation will help us improve our research.
              </p>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                  <input 
                    type="number" 
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD6B14] focus:border-[#BD6B14]"
                    min="10"
                  />
                </div>
                
                <div className="flex space-x-2 mt-3">
                  {[100, 500, 1000, 2000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`flex-1 py-2 rounded-lg ${
                        donationAmount === amount 
                          ? 'bg-[#BD6B14] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Payment Methods</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Credit Card</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>UPI</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <span>Net Banking</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>PayPal</span>
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleDonation}
                className="w-full bg-[#BD6B14] hover:bg-[#9A550F] text-white font-bold py-3 px-4 rounded-lg transition"
              >
                Donate Now ({donationAmount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 items-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">World TamilARI</h3>
              <p className="mt-4 text-base text-gray-300">
                TAMIL ARI {'>'} Authority Research Institution
              </p>
              <p className="mt-2 text-sm text-gray-300 border-t border-gray-700 pt-2">
                Spread Tamil To The World Through Research and Innovation
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Research Areas</h3>
              <ul className="mt-4 space-y-4">
                {researchAreas.slice(0, 4).map((area) => (
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{area.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">More Research Areas</h3>
              <ul className="mt-4 space-y-4">
                {researchAreas.slice(4, 8).map((area) => (
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{area.title}</a></li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Publications</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Datasets</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Research Tools</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Collaboration</a></li>
              </ul>
            </div> */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
              <ul className="mt-1 space-y-1">
                <li className="text-base text-gray-300">70C Pauls Complex</li>
                <li className="text-base text-gray-300">Opp. Head Post Office</li>
                <li className="text-base text-gray-300">Tiruchirapalli - 620 001</li>
                </ul>
              <ul className="mt-4 space-y-1">
                <li className="text-base text-gray-300">contact@tamilari.com</li>
                <li className="text-base text-gray-300">+91-9902605045</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} WTA Research Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
