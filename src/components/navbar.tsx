import {
  Navbar as HeroUINavbar,
  NavbarContent,
} from "@heroui/navbar";
import { ThemeSwitch } from "./ThemeSwitch";


export const Navbar = () => {


  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-transparent" isBlurred={false}>
      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>

    </HeroUINavbar>
  );
};
