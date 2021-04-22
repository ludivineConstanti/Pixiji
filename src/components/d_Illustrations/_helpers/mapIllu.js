export default (arrData, animationCase) => {
  arrData.forEach((subArr) => {
    subArr.forEach((dataObj) => {
      dataObj.animationCase = animationCase;
    });
  });
  return arrData;
};
