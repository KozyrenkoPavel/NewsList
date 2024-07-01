const setStyleCardNews = (actveBtn) => {
  let styleNews = {};
  let styleImg = {};
  let styleTitle = {};
  let styleContent = {};
  let styleCard = {};
  let styleMoreDetails = { padding: '30px' };

  if (!actveBtn) {
    styleNews = {
      width: '1060px',
      height: '189px',
    };
    styleCard = {
      display: 'flex',
      justifyContent: 'space-between',
    };
    styleImg = { marginRight: '30px' };
    styleTitle = {
      width: '772px',
      height: '44px',
      lineHeight: '22px',
      marginBottom: '20px',
    };
    styleContent = {
      width: '772px',
      marginBottom: '31px',
    };
  } else {
    styleNews = {
      maxWidth: '520px',
      height: '256px',
    };
    styleTitle = {
      width: '459px',
      height: '66px',
      lineHeight: '20px',
      marginBottom: '25px',
    };
    styleContent = {
      width: '459px',
      marginBottom: '20px',
    };
    styleCard = {
      display: 'block',
    };
  }

  return {
    styleNews,
    styleImg,
    styleTitle,
    styleContent,
    styleCard,
    styleMoreDetails,
  };
};

export default setStyleCardNews;
