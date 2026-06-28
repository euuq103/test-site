/**
 * comics.js — 에피소드 데이터 중앙 관리
 *
 * ★ 새 에피소드 추가 방법:
 *   1. 아래 EPISODES 배열에 항목 추가
 *   2. 끝. index.html 검색 자동 반영.
 *
 * 필드 설명:
 *   id     : 에피소드 ID (내부 식별용)
 *   title  : 표시 제목 (예: 'Episode 1 — Intro')
 *   label  : 사이드바 버튼 텍스트
 *   alias  : 검색 키워드 배열
 *   images : 이미지 경로 배열 (comic/ 기준 상대경로)
 */

var EPISODES = [];
