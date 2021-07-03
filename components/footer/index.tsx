import { ReactNode } from "react";
import s from "./style.module.css";

interface FooterProps {
  children?: ReactNode;
  links?: LinkProps[];
}

interface LinkProps {
  url: string;
  text: string | ReactNode;
  external?: boolean;
}

export default function Footer({ children, links }: FooterProps) {
  return (
    <footer className={s.footer}>
      <ul className={s.footerLinks}>
        {links?.map((link) => (
          <FooterLink key={link.url} {...link} />
        ))}
      </ul>
      {children}
    </footer>
  );
}

export function FooterLink({ url, text, external = true }: LinkProps) {
  return (
    <li className={s.footerLinkItem}>
      <a
        className={s.footerLinkAnchor}
        {...(!!external ? { target: "_blank", rel: "noreferer noopener" } : {})}
        href={url}
      >
        {text}
      </a>
    </li>
  );
}
