import styles from "./button.module.scss";

export enum ButtonStyle {
  primary,
  danger,
  neutral
}

type Props = {
  handler?: () => void
  text: string
  className?: string
  buttonStyle: ButtonStyle
}

export default function Button({ handler, text, buttonStyle }: Props) {
  const getButtonClass = () => {
    switch (buttonStyle) {
      case ButtonStyle.primary:
        return styles.btn_primary;
      case ButtonStyle.danger:
        return styles.btn_danger;
      case ButtonStyle.neutral:
        return styles.btn_neutral;
      default:
        return styles.btn_primary;
    }
  };

  return <button
    className={`${getButtonClass()}`}
    onClick={handler}
    type="submit"
  >{text}</button>
}