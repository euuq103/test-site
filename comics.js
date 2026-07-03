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

/* 관리자 패널(DB)에서 실제 에피소드를 관리하므로, 이 배열은 API 완전 장애 시의 비상용 fallback입니다.
 * 평소에는 비워두고, 예시/테스트용 데이터를 여기에 적어두지 마세요 (검색결과에 그대로 노출됩니다).
 */
var EPISODES = [
  /* 예시:
  {
    id:     'ep1',
    title:  'Episode 1 \u2014 Intro',
    label:  'Ep.1 \u00a0Intro',
    alias:  ['ep1', '1화', 'intro'],
    images: ['img/ep1/page001.png']
  }
  */
];
