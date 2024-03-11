"use client";
import { useRef, useState } from "react";
import Card from "./components/card";
import TestimonialsCard from "./components/Testimonials";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState("City"); // Initialize selectedTime as empty string
  const timeOptions = [
    "City",
    "Haryana",
    "Uttar Pradesh",
    "Punjab",
    "Rajasthan",
  ];

  const handleTimeChange = (e) => {
    // Update selectedTime when the user selects a new option
    setSelectedTime(e.target.value);
  };
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };
  return (
    <section className="container p-8 items-center m-auto ">
      <div className="bg-[#dadfe5] rounded-[3rem] shadow-xl shadow-black/15 flex flex-col p-6">
        <div className="text-[#012951] text-4xl gap-2  font-semibold flex items-center m-auto">
          <span>Experience learning at </span>
          <span className="text-[#ff6905]"> {"  "}our centers near you.</span>
        </div>
        <div className=" flex flex-row  mt-8">
          <div className="w-2/5   flex justify-center">
            <img
              src="country.png"
              alt="images"
              className="h-[23rem] w-[20rem]"
            />{" "}
          </div>
          <div className="w-2/5 text-sm">
            <p>
              Our ever-growing number of centers, spread across India, are a
              melting pot of absolute. They are hubs for academic excellence
              where dreams are nurtured, skills are honed, and futures are
              built.
            </p>
            <ul className="my-4 ">
              {" "}
              <li className="my-2 font-semibold">
                {" "}
                <span className="bg-[#edf5fe] text-xs rounded-full p-[2px]  px-[5px] border border-black mx-2 text-[#ff6905]">
                  &#10003;
                </span>{" "}
                Personalized learning from top educators in your very own city
              </li>
              <li className="my-2 font-semibold">
                <span className="bg-[#edf5fe] text-xs rounded-full p-[2px]  px-[5px] border border-black mx-2 text-[#ff6905]">
                  &#10003;
                </span>
                State-of-the-Art Facilities with latest technologies
              </li>
              <li className="my-2 font-semibold">
                <span className="bg-[#edf5fe] text-xs rounded-full p-[2px]  px-[5px] border border-black mx-2 text-[#ff6905]">
                  &#10003;
                </span>
                Unparalleled in-person experience
              </li>
            </ul>{" "}
            <div className="text-[#ff6905] text-3xl  font-semibold  ">
              Checkout the Center Closer To you
            </div>
            <div className="flex flex-col  gap-2">
              {" "}
              <select
                className="text-2xl p-3 w-2/3 bg-[#dadfe5] appearance-none outline-none py-1 px-2 border border-[#ff6905] rounded-md text-gray-400"
                value={selectedTime}
                onChange={handleTimeChange}
              >
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>{" "}
              <select
                className="text-2xl w-2/3 p-3 bg-[#dadfe5] appearance-none outline-none py-1 px-2 border border-[#ff6905] rounded-md text-gray-400"
                value={selectedTime}
                onChange={handleTimeChange}
              >
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button className="p-3 px-6 shadow-xl my-6 shadow-black/20  text-white bg-[#ff6905] rounded-3xl ">
              Find a Center <span className="mx-1">&#x2C3;</span>
            </button>{" "}
          </div>
        </div>{" "}
      </div>
      <div className="m-auto text-3xl font-semibold justify-center flex text-center my-6">
        <p className="text-[#012951]">
          Not sure which Course is for you?
          <br />
          Checkout these{" "}
          <span className="underline text-[#ff6905]">Free lectures</span> to
          help you choose
        </p>
      </div>{" "}
      <div className="flex md:flex-row my-7 flex-col gap-4 justify-around items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <button className="p-3 px-6 shadow-xl my-6 shadow-black/20   text-white bg-[#ff6905] rounded-3xl ">
          Explore More <span className="mx-1">&#x2C3;</span>
        </button>{" "}
      </div>
      <div className="bg-[#ff6905] shadow-xl my-8 max-w-[70rem] m-auto items-center shadow-black/15 rounded-[3rem] h-[20rem]  p-5 text-white">
        <p className="text-3xl justify-center mb-8 flex font-serif font-semibold">
          Meet our top mentors
        </p>
        <div className="flex flex-row items-center">
          {" "}
          <button
            className="text-xl font-bold border border-black rounded-full px-2"
            onClick={scrollLeft}
          >
            &#x2C2;
          </button>
          <div
            ref={containerRef}
            className="flex items-center w-[60rem] justify-center gap-[5rem] m-auto sm:overflow-y-auto scroll-container"
          >
            <TestimonialsCard /> <TestimonialsCard /> <TestimonialsCard />{" "}
            <TestimonialsCard /> <TestimonialsCard /> <TestimonialsCard />{" "}
            <TestimonialsCard /> <TestimonialsCard /> <TestimonialsCard />{" "}
          </div>{" "}
          <button
            className="text-xl font-bold border border-black rounded-full px-2"
            onClick={scrollRight}
          >
            &#x2C3;
          </button>
        </div>
      </div>
    </section>
  );
}
