import React from "react";
import img from "../img/1640347898526.png";
const About = () => {
  return (
    // <div className="flex mt-5 mb-14">
    //   <div>
    //     <div>
    //       <img className="rounded-full " src={img} alt="" />
    //     </div>

    //     <div className="mt-7  text-2xl flex gap-10">
    //       <span className="text-3xl text-slate-600"> Name</span>
    //       <span className="ml-9">Md kausar Ahamed</span>
    //     </div>
    //     <div className="mt-2  text-2xl flex gap-10 ">
    //       <span className="text-3xl text-slate-600 flex"> Email</span>
    //       <span className="ml-11">galibhasan517@gmail.com</span>
    //     </div>
    //     <div className="mt-2  text-2xl flex  gap-10">
    //       <span className="text-3xl text-slate-600 flex"> Contacts</span>
    //       <span className=""> 01868384430</span>
    //     </div>
    //   </div>
    //   <div className="">
    //     <h1 className="text-5xl font-serif text-center ">
    //       <span className="border-b-2 border-dotted border-red-300">
    //         About Me
    //       </span>
    //     </h1>
    //     <p className="mt-4 ml-14 text-2xl">
    //       I am very passionate about programming development. I always try to
    //       hard work to fulfill my project.In every moment I try to gain my
    //       programming level.In next 6 months at least I want to join a reputated
    //       programming company as a interner or full time job. Besides in the
    //       next 10 years, I'd like to move into a Chief programming Officer role.
    //       A position like this senior programming devoloper job would let me
    //       gain more experience with project management and leadership.
    //     </p>
    //     <div>
    //       <div class="card w-96 bg-base-100 shadow-xl">
    //         <div class="card-body">
    //           <h2 class="card-title">Expart In</h2>
    //           <p>
    //             React, Tailwind CSS, React Router, React Hook Form, Firebase
    //             Authentication, Nodejs, Express Js, MongoDB, Heroku, Firebase
    //             Hosting, stripe, payment Gateway, React Bootstrap, React
    //             Spinners, Firebase, Netlify.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">About Me</h1>
            <p class="py-6">
              I am very passionate about programming development. I always try
              to hard work to fulfill my project.In every moment I try to gain
              my programming level.In next 6 months at least I want to join a
              reputated programming company as a interner or full time job.
              Besides in the next 10 years, I'd like to move into a Chief
              programming Officer role. A position like this senior programming
              devoloper job would let me gain more experience with project
              management and leadership.
            </p>
            <span>Name: Md.kausar Ahamed</span>
            <br />
            <span>Email: kausarahamed4430@gmail.com</span>
            <br />
            <span>Education: Honours 2nd year</span>
            <br />
            <span>Phone: 01868384430</span>
            <br />
            <span>
              Expart In: React, Tailwind CSS, React Router, React Hook Form,
              Firebase Authentication, Nodejs, Express Js, MongoDB, Heroku,
              Firebase Hosting, stripe, payment Gateway, React Bootstrap, React
              Spinners, Firebase, Netlify.
            </span>
            <br />
            <span className="text-2xl items-center">My Projects</span>
            <br />
            <a
              className="text-blue-600"
              href="https://learning-fluorescence.web.app/"
            >
              Learning-fluorence
            </a>
            <br />
            <a
              className="text-blue-600"
              href="https://bicycle-warehouse.web.app/"
            >
              Bicycle-warehouse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
