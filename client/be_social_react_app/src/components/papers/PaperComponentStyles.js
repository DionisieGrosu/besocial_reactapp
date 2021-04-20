const styles = {
  paperBlock: {
    widht: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 'var(--marginTop)',
    padding: '25px 20px',
  },
  paperTitle: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '16px',
  },
  photoCard: {
    borderRadius: '13px',
    overflow: 'hidden',
  },
  postFirstPhotos: {
    width: '100%',
    height: '300px',
  },
  postSecondPhotos: {
    width: '100%',
    height: '200px',
  },
  postProfileInfoWrap: {
    // display: 'inline-block',
    marginLeft: '15px',
  },
  postCommentInfoWrap: {
    marginLeft: '15px',
    transform: 'translateY(10px)',
  },
  postProfileInfo: {
    fontFamily: 'RajdhaniRegular, Arial',
    fontSize: '16px',
  },
  postProfileName: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '16px',
  },
  postedTime: {
    fontFamily: 'RajdhaniRegular, Arial',
    fontSize: '12px',
    color: 'var(--bold-font-color)',
  },
  postAttachment: {
    padding: '20px 0',
    borderBottom: '1px solid var(--icons-color)',
  },
  postInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7px 10px',
    borderBottom: '1px solid var(--icons-color)',
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '14px',
  },
  postLikes: {},
  commentText: {},
  postLikesIcon: {
    color: 'red',
    fontSize: '24px',
    cursor: 'pointer',
  },
  postLikesCount: {
    display: 'inline-block',
    marginLeft: '10px',
    transform: 'translateY(-6px)',
  },
  postComment: {
    paddingBottom: '35px',
    borderBottom: '1px solid var(--icons-color)',
  },
};

export default styles;
