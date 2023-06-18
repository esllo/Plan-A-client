import { SVGProps } from "react";

const IconForward: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00005 2.17574C4.76573 2.41005 4.76573 2.78995 5.00005 3.02426L9.97578 8L5.00005 12.9757C4.76573 13.2101 4.76573 13.5899 5.00005 13.8243C5.23436 14.0586 5.61426 14.0586 5.84857 13.8243L10.8243 8.84853C11.2929 8.3799 11.2929 7.6201 10.8243 7.15147L5.84857 2.17574C5.61426 1.94142 5.23436 1.94142 5.00005 2.17574Z"
        fill="#303136"
      />
    </svg>
  );
};

export default IconForward;