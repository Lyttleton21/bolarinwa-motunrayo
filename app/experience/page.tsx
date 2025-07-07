import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">My Experience</h1>
      <div className="md:mx-20 mx-4 md:p-6 ">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
            Title: My Experience in STE 353
          </h2>
          <p className="leading-7 ">
            <strong>Course:</strong> STE 353 - Science and Technology in Early
            Childhood Education <br /> <strong>Lecturer:</strong> Mr. Adebayo O.
            <br />
          </p>
        </div>
        <hr className="my-3" />
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            My Experience
          </h3>
          <p className="text-muted-foreground text-xl">
            STE 353 has been an eye-opening course that taught me the importance
            of technology skills in modern education. One of the major
            highlights was learning how to create an e-portfolio, which allows
            us to organize and present our work professionally.
          </p>{" "}
          <br />
          <p className="text-muted-foreground text-xl">
            In class, we explored programmed learning — understanding how to
            break information into small, manageable steps to help children
            learn at their own pace. This gave me a better understanding of how
            technology can support individualized learning in early childhood
            settings.
          </p>{" "}
          <br />
          <p className="text-muted-foreground text-xl">
            We also gained practical skills in using Microsoft PowerPoint to
            design educational materials, including how to integrate pictures,
            audio, video, and internet resources to make presentations more
            engaging. This experience has helped me feel more confident in
            preparing digital content for my future teaching practice.
          </p>{" "}
          <br />
          <p className="text-muted-foreground text-xl">
            Overall, STE 353 showed me how technology is not just an add-on, but
            an essential part of effective teaching and learning in today’s
            world. I now understand how to use e-portfolios and multimedia tools
            to plan, document, and share educational experiences in a
            professional way.
          </p>
        </div>
      </div>
    </div>
  );
}
