import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={"/images/header/dark-logo.svg"}
        alt="logo"
        width={150}
        height={68}
        unoptimized={true}
        className="dark:hidden"
        data-oid="61-r9s."
      />

      <Image
        src={"/images/header/logo.svg"}
        alt="logo"
        width={150}
        height={68}
        unoptimized={true}
        className="dark:block hidden"
        data-oid="5h7c.1."
      />
    </>
  );
};

export default Logo;
