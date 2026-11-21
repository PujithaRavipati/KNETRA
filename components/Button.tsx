import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: IconName;
};

export function Button({ href, children, variant = "primary", icon }: Props) {
  const external = /^(https?:|mailto:)/.test(href);
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  return external ? (
    <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
      {content}
    </a>
  ) : (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}
