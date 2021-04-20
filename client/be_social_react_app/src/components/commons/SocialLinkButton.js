import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './SocialLinkButtonStyles';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTwitch,
  FaDiscord,
} from 'react-icons/fa';
import Link from '@material-ui/core/Link';

function SocialLinkButton(props) {
  const { type, href } = props;
  let socialLinkMetaData = {
    href: href,
  };
  let icon;
  switch (type) {
    case 'facebook':
      socialLinkMetaData.color = 'var(--facebook-color)';
      icon = <FaFacebookSquare />;
      break;
    case 'instagram':
      socialLinkMetaData.color = 'var(--instagram-color)';
      icon = <FaInstagram />;
      break;
    case 'twitter':
      socialLinkMetaData.color = 'var(--twitter-color)';
      icon = <FaTwitterSquare />;
      break;
    case 'twich':
      socialLinkMetaData.color = 'var(--twitch-color)';
      icon = <FaTwitch />;
      break;
    case 'diskord':
      socialLinkMetaData.color = 'var(--discord-color)';
      icon = <FaDiscord />;
      break;
    default:
      socialLinkMetaData.color = 'var(--facebook-color)';
      icon = <FaFacebookSquare />;
      break;
  }
  // console.log(color);
  const { socialButton } = useStyles(socialLinkMetaData);

  return (
    <div>
      <Link href={href} target="_blank">
        <IconButton className={socialButton} disableFocusRipple={true}>
          {icon}
        </IconButton>
      </Link>
    </div>
  );
}

export default SocialLinkButton;
