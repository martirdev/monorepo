import { Link } from "@tanstack/react-router";
import img from "./tshirt.png";

export function MainSection() {
  return (
    <div className="px-4 xl:px-2 py-10 flex flex-col lg:flex-row gap-2 min-h-[70vh]">
      <Link
        to="/product/$productId"
        params={{ productId: "t001_Black_XS" }}
        className="rounded-lg overflow-hidden"
      >
        <div className="flex-1  h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} />
        </div>
      </Link>
      <Link
        to="/product/$productId"
        params={{ productId: "t001_White_S" }}
        className="rounded-lg overflow-hidden"
      >
        <div className="flex-1 h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} alt="" />
        </div>
      </Link>
      <Link
        to="/product/$productId"
        params={{ productId: "t001_Peach_S" }}
        className="rounded-lg overflow-hidden"
      >
        <div className="flex-1 h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} alt="" />
        </div>
      </Link>
    </div>
  );
}
