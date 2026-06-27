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

var EPISODES = [
  {
    id:     'ep1',
    title:  'Episode 1 \u2014 Intro',
    label:  'Ep.1 \u00a0Intro',
    alias:  ['ep1', '1화', 'intro', '에피소드1', '인트로'],
    images: ['img/ep1/page001.png']
  },
  {
    id:     'ep2',
    title:  'Episode 2 \u2014 Night',
    label:  'Ep.2 \u00a0Night',
    alias:  ['ep2', '2화', 'night', '에피소드2', '나이트'],
    images: []
  },
  {
    id:     'ep3',
    title:  'Episode 3 \u2014 Echo',
    label:  'Ep.3 \u00a0Echo',
    alias:  ['ep3', '3화', 'echo', '에피소드3', '에코'],
    images: []
  }
  /* 새 에피소드는 여기 아래 추가:
  ,{
    id:     'ep4',
    title:  'Episode 4 \u2014 Dawn',
    label:  'Ep.4 \u00a0Dawn',
    alias:  ['ep4', '4화', 'dawn', '에피소드4'],
    images: ['img/ep4/page001.png']
  }
  */
];
