import Image from 'next/image';
import Head from 'next/head';
import Header from "./components/header";
import Footer from "./components/footer";
function Home() {
  return (
    <>
    <Head>
        <title>Shyam - FrontEnd Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta content="Frontend Portfolio" name="author" />
        </Head>
      <Header />
      <div className="container bg-white">

        <section className="banner-parent flex flex-nowrap bg-white pt-8 ">
          <div className="banner-text w-3/5">
            <h3 className="pt-2 font-bold text-[52px]">
              Hi,I'M <span>Shyam</span>
            </h3>
            <h5 className="pt-2 text-[19px]">Front End Developer / Web Developer</h5>
            <p className="pt-2 text-[17px]">I'm a frontend developer with 2.5 years of experience in designing, developing, and maintaining user interfaces for web applications. Proven ability to collaborate effectively with cross-functional teams to deliver high-quality, user-centric solutions. Expertise in HTML, CSS, JavaScript, and modern frontend frameworks.</p>
            <p className="pt-2 pb-2 text-[16px] available-cnt flex flex-wrap items-center"><img className="avail-icons mr-2" src='../img/Avaliable-icons.png' />Available For New Projects</p>
            <div class="professional-networkicons flex mt-4 mb-4">
              <a href="mailto:prasathgtshyam@gmail.com" className="mr-2">
                <img src="./img/gmail.png" alt="gmail-icon" />
              </a>
              <a href="#">
                <img src="./img/linkedin.png" alt="linkedin-icon" />
              </a>
            </div>
          </div>
          <div className="banner-bg-images w-2/5">
            <img src="./img/Dev-1.png" alt="bg-img" />
            {/* <img src="../img/about.webp" alt="bg-img" /> */}
          </div>
        </section>
        <section className="Into-parent  pb-8">
          <h5 className="pt-2 text-[22px] text-slate-600">Introduction</h5>
          <h2 className="pt-1 font-bold text-[52px]">Over View</h2>
          <p className="pt-1  text-[19px]">I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.I'm building cutting-edge web applications using modern technologies such as Next.js, Reactjs, Tailwindcss and much more.</p>
          <p className="pt-1  text-[19px]">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </section>
        {/* <Projects/> */}
        {/* <section className="experience">

        </section>
        <section className="contactus">

        </section> */}
      </div>
      <Footer />
    </>
  )
}


export default Home;