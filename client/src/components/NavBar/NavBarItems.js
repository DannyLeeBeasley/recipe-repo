export const NavBarItems = [
  {
    name: "Home",
    url: "/",
    cName: "nav-links",
    onClick: () => {},
  },
  {
    name: "Submit A Recipe!",
    url: "/newrecipe",
    cName: "nav-links",
    onClick: (e, user) => {
      if (!user) {
        e.preventDefault();
        alert("Create an Account Or Log In To Share Your Recipes!");
      }
    },
  },
  {
    name: "Ingredients",
    url: "/ingredients",
    cName: "nav-links",
    onClick: () => {},
  },
  {
    name: "About",
    url: "/about",
    cName: "nav-links",
    onClick: () => {},
  },
  {
    name: "Sign In/Sign Up",
    url: "/signin",
    cName: "nav-links",
    onClick: () => {},
  },
];
