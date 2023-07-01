import React from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Box, Text, Image } from "@mantine/core";
import { useRef } from "react";
import Link from "next/link";

function AppCarousel({ news }) {
    const api = news.data
    const autoplay = useRef(Autoplay({ delay: 2500 }));
    return (
        <>
            <Carousel
                sx={{ maxWidth: "100%", }}
                mx="auto"
                loop
                withIndicators
                height={"60vh"}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                styles={{
                    indicator: {
                        width: 12,
                        height: 4,
                        transition: "width 250ms ease",
                        "&[data-active]": {
                            width: 40,
                        },
                    },

                }}
            >
                {api.slice(4, 7).map((item) => {
                    return (
                        <Carousel.Slide key={item.id}>
                            <Link href={`news/${item.id}`}>
                                <Image
                                    style={{ position: "relative", borderRadius: "10px", backgroundPosition: "center", backgroundSize: "cover" }}
                                    src={item.image.url}
                                    alt="img"
                                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,                  
              33vw"
                                />
                                <Box
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-center"
                                    className="carouselText"
                                >
                                    {<Box className="blur-one" sx={{ width: "100%", textAlign: "center", position: "absolute", bottom: "0", left: "0", padding: "30px", backdropFilter: "20px", background: "#333" }}>
                                        <Text sx={{ color: "white", fontSize: "23px" }}>{item.text}...</Text>
                                    </Box>}
                                </Box>
                            </Link>
                        </Carousel.Slide>
                    );
                })}
            </Carousel >
        </>
    );
};

export default AppCarousel

