import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import coverImage from "./assets/cover.jpg";
import diagram from "./assets/diagram.jpg";
import logo from "/logo.png";
import dulanProfile from "./assets/profiles/dulan.png";
import akilaProfile from "./assets/profiles/akila.png";
import rashiniProfile from "./assets/profiles/rashini.png";
import dulangaProfile from "./assets/profiles/dulanga.png";
import pradeepProfile from "./assets/profiles/pradeep.png";
import anjalieProfile from "./assets/profiles/anjalie.png";
import dumindaProfile from "./assets/profiles/duminda.png";

// Technology logos
import flutterLogo from "./assets/logos/flutter.png";
import reactLogo from "./assets/logos/react.png";
import githubLogo from "./assets/logos/github.png";
import tensorflowLogo from "./assets/logos/tensorflow.png";
import pythonLogo from "./assets/logos/python.png";
import firebaseLogo from "./assets/logos/firebase.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const techLogos = {
    Flutter: flutterLogo,
    React: reactLogo,
    GitHub: githubLogo,
    TensorFlow: tensorflowLogo,
    Python: pythonLogo,
    Firebase: firebaseLogo,
  };

  const profileImages = {
    dulan: dulanProfile,
    akila: akilaProfile,
    rashini: rashiniProfile,
    dulanga: dulangaProfile,
    pradeep: pradeepProfile,
    anjalie: anjalieProfile,
    duminda: dumindaProfile,
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 1500); // Reset after 1.5s
    });
  };

  const teamMembers = [
    {
      name: "Weerasekara D.D.R.R.",
      studentId: "IT21193804",
      email: "it21193804@my.sliit.lk",
      linkedin: "www.linkedin.com/in/dulan-weerasekara",
      image: "dulan",
    },
    {
      name: "Chandrasekara C.M.A.P.K.",
      studentId: "IT21255588",
      email: "it21255588@my.sliit.lk",
      linkedin: "http://www.linkedin.com/in/akhila-chandrasekara",
      image: "akila",
    },
    {
      name: "Dahanayake R.A.",
      studentId: "IT21270338",
      email: "it21270338@my.Sliit.lk",
      linkedin: "www.linkedin.com/in/rashini-dahanayake",
      image: "rashini",
    },
    {
      name: "Rathnayake D.T.",
      studentId: "IT21266782",
      email: "it21266782@my.sliit.lk",
      linkedin: "www.linkedin.com/in/dulanga-rathnayake/ ",
      image: "dulanga",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 fixed top-0 left-0 right-0 z-30">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto mr-4" />
          </div>

          {/* Navigation Links Section */}
          <div className="flex justify-end space-x-6">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-blue-600 cursor-pointer">
              Home
            </ScrollLink>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-600 cursor-pointer">
                Domain ▾
              </span>
              {isOpen && (
                <div className="absolute bg-white shadow-lg border mt-2 rounded z-20 w-48">
                  <ul className="text-sm text-gray-800 py-2">
                    {[
                      { name: "Literature Survey", id: "domain-literature" },
                      { name: "Research Gap", id: "domain-gap" },
                      { name: "Research Problem", id: "domain-problem" },
                      { name: "Research Objectives", id: "domain-objectives" },
                      { name: "Methodology", id: "domain-methodology" },
                      { name: "Technologies Used", id: "domain-tech" },
                    ].map((item) => (
                      <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                        <ScrollLink
                          to={item.id}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          className="cursor-pointer block"
                          onClick={() => setIsOpen(false)}>
                          {item.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ScrollLink
              to="milestones"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-blue-600 cursor-pointer">
              Milestones
            </ScrollLink>
            <ScrollLink
              to="documents"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-blue-600 cursor-pointer">
              Documents
            </ScrollLink>
            <ScrollLink
              to="slides"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-blue-600 cursor-pointer">
              Slides
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-blue-600 cursor-pointer">
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-blue-600 cursor-pointer">
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>

      <div className="pt-20 space-y-20 px-8 min-h-screen w-full">
        {/** Home Section */}
        <Element name="home">
          <section
            className="relative h-[500px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${coverImage})` }}>
            <div className="absolute left-8">
              <ScrollLink
                to="domain"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition">
                Learn More
              </ScrollLink>
            </div>
            <div className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-2xl p-8 shadow-lg z-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to our official research project website. Here you’ll
                find documents, milestones, presentations, and team information
                on MediSafe - Health monitoring System for Cardiovascular
                patients.
              </p>
            </div>
          </section>
        </Element>

        {/** Domain Section */}
        <Element name="domain">
          <section className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Research Domain
            </h2>

            {[
              {
                id: "domain-literature",
                title: "Literature Survey",
                content: (
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-400">
                      <p className="text-gray-700">
                        Cardiovascular diseases (CVDs) continue to be a common
                        cause of morbidity and mortality worldwide,
                        necessitating ongoing monitoring of health and early
                        detection. Recent years have seen the rise of mobile
                        health (mHealth) technologies as potential solutions for
                        enhancing healthcare delivery and encouraging patient
                        engagement.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 mt-3 bg-red-400 rounded-full flex-shrink-0"></div>
                        <p>
                          Several mHealth applications offer basic health
                          monitoring features, such as heart rate and step
                          counts. While beneficial, such systems might not be
                          able to collect and process complete cardiovascular
                          information...
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 mt-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <p>
                          A few studies have addressed integrating wearable
                          sensors with mobile platforms. However, most such
                          systems fail to provide real-time synchronization of
                          data...
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border">
                      <h3 className="text-sm font-semibold text-gray-600 mb-3">
                        Recent Research Insights
                      </h3>
                      <p>
                        To close these gaps, recent research suggests employing
                        Internet of Things (IoT) technology and cloud computing
                        to harvest data in real-time...
                      </p>
                    </div>

                    <div className="bg-blue-50/80 p-6 rounded-xl border-2 border-blue-200 relative overflow-hidden">
                      <div className="absolute right-4 top-4 text-blue-300">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div className="relative">
                        <p className="text-gray-700">
                          <strong className="text-blue-700 font-semibold">
                            MediSafe
                          </strong>{" "}
                          extends these findings and aims to overcome the
                          limitations of the existing works by offering an
                          end-to-end mobile solution...
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "domain-gap",
                title: "Research Gap",
                content: (
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          Real-Time Monitoring & Data Integration
                        </h4>
                      </div>
                      <p className="text-gray-600 ml-11">
                        Majority of applications lack continuous data capture
                        from wearable devices (e.g., ECG monitors) and real-time
                        analytics capabilities, limiting early detection of
                        cardiovascular events.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          Comprehensive Health Management
                        </h4>
                      </div>
                      <p className="text-gray-600 ml-11">
                        Absence of unified platforms combining patient data
                        management, healthcare provider access, and predictive
                        insights through centralized data storage and
                        visualization.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          Preventive Care Features
                        </h4>
                      </div>
                      <p className="text-gray-600 ml-11">
                        Missing systems for goal monitoring, health trend
                        analysis, and machine learning-powered personalized
                        recommendations crucial for preventive cardiology.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                id: "domain-problem",
                title: "Research Problem",
                content: (
                  <div className="max-w-4xl mx-auto space-y-12">
                    {/* Research Problem Section */}
                    <div className="bg-red-50 rounded-xl p-8 shadow-lg border-l-4 border-red-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-red-100 rounded-xl">
                          <svg
                            className="w-8 h-8 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          Problem
                        </h2>
                      </div>

                      <div className="space-y-6 pl-4">
                        <div className="border-l-2 border-red-200 pl-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Global Cardiovascular Crisis
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            CVDs remain a leading global killer, exacerbated in
                            developing nations by:
                          </p>
                          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                            <li>Inadequate healthcare infrastructure</li>
                            <li>Prohibitive costs of continuous care</li>
                            <li>Geographical barriers to access</li>
                          </ul>
                        </div>

                        <div className="border-l-2 border-red-200 pl-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Technological Shortcomings
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Current mHealth solutions fail to address critical
                            needs:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              <span className="text-gray-600">
                                No real-time monitoring
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              <span className="text-gray-600">
                                Lack of IoT integration
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Solution Section */}
                    <div className="bg-green-50 rounded-xl p-8 shadow-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-100 rounded-xl">
                          <svg
                            className="w-8 h-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          Proposed Solution
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-700">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                              Real-Time Monitoring
                            </h3>
                            <p className="text-gray-600 text-sm">
                              IoT-enabled wearable sensors for continuous ECG
                              and vital sign tracking
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-700">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              Cloud Analytics
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Firebase-powered storage with ML-driven health
                              insights
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-700">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              Patient Engagement
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Interactive dashboards with goal-setting and
                              progress tracking
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-700">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              Proactive Care
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Real-time alerts and physician communication
                              portal
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          System Architecture
                        </h3>
                        <div className="flex items-center justify-between text-gray-600 text-sm">
                          <span className="px-4 py-2 bg-green-100 rounded-full">
                            Wearable IoT Devices
                          </span>
                          <svg
                            className="w-6 h-6 mx-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                          <span className="px-4 py-2 bg-green-100 rounded-full">
                            Cloud Processing
                          </span>
                          <svg
                            className="w-6 h-6 mx-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                          <span className="px-4 py-2 bg-green-100 rounded-full">
                            Mobile Interface
                          </span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          Demo Video
                        </h3>
                        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                          <iframe
                            className="w-full h-96"
                            src="https://www.youtube.com/embed/-Dt3GbQSlK4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "domain-objectives",
                title: "Research Objectives",
                content: (
                  <div className="max-w-4xl mx-auto space-y-12">
                    {/* Primary Objective */}
                    <div className="bg-blue-50 rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-xl">
                          <svg
                            className="w-8 h-8 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          Primary Objective
                        </h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-4">
                        Develop the MediSafe mobile health system integrating
                        IoT and ML technologies to enable real-time
                        cardiovascular monitoring and enhance patient-provider
                        collaboration for improved disease management.
                      </p>
                    </div>

                    {/* Specific Objectives */}
                    <div className="bg-purple-50 rounded-xl p-8 shadow-lg border-l-4 border-purple-500">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-purple-100 rounded-xl">
                          <svg
                            className="w-8 h-8 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          Specific Objectives
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            icon: "❤️",
                            title: "Cardiac Risk Assessment",
                            text: "ML-powered heart failure prediction with health scoring system",
                          },
                          {
                            icon: "🗺️",
                            title: "3D Pain Mapping",
                            text: "Interactive body visualization for pain pattern analysis",
                          },
                          {
                            icon: "📷",
                            title: "ECG Analysis",
                            text: "Camera-based cardiac evaluation with personalized recommendations",
                          },
                          {
                            icon: "😊",
                            title: "Emotion Recognition",
                            text: "Multi-modal emotional state detection (text + facial analysis)",
                          },
                          {
                            icon: "☁️",
                            title: "Health Data Cloud",
                            text: "Secure storage and analysis of medical records",
                          },
                          {
                            icon: "📊",
                            title: "Risk Visualization",
                            text: "Interactive dashboards with health trend analytics",
                          },
                          {
                            icon: "🚨",
                            title: "Alert System",
                            text: "Emergency detection and care team notifications",
                          },
                          {
                            icon: "💡",
                            title: "Preventive Care",
                            text: "Personalized health improvement recommendations",
                          },
                        ].map((obj, index) => (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              <span className="text-2xl p-2 bg-purple-50 rounded-lg">
                                {obj.icon}
                              </span>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-purple-600 font-bold">
                                    0{index + 1}.
                                  </span>
                                  <h3 className="font-semibold text-gray-800">
                                    {obj.title}
                                  </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  {obj.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "domain-methodology",
                title: "Methodology",
                content: (
                  <div className="max-w-4xl mx-auto space-y-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          Health Monitoring System Architecture
                        </h3>
                        <p className="text-gray-600 mb-4">
                          The platform comprises 4 core components:
                        </p>

                        <div className="space-y-6">
                          {/* Component 1 */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">
                              1. Heart Failure Risk Prediction & Health Scoring
                            </h4>
                            <p className="text-gray-600">
                              • ML models for cardiovascular risk pattern
                              recognition
                              <br />
                              • Health score calculation (0-100 scale)
                              <br />
                              • Preventive measure recommendations engine
                              <br />• Automated alerts for high-risk scenarios
                            </p>
                          </div>

                          {/* Component 2 */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">
                              2. 3D Pain Localization & Analysis
                            </h4>
                            <p className="text-gray-600">
                              • Interactive 3D body mapping interface
                              <br />
                              • Pain pattern recognition algorithms
                              <br />
                              • Emergency detection mechanism
                              <br />• Integrated risk correlation system
                            </p>
                          </div>

                          {/* Component 3 */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">
                              3. ECG-Based Health Recommendations
                            </h4>
                            <p className="text-gray-600">
                              • Camera-enabled ECG analysis
                              <br />
                              • Automated cardiac assessment
                              <br />
                              • Context-aware feedback system
                              <br />• Medical report generation
                            </p>
                          </div>

                          {/* Component 4 */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">
                              4. Emotion Recognition System
                            </h4>
                            <p className="text-gray-600">
                              • Multi-modal emotion detection (text + facial
                              analysis)
                              <br />
                              • Emergency distress identification
                              <br />
                              • Adaptive response mechanism
                              <br />• Preference-based intervention
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">System Flow:</span>
                            <br />
                            Mobile data collection → ML analysis of health
                            parameters + pain patterns → Integrated risk
                            assessment → Personalized recommendations generation
                            → Multi-channel emergency detection → Care provider
                            alerts + patient feedback
                          </p>
                        </div>
                      </div>

                      {/* Development Methodology remains similar with component-specific adjustments */}
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={diagram}
                        alt="System Architecture Diagram"
                        className="w-full max-w-3xl rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Development Methodology
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            phase: "Requirement Analysis",
                            content:
                              "Identified critical patient and healthcare professional needs through stakeholder interviews",
                          },
                          {
                            phase: "System Design",
                            content:
                              "Three-tier architecture with Android frontend, Firebase backend, and ML analysis layer",
                          },
                          {
                            phase: "Data Processing",
                            content:
                              "ML algorithms for pattern recognition and risk prediction with automated alert system",
                          },
                          {
                            phase: "Implementation",
                            content:
                              "Developed core features including real-time tracking, data visualization, and secure authentication",
                          },
                          {
                            phase: "Testing",
                            content:
                              "Rigorous validation using anonymized patient data and clinical simulations",
                          },
                          {
                            phase: "Deployment",
                            content:
                              "Android deployment with cloud integration and scalable architecture",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <h4 className="font-semibold text-gray-800">
                                {item.phase}
                              </h4>
                            </div>
                            <p className="text-gray-600 text-sm pl-11">
                              {item.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  {section.title}
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}

            {/** Technologies Section */}
            <div id="domain-tech" className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">
                Technologies Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  "Flutter",
                  "React",
                  "GitHub",
                  "TensorFlow",
                  "Python",
                  "Firebase",
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-3 group transform hover:-translate-y-1 transition-all duration-200">
                    <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow">
                      <img
                        src={techLogos[tech]}
                        alt={tech}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 text-center">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Element>

        {/** Milestones Section */}
        <Element name="milestones">
          <section className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Timeline in Brief
            </h2>

            <div className="relative border-l-2 border-gray-300 pl-8 space-y-12">
              {[
                {
                  title: "Project Proposal",
                  date: "August 2024",
                  description:
                    "A Project Proposal is presented to the Panel to get your project approved.",
                  marks: 12,
                },
                {
                  title: "Progress Presentation I",
                  date: "December 2024",
                  description:
                    "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design requirements.",
                  marks: 15,
                },
                // {
                //   title: "Research Paper",
                //   date: "July 2024",
                //   description:
                //     "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
                //   marks: 10,
                // },
                {
                  title: "Progress Presentation II",
                  date: "March 2025",
                  description:
                    "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a presentation which describes the project as a whole.",
                  marks: 18,
                },
                {
                  title: "Final Report",
                  date: "April 2025",
                  description:
                    "The final documentation and analysis of the project.",
                  marks: 19,
                },
                {
                  title: "Final Presentation And Viva",
                  date: "May 2025",
                  description:
                    "Viva is held individually to assess each member's contribution to the project.",
                  marks: 20,
                },
                {
                  title: "Website Assessment",
                  date: "May 2025",
                  description:
                    "The Website helps to promote our research project and reveals all details related to the project.",
                  marks: 2,
                },
                {
                  title: "Research paper (Published)",
                  date: "June 2025",
                  description:
                    "The research paper has been officially registered following the approval process. This milestone confirms that the proposed research topic, objectives, and methodology have been reviewed and accepted for further development",
                  marks: 10,
                },
                {
                  title: "Logbook",
                  date: "June 2025",
                  description:
                    "Status of the project is validated through the Logbook.",
                  marks: 4,
                },
              ].map((milestone, index) => {
                const percentage = Math.round((milestone.marks / 20) * 100);
                return (
                  <div key={index} className="relative group">
                    {/* Diamond Marker */}
                    <div className="absolute -left-[40px] top-2 w-4 h-4 rotate-45 bg-white border-2 border-black transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-500"></div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-1 mb-1 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 py-1 px-3 rounded-full shadow-sm group-hover:scale-105 transition">
                      📅 {milestone.date}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {milestone.description}
                    </p>

                    {/* Marks */}
                    <div className="mt-3">
                      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>Marks Allocated {milestone.marks}</span>
                      </div>
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
                          style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </Element>

        {/** Documents & Slides Sections */}
        {["documents", "slides"].map((section) => (
          <Element key={section} name={section}>
            <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
                {section === "documents"
                  ? "📁 Project Documents"
                  : "📊 Presentation Slides"}
              </h2>

              <div className="space-y-4">
                {(section === "documents"
                  ? [
                      {
                        title: "Topic Assessment",
                        versions: [
                          {
                            type: "Group",
                            date: "2024/05/13",
                            link: "https://drive.google.com/file/d/1cT9inkYldjFTy933ww-kmBlY3lTRjZJL/view?usp=drive_link",
                            status: "submitted",
                          },
                        ],
                      },

                      {
                        title: "Project Proposal",
                        versions: [
                          {
                            type: "Individual",
                            date: "2024/08/23",
                            link: "https://drive.google.com/drive/folders/1cYQfXH8I5QFyBuxSX-SfjfwJ4MghtmLK?usp=drive_link",
                            status: "submitted",
                          },
                        ],
                      },

                      {
                        title: "Research Paper",
                        versions: [
                          {
                            type: "Group",
                            date: "2025/03/07",
                            link: "https://drive.google.com/file/d/1MjTJyw88z1ikPHk3fYR3_qPI2HjNPs6B/view?usp=drive_link",
                            status: "submitted",
                          },
                        ],
                      },
                      {
                        title: "Final Report",
                        versions: [
                          {
                            type: "Group",
                            date: "2025/04/11",
                            link: "https://drive.google.com/file/d/1YDiNiR42WvjvLXeaQXI_79qGAJL3TchV/view?usp=drive_link",
                            status: "submitted",
                          },
                          {
                            type: "Individual",
                            date: "2025/04/11",
                            link: "https://drive.google.com/drive/folders/14MXvPyWU1f0d1Hl51Swk9YodfyyUK5GL?usp=drive_link",
                            status: "submitted",
                          },
                        ],
                      },
                    ]
                  : [
                      {
                        title: "Project Proposal",
                        versions: [
                          {
                            type: "Group",
                            date: "2024/07/06",
                            link: "https://docs.google.com/presentation/d/1dGbCRyAAmab8b2bWd3NnI7ydC0rXyOoU/edit?usp=drive_link&ouid=104318014996632090465&rtpof=true&sd=true",
                            status: "submitted",
                          },
                        ],
                      },
                      {
                        title: "Progress Presentation I",
                        versions: [
                          {
                            type: "Group",
                            date: "2024/12/05",
                            link: "https://docs.google.com/presentation/d/1ktW9vpFMOb6XrMcbzwM1idVlTET83d8U/edit?usp=drive_link&ouid=104318014996632090465&rtpof=true&sd=true",
                            status: "submitted",
                          },
                        ],
                      },
                      {
                        title: "Progress Presentation II",
                        versions: [
                          {
                            type: "Group",
                            date: "2025/03/18",
                            link: "https://docs.google.com/presentation/d/1uBE0F0lB-VN-Ol_ESgi406Avur9qSbvs/edit?usp=drive_link&ouid=104318014996632090465&rtpof=true&sd=true",
                            status: "submitted",
                          },
                        ],
                      },
                      {
                        title: "Final Presentation",
                        versions: [
                          {
                            type: "Group",
                            date: "2025/06/26",
                            link: "#",
                            status: "pending",
                          },
                        ],
                      },
                    ]
                ).map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <div className="space-y-3">
                      {item.versions.map((version, vIndex) => (
                        <div
                          key={vIndex}
                          className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  version.type === "Group"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-purple-100 text-purple-600"
                                }`}>
                                {version.type}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">
                              {version.date ? (
                                <>
                                  <span>Submitted on {version.date}</span>
                                  <span className="mx-2 text-blue-400">•</span>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${
                                      version.status === "submitted"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-yellow-100 text-yellow-600"
                                    }`}>
                                    {version.status}
                                  </span>
                                </>
                              ) : (
                                <span className="text-yellow-600">
                                  Yet to be submitted
                                </span>
                              )}
                            </div>
                          </div>

                          {version.status === "submitted" ? (
                            <a
                              href={version.link}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span>Download</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          ) : (
                            <button
                              className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-sm"
                              disabled>
                              Coming Soon
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Element>
        ))}

        {/** About Section */}
        <Element name="about">
          <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Meet Our Team
            </h2>

            {/* Supervisors Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-100 pb-2">
                Supervisors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Prof. Pradeep Abeygunawardane",
                    role: "Supervisor",
                    institution:
                      "Sri Lanka Institute of Information Technology",
                    linkedin: "linkedin.com/in/janaka",
                    image: "pradeep", // No image, fallback
                  },
                  {
                    name: "Ms. Anjalie Gamage",
                    role: "Co-Supervisor",
                    institution:
                      "Sri Lanka Institute of Information Technology",
                    linkedin: "linkedin.com/in/dilani",
                    image: "anjalie", // No image, fallback
                  },
                  {
                    name: "Dr.Duminda Wijewickrama",
                    role: "External Supervisor",
                    institution: "Cardiovascular Doctor",
                    image: "duminda", // Will be resolved to /src/assets/profiles/duminda.png
                  },
                ].map((member, index) => {
                  const imageUrl = member.image
                    ? `/src/assets/profiles/${member.image}.png`
                    : null;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden flex items-center justify-center bg-blue-100">
                        {imageUrl ? (
                          <img
                            src={profileImages[member.image]}
                            alt={`${member.name}'s photo`}
                            className="w-[90%] h-[90%] object-cover rounded-md"
                          />
                        ) : (
                          <svg
                            className="w-20 h-20 text-blue-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-blue-600 mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {member.institution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-6 border-b-2 border-green-100 pb-2">
                Research Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden bg-green-100 flex items-center justify-center">
                      <img
                        src={profileImages[member.image]}
                        alt={`${member.name}'s photo`}
                        className="w-[90%] h-[90%] object-contain rounded-md"
                      />
                    </div>
                    <h4 className="text-sm md:text-md font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {member.studentId}
                    </p>
                    <p className="text-sm text-green-600 mb-1">Undergraduate</p>
                    <p className="text-sm text-gray-600 mb-3">SLIIT</p>
                    <div className="flex space-x-3 items-center">
                      <button
                        onClick={() => handleCopy(member.email)}
                        className="text-green-500 hover:text-green-700 text-sm flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {copiedEmail === member.email ? "Copied" : "Email"}
                      </button>
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700 text-sm flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center text-gray-500 text-sm">
              <p>Faculty of Computing | Department of Information Technology</p>
              <p className="mt-1">
                Sri Lanka Institute of Information Technology
              </p>
            </div>
          </section>
        </Element>

        {/** Contact Section */}
        <Element name="contact">
          <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-lg mb-8">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email: researchproject186@gmail.com</span>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/meogbqbg"
              method="POST"
              className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </section>
        </Element>
      </div>
    </div>
  );
}
