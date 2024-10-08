import Link from "next/link";
import { usePathname } from "next/navigation";

const Sider = () => {
  const pathname = usePathname();

  const menu = [
    {
      id: 1,
      title: "Currency",
      link: "/",
    },
    {
      id: 2,
      title: "Katha to Square Feet",
      link: "katha-to-square-feet",
    },
    {
      id: 3,
      title: "Measurment",
      link: "measurment",
    },
    {
      id: 4,
      title: "About",
      link: "about",
    },
    {
      id: 5,
      title: "Sign Up",
      link: "login",
    },
  ];

  return (
    <div>
      <div className="mt-10 text-[16px] font-medium">Getting started</div>
      <div className="mt-4">
        {menu &&
          menu.map((item, i) => {
            return (
              <ul key={i} className="mb-4">
                <li
                  className={`${
                    pathname === `/${item.link}` ||
                    pathname === `${item.link ? "bg-bgColor" : " "}`
                  } hover:bg-bgColor hover:bg-opacity-20 px-3 py-1 rounded-md transition duration-600 ease-in-out text-[#98989c] hover:text-[#9c9c9e]`}
                >
                  <Link href={`/${item.link}`}>
                    <span
                      className={`text-[#98989c]  ${
                        pathname === `/${item.link}` ||
                        pathname === `${item.link}`
                          ? "text-[#98989c] font-semibold hover:text-[#9c9c9e]"
                          : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default Sider;
