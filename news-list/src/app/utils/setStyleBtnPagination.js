const setStyleBtnPagination = (number, currentPage) => {
  if (Number(number) === Number(currentPage)) {
    return { color: '#0029ff' };
  }
};

export default setStyleBtnPagination;
