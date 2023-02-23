import { $ } from '../../util/web/querySelector.js';
import getFormData from '../../util/web/getFormData.js';

class WinningLottoInputView {
  #submitWinningLotto;

  constructor(controllerFunction) {
    this.#submitWinningLotto = controllerFunction;
    this.#setListener();
  }

  show() {
    $('#winningLottoInputMenu').classList.remove('hidden');
  }

  hide() {
    $('#winningLottoInputMenu').classList.add('hidden');
  }

  #setListener() {
    $('#resultButton').addEventListener('click', (event) => {
      event.preventDefault();

      const formData = getFormData($('#winningLottoInputForm'));
      this.#submitWinningLotto(formData);
    });
  }
}

export default WinningLottoInputView;