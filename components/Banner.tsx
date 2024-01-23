import { Input } from "./ui/input";

const Banner = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center bg-[url('https://ik.imagekit.io/ngnp3wo0m/banner-4.webp?updatedAt=1705024378331')] min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24">
      <div className="w-full sm:w-[728px] flex flex-col items-center justify-center text-center gap-6 px-4">
        <h1 className="text-6xl font-bold">
          Healthy vegetable that you deserve to eat fresh
        </h1>
        <p className="text-md">
          We source and sell the very best beef, lamb and pork, sourced with the
          greatest care from farmer.
        </p>
        <Input size={32} placeholder="What are you looking for" />
      </div>
    </div>
  );
};

export default Banner;
