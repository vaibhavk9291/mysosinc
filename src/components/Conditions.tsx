"use client";

import { ArrowLeft, ArrowRight, ArrowRightCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const conditionsData = [
  {
    id: "sports-massage",
    title: "Sports Massage",
    description: "Sports massage manipulates soft tissue layers to reduce tension caused by exercise, enhance performance and mobility, ease chronic pain, aid injury recovery, and prevent future injuries — for athletes and non-athletes alike.",
    href: "/sports-massage",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "injury-therapy",
    title: "Injury Therapy",
    description: "Comprehensive injury assessment, tailored hands-on treatment, and personalised rehabilitation programmes. We treat illness, injury or disability through movement, exercise, manual therapy, education and advice.",
    href: "/injury-therapy",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "remedial-massage",
    title: "Remedial Massage",
    description: "Focused massage treatment that eases specific aches, restrictions or dysfunction — whether from work arrangements, hobbies, stress, accident or injury. Think of it as a sports massage for the non-sporty.",
    href: "/remedial-massage",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cupping",
    title: "Cupping Therapy",
    description: "A centuries-old holistic therapy using suction cups to stimulate blood flow, release tension, and promote healing. Excellent for muscle pain, circulation, detoxification, and stress relief.",
    href: "/cupping",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Conditions() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="services" className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight">
              Our Services
            </h2>
            <p className="max-w-lg text-white/70 text-lg">
              Our treatments address the root cause — not just the symptom. Whether you're an athlete or a desk worker, we help every body function optimally.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white disabled:pointer-events-auto disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white disabled:pointer-events-auto disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full pb-12">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          {/* Modified margins to align exactly with standard container padding on the left */}
          <CarouselContent className="ml-0 md:ml-[calc((100vw-min(100vw,80rem))/2+1.5rem)] lg:ml-[calc((100vw-min(100vw,80rem))/2+3rem)]">
            {conditionsData.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[380px]"
              >
                <a href={item.href} className="group rounded-2xl block">
                  <div className="group relative h-full min-h-[28rem] max-w-full overflow-hidden rounded-2xl md:aspect-[4/5] lg:aspect-[4/5] border border-white/10 bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-overlay grayscale-[30%]"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-3 text-2xl font-bold tracking-tight">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-3 text-white/80">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-brand-teal">
                        Learn more{" "}
                        <ArrowRightCircle className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-12 flex justify-center gap-2">
          {conditionsData.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-brand-teal w-6" : "bg-white/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to condition ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
