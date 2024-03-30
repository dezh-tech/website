import { IconProps } from "types/global";

export function MessageIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.75 7.43604V17.936C21.75 19.1787 20.7426 20.186 19.5 20.186H4.5C3.25736 20.186 2.25 19.1787 2.25 17.936V7.43603M21.75 7.43604C21.75 6.19339 20.7426 5.18604 19.5 5.18604H4.5C3.25736 5.18604 2.25 6.19339 2.25 7.43603M21.75 7.43604V7.67875C21.75 8.46008 21.3447 9.18548 20.6792 9.59498L13.1792 14.2104C12.4561 14.6554 11.5439 14.6554 10.8208 14.2104L3.32078 9.59498C2.65535 9.18548 2.25 8.46008 2.25 7.67875V7.43603"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
