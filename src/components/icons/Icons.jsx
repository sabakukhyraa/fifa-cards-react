export default function Icons({ iconName, className }) {
  const WalletIcon = (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.667 5.33333V2.66667C24.667 1.196 23.471 0 22.0003 0H4.66699C2.46166 0 0.666992 1.79467 0.666992 4V20C0.666992 22.9347 3.05899 24 4.66699 24H24.667C26.1377 24 27.3337 22.804 27.3337 21.3333V8C27.3337 6.52933 26.1377 5.33333 24.667 5.33333ZM22.0003 17.3333H19.3337V12H22.0003V17.3333ZM4.66699 5.33333C4.32369 5.31798 3.99953 5.17079 3.76203 4.92242C3.52452 4.67406 3.39197 4.34365 3.39197 4C3.39197 3.65635 3.52452 3.32594 3.76203 3.07758C3.99953 2.82921 4.32369 2.68202 4.66699 2.66667H22.0003V5.33333H4.66699Z"
        fill="white"
      />
    </svg>
  );
  const ArrowDownIcon = (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00003 2.95825C8.20714 2.95825 8.37503 3.12615 8.37503 3.33325V11.7613L12.4015 7.73483C12.548 7.58839 12.7854 7.58839 12.9319 7.73484C13.0783 7.88129 13.0783 8.11872 12.9319 8.26517L8.26519 12.9318C8.11875 13.0782 7.88131 13.0782 7.73487 12.9318L3.06821 8.26517C2.92176 8.11872 2.92176 7.88128 3.06821 7.73484C3.21465 7.58839 3.45209 7.58839 3.59854 7.73483L7.62503 11.7613V3.33325C7.62503 3.12615 7.79292 2.95825 8.00003 2.95825Z"
        fill="black"
      />
    </svg>
  );
  const CrossIcon = (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
        fill="black"
      />
      <path
        d="M32 16L16 32M16 16L32 32"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const ArrowRightIcon = (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4697 6.13617C15.7626 5.84328 16.2375 5.84328 16.5304 6.13618L25.8638 15.4697C26.0044 15.6103 26.0834 15.8011 26.0834 16C26.0834 16.1989 26.0044 16.3897 25.8637 16.5303L16.5304 25.8635C16.2375 26.1564 15.7626 26.1564 15.4697 25.8635C15.1768 25.5706 15.1768 25.0957 15.4697 24.8028L23.5227 16.75H6.66675C6.25253 16.75 5.91675 16.4142 5.91675 16C5.91675 15.5858 6.25253 15.25 6.66675 15.25H23.5228L15.4697 7.19683C15.1768 6.90393 15.1768 6.42906 15.4697 6.13617Z"
        fill="#979C9E"
      />
    </svg>
  );
  return (
    <>
      {iconName === "Wallet" && WalletIcon}
      {iconName === "ArrowDown" && ArrowDownIcon}
      {iconName === "ArrowRight" && ArrowRightIcon}
      {iconName === "Cross" && CrossIcon}
    </>
  );
}
