/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
const About = () => {
  return (
    <div className="hero min-h-screen bg-[#5D3587]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/Images/about.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Innovating Excellence, Crafting Solutions: Discover the SCC
            Technovision Inc Story
          </h1>
          <p className="py-6 text-white">
            Welcome to SCC Technovision Inc, where our commitment to innovation
            and excellence is at the heart of everything we do. Established with
            a vision to redefine industry standards, we embark on a journey
            driven by a passion for technological advancement and a dedication
            to solving complex challenges.
            <br />
            <br />
            At SCC Technovision Inc, we are more than a company; we are a
            collective of visionary minds, creative thinkers, and industry
            pioneers. Our mission is to create transformative solutions that not
            only meet but exceed the evolving needs of our clients. Rooted in a
            culture of collaboration, integrity, and continuous improvement, we
            strive to push boundaries and set new benchmarks.
            <br />
            <br />
            Our diverse team brings together expertise from various domains,
            fostering an environment where ideas flourish and innovations
            thrive. Whether it's developing cutting-edge software, architecting
            robust systems, or providing strategic consulting, we are dedicated
            to delivering value that goes beyond expectations.
            <br />
            <br />
            Join us in the pursuit of excellence, where every project is an
            opportunity to make a lasting impact. Explore the SCC Technovision
            Inc journey—a story of innovation, collaboration, and a relentless
            pursuit of excellence.
          </p>
          <button className="btn btn-outline bg-[#392467] text-white">
            Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
