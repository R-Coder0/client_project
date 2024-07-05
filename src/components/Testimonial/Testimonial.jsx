import React from "react";
import Slider from "react-slick";
import Review1 from '../../assets/Testimonial/review1.jpg';
import Review2 from '../../assets/Testimonial/review2.jpg';
import Review3 from '../../assets/Testimonial/review3.jpg';
import Review4 from '../../assets/Testimonial/review4.jpg';

const testimonialData = [
  {
    id: 1,
    name: "Omkar",
    text: "I had an excellent experience with Varsha Packers and Movers. Their services were reasonably priced and they provided safe packaging for my belongings. They gave proper instructions for the moving process and were easily accessible for any questions or concerns I had. The quick assistance I received from them made the entire moving process smooth and hassle-free.",
    img: Review1
  },
  {
    id: 2,
    name: "Surbhi",
    text: "Varsha Packers and Movers are excellent in their services. They carefully handle all the goods and provide proper instructions to ensure a hassle-free move. Their team is highly professional and efficient in their work. I strongly recommend Varsha Packers and Movers for all your moving needs.",
    img: Review2
  },
  {
    id: 3,
    name: "Suhail",
    text: "Varsha packers and movers provides very well service they are reached on time and his driver too expericed and well manners and help also your packs in moving and they always provides comparable rates to others always provides better rates.",
    img: Review3
  },
  {
    id: 4,
    name: "Deep",
    text: "Varsha Movers And Packers has done a very good job, very hardworking this boy is specially small boy, he is very hard working and very cute and very good work. I am very happy.",
    img: Review4
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="py-10">
      <div className="container">
        {/* testimonial section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
        >
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="my-6">
                {/* card */}
                <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                  <div className="shadow-lg rounded-xl overflow-hidden w-[200px] sm:w-auto">
                    <img
                      src={img}  // Use img directly
                      alt=""
                      className="block mx-auto h-[300px] w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4 ml-4">
                    <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                      “{text}”
                    </p>
                    <h1 className="text-xl font-bold">{name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
