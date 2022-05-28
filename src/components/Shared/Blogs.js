import React from "react";

const Blogs = () => {
  return (
    <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>Keeping component state nearby where vital</p>
            <p>
              Memoizing Respond components to anticipate superfluous re-renders
            </p>
            <p>Code-splitting in Respond utilizing energetic purport.</p>
            <p>Windowing or list virtualization in React</p>
            <p>Apathetic stacking pictures in Respond</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>Local state is data we manage in one or another component.</p>
            <p>Global state is data we manage across multiple components.</p>
            <p>
              Server state - Data that comes from an external server that must
              be integrated with our UI state.
            </p>
            <p>
              URL state - Data that exists on our URLs, including the pathname
              and query parameters.
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [Prototype] of an
              object, we use Object.getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit testing involves the testing of each unit or an individual
              component of the software application. It is the first level of
              functional testing. The aim behind unit testing is to validate
              unit components with its performance.Unit testing helps tester and
              developers to understand the base of code that makes them able to
              change defect causing code quickly. Unit testing helps in the
              documentation. Unit testing fixes defects very early in the
              development phase that's why there is a possibility to occur a
              smaller number of defects in upcoming testing levels. It helps
              with code reusability by migrating code and test cases.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p>Array.filter((pd) = > pd.name.includes("value of name"))</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
