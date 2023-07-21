export interface NavbarItem{
  title: string,
  url: string,
  className: string
}

const NavbarItems: NavbarItem[] = [
  {
    title: "Início",
    url: "/",
    className: 'navbar-items active'
  },
  {
    title: "Planos",
    url: "/planos",
    className: 'navbar-items'
  },
  {
    title: "Contato",
    url: "#",
    className: 'navbar-items'
  },
  {
    title: "Central do cliente",
    url: "#",
    className: 'navbar-items'
  }
];

export default NavbarItems;