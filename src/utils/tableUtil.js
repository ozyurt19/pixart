const setCellColor = (data, ri, ci, color) => {
  const tmp = {...data};
  if (!tmp[ri]) {
    tmp[ri] = [];
  }
  tmp[ri][ci] = color;

  return tmp;
};

export {setCellColor};
