import Comments from "./Comments";
import Rating from "./Rating";

const Students = () => {
  return (
    <section className="rounded-md bg-white px-3 py-3 shadow-md mt-5 w-full max-w-[720px]">
      <h2 className="font-bold py-5  border-b border-b-gray-200">
        What students say
      </h2>

      <Rating />

      <Comments />
    </section>
  );
};

export default Students;
