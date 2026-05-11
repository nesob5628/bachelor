import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ReturnBtnProps {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export default function ReturnBtn({ text, onClick, href, disabled }: ReturnBtnProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="pkt-button pkt-button--white return-button"
    >
      <div className="return-icon">
        <Image
          src="https://punkt-cdn.oslo.kommune.no/16/icons/arrow-return.svg"
          alt="Tilbake"
          fill
        />
      </div>
      {text}
    </button>
  );
}
