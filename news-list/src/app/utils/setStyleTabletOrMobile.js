const setStyleTabletOrMobile = () => {
  let styleContainer = {
    width: '425px',
    padding: '36px 20px',
  };
  let styleHeader = {
    display: 'block',
  };
  let styleTitle = {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '23px',
  };
  let styleTitleH1 = {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    fontSize: '24px',
    lineHeight: '27.6px',
  };
  let styleInput = { width: '100%' };
  let styleDisplay = { right: '20px' };
  let container = { padding: '0' };

  return {
    styleHeader,
    styleContainer,
    styleTitle,
    styleTitleH1,
    styleInput,
    styleDisplay,
    container,
  };
};

export default setStyleTabletOrMobile;
