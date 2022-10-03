import React from "react";
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
        {items.map((person, index) => (
          <TestimonialCard key={`item-${index}`} person={person} />
        ))}
      </Carousel>
    </section>
  );
}

const items = [
  {
    name: "Ray S.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Google",
  },
  {
    name: "Matt S.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Meta",
  },
  {
    name: "Alex T.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Amazon",
  },
  {
    name: "Amin G.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Google",
  },
  {
    name: "Anne L.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Google",
  },
  {
    name: "Simcha C.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Spotify",
  },
  {
    name: "Mike Y.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "Google",
  },
  {
    name: "Nader A.",
    text: "Edu Web was the foundation of my interview preparation. The clear approach and walkthrough articles make it easy to learn essential topics necessary for big-tech interviews. Coming from a non-engineering background, I had a lot of data structure & algorithm gaps to fill in my knowledge. Edu Web elegantly and seamlessly filled those gaps in a very enjoyable manner. I highly recommend Structy!",
    occupation: "Software Engineer",
    company: "IBM",
  },
];
