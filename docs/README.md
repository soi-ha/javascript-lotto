# 로또 미션

## 기능 목록

- [x] 로또를 구입한다.
- [x] 금액에 해당하는 로또를 발급해야 한다.
- [x] 번호 보기 토글 버튼을 클릭해 로또 번호를 볼 수 있어야 한다.
- [x] 로또 번호는 랜덤으로 생성된다.
- [x] 당첨 번호와 보너스 번호를 입력한다.
- [x] 결과 확인하기 버튼을 클릭해 당첨 개수와 수익률을 모달로 확인할 수 있어야 한다.
- [x] 'X'를 클릭해 결과 모달을 끌 수 있어야 한다.
- [x] 다시 시작하기 버튼을 누르면 로또 게임이 초기화된다.

## 테스트 케이스

- [x] 로또를 구입할 금액을 입력할 수 있다.
  - 예외: 빈 금액 입력값
  - 예외: 정수가 아닌 금액 입력값
  - 예외: 1000원 미만 금액 입력값
  - 예외: 1000으로 나눠지지 않는 금액 입력값
- [x] 입력한 금액만큼의 로또를 자동 구매할 수 있다.
- [x] 당첨 번호와 보너스 번호를 입력할 수 있어야 한다.
  - 예외: 빈 당첨 번호 입력값
  - 예외: 정수가 아닌 당첨 번호 입력값
  - 예외: 로또 숫자 범위 외의 당첨 번호 입력값
  - 예외: 중복된 당첨 번호 입력값
- [x] 로또 당첨 결과 모달을 확인할 수 있다.
- [x] 수익률을 계산할 수 있다.