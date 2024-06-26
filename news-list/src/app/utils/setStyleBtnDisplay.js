const setStyleBtnDisplay = (number, currentPage) => {
  if (Number(number) === Number(currentPage)) {
    return { color: '#0029ff' };
  }
};

export default setStyleBtnDisplay;
