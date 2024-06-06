import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SquaresPlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import logo from "../assets/logo.svg";

const servicesList = [
  {
    title: "Our Services",
    description: "Explore our wide range of services.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Our Team",
    description: "Get to know our dedicated team members.",
    icon: UserGroupIcon,
  },
];

const homeList = [
  {
    title: "Home Products",
    description: "Discover products for your home needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Our Story",
    description: "Learn about our journey and values.",
    icon: UserGroupIcon,
  },
];

const blogList = [
  {
    title: "Latest Blogs",
    description: "Stay updated with our latest blog posts.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Meet the Authors",
    description: "Get to know the minds behind the content.",
    icon: UserGroupIcon,
  },
  {
    title: "Latest Blogs",
    description: "Stay updated with our latest blog posts.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Meet the Authors",
    description: "Get to know the minds behind the content.",
    icon: UserGroupIcon,
  },
  {
    title: "Latest Blogs",
    description: "Stay updated with our latest blog posts.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Meet the Authors",
    description: "Get to know the minds behind the content.",
    icon: UserGroupIcon,
  },
];

const pagesList = [
  {
    title: "Product Catalog",
    description: "Browse through our extensive product catalog.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About the Company",
    description: "Learn more about our mission and vision.",
    icon: UserGroupIcon,
  },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = homeList.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-black w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              HOME
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex flex-col outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function Pages() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = pagesList.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-black w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              PAGES
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex flex-col outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function Services() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = servicesList.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-black w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              SERVICES
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex flex-col outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function Blogs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = blogList.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-black w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              BLOG
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex flex-col outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-0 mb-0 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-0 flex flex-row items-center gap-2">
      <Home />
      <Pages />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          TRACKING
        </ListItem>
      </Typography>
      <Services />
      <Blogs />
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full py-3 shadow-none bg-transparent">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img className="max-w-xs" src={logo} alt="logo"/>
        <div className="hidden lg:flex items-center gap-4">
          <NavList />
          <Button color="amber" size="sm">
            GET A QUOTE
          </Button>
          <Button color="black" size="sm">
            SIGN IN
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button color="amber" size="sm">
            GET A QUOTE
          </Button>
          <Button color="black" size="sm">
            SIGN IN
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
