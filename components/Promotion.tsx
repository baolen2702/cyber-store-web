import { Button } from "./ui/button";

const Promotion = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex flex-col items-end  bg-[url('https://ik.imagekit.io/ngnp3wo0m/bg_3.jpg')] min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24">
      <div className="w-full sm:w-[728px] flex flex-col items-start justify-center gap-6 px-4">
        <span>Best Price For You</span>
        <h1 className="text-6xl">
          <span className="font-bold">Fresh Exotic Vegetables</span> <br />
          in Our Store
        </h1>
        <p className="text-md">
          The generated Lorem Ipsum is therefore always free from repetition
          injected humour, or non-characteristic words etc.
        </p>
        <Button className="rounded-full" size="lg" variant="outline">BUY NOW</Button>
      </div>
    </div>
  );
};

export default Promotion;
