import { whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton({ label, message }: { label: string; message?: string }) {
  return (
    <a className={styles.button} href={whatsappLink(message)} target="_blank" rel="noopener">
      <Icon name="whatsapp" size={22} />
      <span className={styles.label}>{label}</span>
    </a>
  );
}
