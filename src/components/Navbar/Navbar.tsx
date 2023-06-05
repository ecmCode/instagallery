import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { classes } from "@/utility/classes";

const Navbar = () => {
  const routes = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Login", href: "/login" },
  ];

  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.routes}>
        {routes?.map((route) => (
          <li key={route.name.toLowerCase()}>
            <Link
              href={route.href}
              className={classes(
                styles.link,
                router.pathname === route.href
                  ? "text-green-600 font-semibold"
                  : ""
              )}
            >
              {route.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
