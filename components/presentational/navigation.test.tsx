/**
 * @Author: colinparsons
 * @Date:   2020-09-18T08:40:27-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-20T17:44:04-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { shallow } from "enzyme";

import Link from "next/link";

import { Container, Nav, Navbar } from "react-bootstrap";

import Navigation from "./navigation";

describe("Navigation", () => {
  const navigation = shallow(<Navigation />);

  it("has exactly 1 child", () => {
    expect(navigation.children()).toHaveLength(1);
  });

  describe("Container", () => {
    const container = navigation.find(Container);

    it("renders", () => {
      expect(container).toHaveLength(1);
    });

    it("has exactly 1 child", () => {
      expect(container.children()).toHaveLength(1);
    });

    describe("Navbar", () => {
      const navbar = container.find(Navbar);

      it("renders", () => {
        expect(navbar).toHaveLength(1);
      });

      it("has exactly 3 children", () => {
        expect(navbar.children()).toHaveLength(3);
      });

      describe("brand Link", () => {
        const brandLink = navbar.find(Link).at(0);

        it("renders", () => {
          expect(brandLink).toHaveLength(1);
        });

        it("links to the Home page", () => {
          expect(brandLink.prop("href")).toBe("/");
        });

        it("has exactly 1 child", () => {
          expect(brandLink.children()).toHaveLength(1);
        });

        describe("Navbar.Brand", () => {
          const navbarBrand = brandLink.find(Navbar.Brand);

          it("renders", () => {
            expect(navbarBrand).toHaveLength(1);
          });

          it("has exactly 1 child", () => {
            expect(navbarBrand.children()).toHaveLength(1);
          });

          describe("img", () => {
            const image = navbarBrand.find("img");

            it("has source `/brands/*.svg`", () => {
              expect(image.prop("src")).toMatch(/^\/brands\/.+\.svg$/);
            });

            it("has alt text `Foxes`", () => {
              expect(image.prop("alt")).toBe("Foxes");
            });
          });
        });
      });

      describe("Navbar.Toggle", () => {
        const navbarToggle = navbar.find(Navbar.Toggle);

        it("has aria controls label `collapsibleNavbar`", () => {
          expect(navbarToggle.prop("aria-controls")).toBe("collapsibleNavbar");
        });
      });

      describe("Navbar.Collapse", () => {
        it("renders", () => )
      });
    });
  });
});

describe("navigation", () => {
  const wrapper = shallow(<Navigation />);

  describe("navbar brand", () => {
    describe("link", () => {
      it("links to the Home page", () => {
        expect(wrapper.find("#navbar-brand-link").prop("href")).toBe("/");
      });
    });

    describe("image", () => {
      it("has source `/brands/*.svg`", () => {
        expect(wrapper.find("#navbar-brand-image").prop("src")).toMatch(
          /^\/brands\/.+\.svg$/
        );
      });

      it("has alt text `Kickers`", () => {
        expect(wrapper.find("#navbar-brand-image").prop("alt")).toBe("Kickers");
      });
    });
  });

  describe("collapsible navbar toggle", () => {
    it("renders once", () => {
      expect(wrapper.find(Navbar.Toggle)).toHaveLength(1);
    });
  });

  describe("collapsible navbar", () => {
    it("renders once", () => {
      expect(wrapper.find(Navbar.Collapse)).toHaveLength(1);
    });

    describe("nav", () => {
      it("renders once", () => {
        expect(wrapper.find(Navbar.Collapse).find(Nav)).toHaveLength(1);
      });

      it("has only 3 Link children", () => {
        expect(wrapp);
      });

      describe("Home", () => {
        it("links to the Home page", () => {
          expect(wrapper.find("#nav-link-home").prop("href")).toEqual("/");
        });

        it("is a nav link", () => {
          expect(
            wrapper
              .find("#nav-link-home")
              .find("a")
              .prop("className")
          ).toEqual("nav-link");
        });
      });

      describe("Roster", () => {
        it("links to the Roster page", () => {
          expect(wrapper.find("#nav-link-roster").prop("href")).toEqual(
            "/roster"
          );
        });

        it("is a nav link", () => {
          expect(
            wrapper
              .find("#nav-link-roster")
              .find("a")
              .prop("className")
          ).toEqual("nav-link");
        });
      });

      describe("Schedule", () => {
        it("links to the Schedule page", () => {
          expect(wrapper.find("#nav-link-schedule").prop("href")).toEqual(
            "/schedule"
          );
        });

        it("is a nav link", () => {
          expect(
            wrapper
              .find("#nav-link-schedule")
              .find("a")
              .prop("className")
          ).toEqual("nav-link");
        });
      });
    });
  });
});
