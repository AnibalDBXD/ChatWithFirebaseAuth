import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
};

const Profile: React.FC<Props> = ({
  src = "/profilePlaceholder.png",
  alt = "Profile",
}): JSX.Element => <Image width={64} height={64} alt={alt} src={src} />;

export default Profile;
