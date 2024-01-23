import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <h3 className="text-xl font-bold">Subcribe to our Newsletter</h3>
          <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className="flex items-center gap-5">
          <Input className="flex-grow" placeholder="Enter email address" />
          <Button>Subcribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
