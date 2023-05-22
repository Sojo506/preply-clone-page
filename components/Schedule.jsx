import { AiOutlineQuestionCircle } from "react-icons/ai";

const Schedule = () => {
  return (
    <section className="rounded-md bg-white p-3 shadow-md">
      <h3 className="font-bold">Schedule</h3>

      <div className="flex p-3">
        <AiOutlineQuestionCircle className="text-gray-500 cursor-pointer hover:text-gray-400" />
        <p>
          Choose the time for your first lesson. The timings are displayed in
          your local timezone.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
