import React from "react"
import {
  Navbar as HDNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react"

function Navbar() {
  return (
    <HDNavbar shouldHideOnScroll className="shadow-md" maxWidth='xl'>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            className="!bg-gradient text-light"
            startContent={<img src="/images/menu.svg" />}
          >
            Catalog
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Input
            type="text"
            label="Email"
            variant='bordered'
            endContent={<img src="/images/search.svg" />}
          />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="!bg-linear text-textMain"
            color="primary"
            variant="flat"
          >
            Kirish
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HDNavbar>
  )
}

export default Navbar
