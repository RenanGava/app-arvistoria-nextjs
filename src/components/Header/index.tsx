/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../Menu";
import { Container } from "./style";

export function Header() {
    return (
        <Container>
            <Link href={'/'}>
                <img
                    src="https://scontent.fguz3-1.fna.fbcdn.net/v/t1.6435-9/106924977_103482128101513_8960352061657037403_n.jpg?stp=c0.83.526.275a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGsXn7dSG303TLceLYM95LVzal3cHTOtfLNqXdwdM618n-wy9nfN5-q1okWBOy62qLymQIqhdXn8tFXJ4nVb0QR&_nc_ohc=JcSPHu1mt08AX9QGb78&_nc_ht=scontent.fguz3-1.fna&oh=00_AT_WM2GbgWz5tsBYKeNgYFtgXC7zq3heaC1i7p3spPebxg&oe=62DFFD62"
                    alt="Logo"
                />
            </Link>
            <Menu />
        </Container>
    )
}