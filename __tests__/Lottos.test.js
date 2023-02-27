import Lottos from "../src/domain/Lottos.js";
import Lotto from "../src/domain/Lotto.js";

describe("Lotto 객체 단위테스트", () => {
  test("로또들의 점수를 비교하는 함수 테스트", () => {
    const lotto1 = new Lotto([8, 21, 23, 41, 42, 43]);

    const lottos = new Lottos([lotto1]);
    lottos.addScoreBoard(3);

    expect(lottos.getLottoRanking()).toEqual({
      "3개 일치": 1,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 0,
      "6개 일치": 0,
    });
  });

  test("로또들의 점수를 비교하는 함수 테스트(보너스 숫자 있는 경우)", () => {
    const hasBonus = new Lotto([3, 5, 11, 16, 32, 38]);
    const winningNumbers = [2, 5, 11, 16, 32, 38];
    hasBonus.compareNumbers(winningNumbers);
    hasBonus.checkBonusNumber(5);

    const lottos = new Lottos([hasBonus]);

    lottos.compareLottosScore();

    expect(lottos.getLottoRanking()).toEqual({
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 1,
      "6개 일치": 0,
    });
  });

  test("총 수익을 계산하는 함수 테스트", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    const lotto3 = new Lotto([3, 4, 5, 6, 8, 9]);
    const lottos = new Lottos([lotto1, lotto2, lotto3]);
    lotto1.compareNumbers(winningNumbers);
    lotto2.compareNumbers(winningNumbers);
    lotto3.compareNumbers(winningNumbers);
    lottos.compareLottosScore();

    lottos.calculateBenefit();

    expect(lottos.getTotalBenefit()).toBe(2001550000);
  });

  test("총 수익률을 계산하는 함수 테스트", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    const lotto3 = new Lotto([3, 4, 5, 6, 8, 9]);
    const lottos = new Lottos([lotto1, lotto2, lotto3]);
    lotto1.compareNumbers(winningNumbers);
    lotto2.compareNumbers(winningNumbers);
    lotto3.compareNumbers(winningNumbers);
    lottos.compareLottosScore();

    lottos.calculateBenefit();

    expect(lottos.getBenefitRate(1000)).toBe(2001550);
  });
});