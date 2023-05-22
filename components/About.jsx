"use client";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-md bg-white p-3 shadow-md">
      <h3 className="font-bold">About the tutor</h3>
      <p className="text-gray-500 text-sm mt-4 mb-3">
        Powered by Google Translate{" "}
        <span className="text-cyan-500">Show original</span>
      </p>
      <p className="text-sm">
        If you are a beginner don&apos;t worry. I will repeat and politely
        explain what you do not understand (* ´꒳` *)
      </p>
      <br />
      <p className="text-sm">Nice to meet you, I&apos;m mine.</p>
      <br />
      <p className="text-sm">
        I&apos;m from Yokohama and speak standard Japanese.
      </p>
      <br />
      <p className="text-sm">
        I&apos;m from Yokohama and speak standard Japanese.
      </p>

      {show && (
        <>
          <p className="text-sm">
            This way, you can practice beautiful Japanese.
          </p>
          <br />
          <p className="text-sm">
            My hobbies are traveling, watching movies, going to a bar.
          </p>
          <br />
          <p className="text-sm">
            I also enjoy learning foreign languages, French and Chinese when
            I&apos;m in high school, German when I&apos;m in university, and now
            Spanish.)
          </p>
          <br />
          <p className="text-sm">
            I am happy to meet people from many countries who are learning
            different languages.
          </p>
          <br />
          <p className="text-sm">
            As a student, I volunteered to support overseas students studying
            Japanese.
          </p>
          <br />
          <p className="text-sm">
            After graduation, I worked in a hotel teaching Chinese, Nepalese and
            Vietnamese staff in Japanese.
          </p>
          <br />
          <p className="text-sm">
            Currently, as a Japanese teacher, I teach Japanese to a wide variety
            of people, from beginner to advanced (L1).
          </p>
          <br />
          <p className="text-sm">
            Even beginners can learn easily as they carefully repeat and explain
            what they do not understand.
          </p>
          <br />
          <p className="text-sm">
            In a trial lesson, we will discuss your learning goals and teaching
            methodology in detail.
          </p>
          <br />
          <p className="text-sm">
            We do our best to learn together for our purpose!
          </p>
          <br />
          <p className="text-sm">Relax and have fun learning Japanese!</p>
          <p className="text-sm">I really want to meet you.</p>
        </>
      )}

      <br />
      <button
        className="text-cyan-500 text-sm"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {show ? "Hide" : "Show more"}
      </button>
    </div>
  );
};

export default About;
