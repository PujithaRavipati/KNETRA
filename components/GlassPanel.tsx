import styles from "./GlassPanel.module.css";

type Props = {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "aside";
  strong?: boolean;
  className?: string;
};

export function GlassPanel({ children, as: Tag = "div", strong = false, className = "" }: Props) {
  return <Tag className={`${styles.panel} ${strong ? styles.strong : ""} ${className}`}>{children}</Tag>;
}
