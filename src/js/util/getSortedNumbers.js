const SORT_TYPE = Object.freeze({
  INCREASING: 'ASC',
  DECREASING: 'DESC',
});

const getSortedNumbers = (numbers, orderType) => {
  const copiedNumbers = numbers.slice();

  if (orderType === SORT_TYPE.INCREASING) {
    const sortedNumbers = copiedNumbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  const sortedNumbers = copiedNumbers.sort((a, b) => b - a);
  return sortedNumbers;
};

export default getSortedNumbers;