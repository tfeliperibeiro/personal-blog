import { Posts } from '@components/Posts';
import { ProfileInformation } from '@components/Profile/ProfileInformation';

export default function Home() {
  return (
    <>
      <ProfileInformation />
      <Posts />
    </>
  );
}
