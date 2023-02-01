import styles from "@/components/Button/Button.module.scss";

import type { FunctionComponent } from "react";

interface Props {
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FunctionComponent<Props> = ({ 
  disabled,
  children,
  onClick,
}) => {

  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
