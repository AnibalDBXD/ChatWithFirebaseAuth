import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  small?: boolean;
};

const Profile: React.FC<Props> = ({
  src = "/profilePlaceholder.png",
  alt = "Profile",
  className,
  small,
}): JSX.Element => {
  const size = small ? 50 : 64;
  return (
    <Image className={`rounded-full ${className}`} width={size} height={size} alt={alt} src={src} />
  );
};

export default Profile;
