const setMediaQuery = (actveBtn, width) => {
  let style = {};
  let styleImg = {};
  let styleTitle = {};
  let styleContent = {};
  let styleCard = {};
  let styleHeader = {};

  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);
  function handleTabletChange(e) {
    if (!e.matches) {
      styleHeader = {
        display: 'block',
      };
    } else {
      styleHeader = {
        display: 'flex',
      };
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  return { styleHeader };
};

export default setMediaQuery;
