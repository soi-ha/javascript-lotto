import ERROR_MESSAGE from '../constants/messages/errorMessage';
import LOTTO_RULE from '../constants/rules/lottoRule';

class BonusNumber {
  #bonumNumber;

  constructor(number, winningLotto) {
    const parsedBonusNumber = Number(number);
    this.#validataeBonusNumber(parsedBonusNumber, winningLotto);
    this.#bonumNumber = parsedBonusNumber;
  }

  #validataeBonusNumber(number, winningLotto) {
    this.#isPositiveNumber(number);
    this.#isValidNumberRange(number);
    this.#hasRedundantNumber(number, winningLotto);
  }

  #isPositiveNumber(number) {
    if (isNaN(number) || number < 1) {
      throw new Error(ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
    }
  }

  #isValidNumberRange(number) {
    if (number > LOTTO_RULE.RANDOM_NUMBER_TO || number < LOTTO_RULE.RANDOM_NUMBER_FROM) {
      throw new Error(ERROR_MESSAGE.IS_INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  #hasRedundantNumber(number, winningLotto) {
    const winningLottoNumbers = winningLotto.lottoNumbers;

    if (winningLottoNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.HAS_REDUNDENT_LOTTO_NUMBER);
    }
  }

  get value() {
    return this.#bonumNumber;
  }
}

export default BonusNumber;
