const TestimonialsCard = ({ img, name, description }) => {
  return (
    <>
      <section>
        <div className="w-60 h-fit mb-8 border-[#ff6905] flex items-center flex-col  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border  rounded-xl  ">
          <div>
            <img
              src="/education-pattern-background-doodle-style_53876-115365.avif"
              className=" shadow-xl shadow-black/10 w-60 rounded-xl h-56"
              alt="service-img"
            />
          </div>
          <div className="flex flex-col p-3 w-full">
            <div className="text-xl mb-[3rem]  text-gray-800 font-semibold">
              Full Name
            </div>
            <span className="text-gray-800 font-semibold">
              {" "}
              &#x1F553; 10 Years
            </span>
            <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default TestimonialsCard;
