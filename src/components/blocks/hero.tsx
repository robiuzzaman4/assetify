import React from "react";
import Container from "@/components/shared/container";

const Hero = () => {
  return (
    <Container className="relative">
      <div className="w-full max-w-md md:max-w-xl mx-auto py-28 grid gap-8">
        <span className="grid gap-2">
          <h1 className="text-center text-3xl sm:text-4xl font-semibold tracking-tighter">
            Digital Assets Marketplace for Solo Entrepreneurs.
          </h1>
          <p className="text-center text-base font-normal text-muted-foreground">
            Assetify is crafted for solo entrepreneurs, offering a streamlined
            platform to purchase high-quality digital assets with ease.
          </p>
        </span>
      </div>
    </Container>
  );
};

export default Hero;
