'use client';

import Image from 'next/image';

import PhotoOfThiago from '../../../../public/assets/profile.png';
import Link from 'next/link';
import styles from './styles.module.scss';

type ProfileImageProps = {
  size?: 'small' | 'large';
  isMenuFloat?: boolean;
};

enum sizes {
  small = 40,
  large = 62
}

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
          width={size === 'large' ? sizes.large : sizes.small}
          height={size === 'large' ? sizes.large : sizes.small}
        />
      </div>
    </Link>
  );
};
