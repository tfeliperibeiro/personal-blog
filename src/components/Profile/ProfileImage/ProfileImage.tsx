'use client';

import Image from 'next/image';

import PhotoOfThiago from '@public/assets/images/thiago.jpg';
import Link from 'next/link';
import styles from './styles.module.scss';

type ProfileImageProps = {
  size?: 'small' | 'large';
  isMenuFloat?: boolean;
};

export const ProfileImage = ({
  size = 'large',
  isMenuFloat = false
}: ProfileImageProps) => {
  return (
    <Link
      href={'/'}
      className={isMenuFloat ? styles['profile-float'] : styles.profile}
    >
      <div>
        <Image
          src={PhotoOfThiago}
          alt="A photo of Thiago"
          quality={100}
          priority={true}
          className="rounded-full"
          width={size === 'large' ? 62 : 40}
          height={size === 'large' ? 62 : 40}
        />
      </div>
    </Link>
  );
};
