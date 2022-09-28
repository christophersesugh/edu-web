import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./testimonial-card";

export default function Testimonial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 986 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 985, min: 541 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      className="flex flex-col bg-[url('/assets/images/blog-bg.svg')] bg-center bg-cover bg-no-repeat py-12 px-8"
      id="testimonials"
    >
      <h1 className="text-3xl text-center underline py-8 text-green-600">
        Testimonials
      </h1>
      <Carousel
        responsive={responsive}
        containerClass="mb-12 grid place-items-center"
        itemClass="sm:m-1 md:m-4"
      >
        {items.map((item, index) => (
          <TestimonialCard key={`item-${index}`} />
        ))}
      </Carousel>
    </section>
  );
}

const items = ["1", "2", "3", "4", "5", "6"];
