const setStyleLaptop = (isActiveBtn) => {
  let styleNews = {};
  let styleTitle = {
    width: '337.19px',
    height: '66px',
    marginBottom: '20px',
  };
  let styleContent = {
    width: '337.19px',
    height: '66px',
  };
  let styleImg = {
    width: '338px',
    height: '166px',
    marginBottom: '20px',
  };
  let styleCard = { display: 'block' };
  let styleMoreDetails = { padding: '22px' };

  if (!isActiveBtn) {
    styleNews = {
      width: '382px',
      height: '435px',
      padding: '22px',
    };
  } else {
    styleNews = {
      width: '382px',
      height: '256px',
      padding: '22px',
    };
  }

  return {
    styleNews,
    styleImg,
    styleCard,
    styleTitle,
    styleContent,
    styleMoreDetails,
  };
};

export default setStyleLaptop;
