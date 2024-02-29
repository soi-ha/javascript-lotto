<h1 align="middle">🎱</h1>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>

# [소하 로또 page](https://soi-ha.github.io/javascript-lotto/)

# UI

- header
  - [x] `🎱행운의 로또` 타이틀
- body
  - header
    - [x] `🎱 내 번호 당첨 확인 🎱` 타이틀
  - body
    - [x] 로또 구입 전
    - [x] 로또 구입 후
    - [x] 당첨 통계 모달
- footer
  - [x] copyright

# domain 연결

## 구입 전

**📑 purchaseBefore.js**

- [x] 구입할 금액 입력
- [x] 구입 버튼
  - [x] 유효한 값 확인 (에러 메시지가 존재할 경우, 에러 메세지 삭제)
  - [x] 유효하지 않은 값, 에러 메세지 출력
  - [x] 유효한 값일 때, 구입 후 출력
  - [x] 구입 여러번 클릭시 계속 출력되는 문제 해결

## 구입 후

**📑 purchaseAfter.js**

- [x] 구매 내역 출력
- [x] 로또 번호 출력
- [x] 당첨 번호 입력
- [x] 보너스 번호 입력
- [x] 결과 확인 플로팅 버튼
  - [x] 유효한 값 확인 (에러 메시지가 존재할 경우, 에러 메세지 삭제)
  - [x] 유효하지 않은 값, 에러 메세지 출력
  - [x] 유효한 값일 때, 당첨 통계 모달 출력

## 당첨 통계 모달

**📑 statisticsModal.js**

- [x] 모달 창 닫기
  - close 버튼, 검은 배경 클릭시
- [x] 당첨 갯수 출력
- [x] 총 수익률 출력
- [x] 다시 시작하기 버튼
  - [x] 클릭시 새로 고침
