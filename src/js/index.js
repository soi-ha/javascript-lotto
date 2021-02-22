import {
  $,
  getRandomNumber,
  isUniqueArray,
  showElement,
  hideElement,
  disableElement,
  enableElement,
  getMatchedValueCount,
} from './utils.js';
import { ALERT_MESSAGE, LOTTO } from './constants.js';
import Lotto from './objects/Lotto.js';
import LottoView from './views/LottoView.js';

class LottoApp {
  constructor() {
    this.view = new LottoView();
    this.data = {
      lottos: [],
      cost: 0,
    };

    this.bindEvents();
  }

  generateLottoNumbers() {
    const lottoNumbers = [];

    while (lottoNumbers.length < LOTTO.NUMBER_COUNT) {
      const num = getRandomNumber(LOTTO.MINIMUM_NUMBER, LOTTO.MAXIMUM_NUMBER);

      if (lottoNumbers.includes(num)) continue;
      lottoNumbers.push(num);
    }

    return lottoNumbers.sort((a, b) => a - b);
  }

  generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => new Lotto(this.generateLottoNumbers()));
  }

  handleSubmitMoney(event) {
    event.preventDefault();

    const money = event.target.elements['money-input'].valueAsNumber;

    if (money < LOTTO.PRICE) {
      alert(ALERT_MESSAGE.INVALID_MONEY_INPUT);
      return;
    }

    const lottoCount = Math.floor(money / LOTTO.PRICE);
    this.data.cost = LOTTO.PRICE * lottoCount;
    this.data.lottos = this.generateLottos(lottoCount);

    this.view.renderLottoList(this.data.lottos);
    showElement($('.lotto-list-section'));
    showElement($('.winning-number-form-section'));
    disableElement($('#money-input'));
    disableElement($('#money-submit-button'));

    $('.winning-number:first-child').focus();
  }

  handleToggleLottoNumbers() {
    $('.lotto-list').classList.toggle('show-number');
  }

  handleInputWinningNumbers(event) {
    if (!event.target.classList.contains('winning-number')) return;

    if (event.target.value.length >= 2) {
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.focus();
        event.target.nextElementSibling.select();
        return;
      }
      $('.bonus-number').focus();
      $('.bonus-number').select();
    }
  }

  handleSubmitWinningNumbers(event) {
    event.preventDefault();

    // TODO: 이벤트를 parameter로 넘기지 않는 방법 찾기
    const numbers = this.getWinningNumbers(event);
    if (!numbers) return;

    showElement($('.modal'));

    const result = this.getResult(numbers);
    this.view.renderWinningResult(result);
  }

  getWinningNumbers(event) {
    const bonusNumber = event.target.elements['bonus-number'].valueAsNumber;
    const $winningNumbers = [...event.target.elements['winning-number']];
    const winningNumbers = $winningNumbers.map(($number) => $number.valueAsNumber);

    if (!isUniqueArray([...winningNumbers, bonusNumber])) {
      alert(ALERT_MESSAGE.INVALID_WINNING_NUMBER_INPUT);
      return;
    }

    return { winningNumbers, bonusNumber };
  }

  getResult(numbers) {
    const { winningNumbers, bonusNumber } = numbers;
    const winningRankCounts = {
      first: 0, // 6개 일치
      second: 0, // 5개 + 보너스 숫자 일치
      third: 0, // 5개 일치
      fourth: 0, // 4개 일치
      fifth: 0, // 3개 일치
    };

    this.data.lottos.forEach((lotto) => {
      const matchedNumberCount = getMatchedValueCount(winningNumbers, lotto.numbers);

      if (matchedNumberCount === 6) {
        winningRankCounts.first += 1;
      } else if (matchedNumberCount === 5) {
        if (lotto.numbers.includes(bonusNumber)) {
          winningRankCounts.second += 1;
        }
        winningRankCounts.third += 1;
      } else if (matchedNumberCount === 4) {
        winningRankCounts.fourth += 1;
      } else if (matchedNumberCount === 3) {
        winningRankCounts.fifth += 1;
      }
    });

    let winningTotalPrice = 0;

    Object.entries(winningRankCounts).forEach(([rank, count]) => {
      if (rank === 'first') {
        winningTotalPrice += count * 2000000000;
      } else if (rank === 'second') {
        winningTotalPrice += count * 30000000;
      } else if (rank === 'third') {
        winningTotalPrice += count * 1500000;
      } else if (rank === 'fourth') {
        winningTotalPrice += count * 50000;
      } else if (rank === 'fifth') {
        winningTotalPrice += count * 5000;
      }
    });

    const winningRate = ((winningTotalPrice / this.data.cost) * 100).toFixed(2);

    return {
      winningRankCounts,
      winningRate,
    };
  }

  handleRestart() {
    this.data = {
      lottos: [],
      cost: 0,
    };

    hideElement($('.lotto-list-section'));
    hideElement($('.winning-number-form-section'));
    hideElement($('.modal'));
    enableElement($('#money-input'));
    enableElement($('#money-submit-button'));

    $('#money-input-form').reset();
    $('#winning-number-form').reset();
    $('#money-input').focus();
    $('.lotto-list').remove();
  }

  handleCloseModal() {
    hideElement($('.modal'));
  }

  bindEvents() {
    $('#money-input-form').addEventListener('submit', this.handleSubmitMoney.bind(this));

    $('.lotto-numbers-toggle-button').addEventListener(
      'change',
      this.handleToggleLottoNumbers.bind(this)
    );

    $('#winning-number-form').addEventListener('input', this.handleInputWinningNumbers.bind(this));
    $('#winning-number-form').addEventListener(
      'submit',
      this.handleSubmitWinningNumbers.bind(this)
    );

    $('.modal-close').addEventListener('click', this.handleCloseModal.bind(this));

    $('.restart-button').addEventListener('click', this.handleRestart.bind(this));
  }
}

new LottoApp();

// TODO: 추후 Step 2 구현에 필요한 초기 코드
// const $showResultButton = document.querySelector('.open-result-modal-button')
// const $modalClose = document.querySelector('.modal-close')
// const $modal = document.querySelector('.modal')
// const $lottoNumbersToggleButton = document.querySelector(
//   '.lotto-numbers-toggle-button'
// )

// const onModalShow = () => {
//   $modal.classList.add('open')
// }

// const onModalClose = () => {
//   $modal.classList.remove('open')
// }

// $showResultButton.addEventListener('click', onModalShow)
// $modalClose.addEventListener('click', onModalClose)
