import { ERROR_MESSAGE } from '../constants/constants';
import LottoGenerator from '../model/lottoGenerator';

describe('구입 금액 검증 테스트 ', () => {
  const lottoGenerator = new LottoGenerator();
  test('입력 값이 숫자인지 검증한다.', () => {
    const cashInput = '';
    expect(() => lottoGenerator.buyLotto(cashInput)).toThrow(ERROR_MESSAGE.NOT_A_NUMBER_CASH_INPUT);
  });
  test('입력 값의 범위가 1000 - 50000인지 검증한다.', () => {
    expect(() => lottoGenerator.buyLotto('50001')).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
    expect(() => lottoGenerator.buyLotto('999')).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });
  test('입력 값이 1000 단위인지 검증한다.', () => {
    const cashInput = '1500';
    expect(() => lottoGenerator.buyLotto(cashInput)).toThrow(ERROR_MESSAGE.INVALID_UNIT);
  });
  test('올바른 입력 값을 입력하면 오류가 발생하지 않는다.', () => {
    expect(() => lottoGenerator.buyLotto('1000')).not.toThrow();
    expect(() => lottoGenerator.buyLotto('50000')).not.toThrow();
  });
});