const stylesCardNews = (actveBtn) => {
  let style = {};
  let styleImg = {};
  let styleTitle = {};
  let styleContent = {};
  let styleCard = {};

  if (actveBtn) {
    style = {
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
    style = {
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
    style,
    styleImg,
    styleTitle,
    styleContent,
    styleCard,
  };
};

export default stylesCardNews;
