import Image from "next/image";

type Props = {
  handleClick?: () => void
}

export default function IconButton({ handleClick }: Props) {
  return <button onClick={() => handleClick}>
    <Image src={"/trash.svg"} alt="trash" width={34} height={34} />
  </button>
}