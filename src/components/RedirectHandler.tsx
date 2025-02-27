import { useEffect } from "react";

export const redirectLinks = [
  {
    route: "/ddsr/zapoli",
    redirect: "https://github.com/zapoli",
  },
];

const RedirectHandler = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    const redirect = redirectLinks.find((r) => r.route === currentPath);

    if (redirect) {
      window.location.href = redirect.redirect;
    }
  }, []);

  return null;
};

export default RedirectHandler;
