import requests from "../utils/requests";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <div className="flex px-10 sm:px-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
          className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-orange-300 active:text-red-500"
        >
          {title}
        </h2>
      ))}
    </div>
  );
}

export default NavBar;
