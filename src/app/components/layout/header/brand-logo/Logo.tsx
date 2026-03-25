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
        data-oid="p:0dsme"
      />

      <Image
        src={"/images/header/logo.svg"}
        alt="logo"
        width={150}
        height={68}
        unoptimized={true}
        className="dark:block hidden"
        data-oid="k.wezg0"
      />
    </>
  );
};

export default Logo;
