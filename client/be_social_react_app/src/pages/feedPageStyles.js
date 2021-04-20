const styles = {
  profileIntroList: {
    padding: '0',
    margin: '0',
    '& li': { padding: 0 },
  },
  profileIntroListTitle: {
    fontFamily: 'RajdhaniMedium, Arial',
    fontSize: '20px',
    lineHeight: '23px',
    marginTop: '25px',
    marginBottom: '10px',
  },
  photoCardWrap: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',
    marginTop: '25px',
  },
  profileIntroText: {
    fontFamily: 'RajdhaniRegular, Arial',
    fontSize: '12px',
  },
  photoCard: {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '50px',
    marginTop: '2px',
    cursor: 'pointer',
    borderRadius: '13px',
    transition: 'all .5s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  friendsAvatars: {
    width: '50px',
    height: '50px',
  },
  FriendsInfoWrap: {
    display: 'inline-block',
    marginLeft: '15px',
    transform: 'translateY(-3px)',
  },
  FriendsInfoName: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '14px',
    color: '#000',
    textDecoration: 'none',
  },
  FriendsInfoMembers: {
    fontFamily: 'RajdhaniMedium, Arial',
    fontSize: '12px',
  },
};

export default styles;
