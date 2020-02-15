#WeTube

clonning youtube with Vanila Javascript and nodeJS

1. NPM
 1) 자바스크립트 언어(자바스크립트 런타임 환경 node.js)를 위한 패키지 관리자
 2) 설치하면 node.js 같이 설치

2. node.js
 1) 브라우저 밖에서도 자바스크립트가 구동이 가능하도록 만든 자바스크립트 런타임
 2) 특징
   - 비동기 i/o, 이벤트 위주
    : Node.js 라이브러리의 모든 API는 비동기식(Non-blocking), api 응답을 기다리지 않고 다음 api 실행
    : api 응답처리는 이벤트 알림을 통해 처리
   - 빠른 속도
    : V8엔진 기반으로 속도가 빠름(인터프리터가 아닌 컴파일 처리)
   - 싱글 쓰레드
    : 싱글 쓰레드 기반(non blocking, 이벤트 루프 구조)으로 일반적인 요청은 아파치와 같은 멀티 쓰레드 기반 구조보다 빠르게 처리 가능하며
      이벤트 루프를 통해 서버를 다양하게 확장 가능함
