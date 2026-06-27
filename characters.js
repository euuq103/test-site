/**
 * characters.js — 캐릭터 데이터 중앙 관리 파일
 *
 * ★ 새 캐릭터 추가 방법:
 *   1. 아래 CHARACTERS 객체에 새 키로 항목 추가
 *   2. 끝. index.html · characters.html 건드릴 필요 없음.
 *
 * ★ 새 프로필(Base) 추가 방법:
 *   1. 해당 캐릭터의 items 배열에 항목 추가
 *   2. 끝. URL item 번호는 배열 순서 기준으로 자동 연결.
 *
 * ─────────────────────────────────────────────────────────
 * 필드 설명:
 *   key (객체 키)  : URL ?char= 파라미터에 사용됨. 영문, 대소문자 구분.
 *   title          : 사이트에 표시되는 이름
 *   alias          : 검색 키워드 배열 (한글·영문 자유롭게)
 *   items[]
 *     label        : 프로필 버튼 텍스트 (예: 임아사, Base 2)
 *     title        : 상세 패널 제목
 *     text         : 상세 설명
 *     image        : 이미지 경로 (characters.html 기준 상대경로)
 *     thumb        : 썸네일 경로 (없으면 image 사용)
 *     alias        : 이 Base 전용 검색 키워드 (선택)
 * ─────────────────────────────────────────────────────────
 */

var CHARACTERS = {

  Asa: {
    title: 'Asa!',
    alias: ['아사', 'asa', '임아사'],
    items: [
      {
        label: '임아사',
        title: '임아사',
        text: '이름: 임아사\n\n여 / 대학생 / Korean\n\n특징은 키가 작습니다... (16n)',
        image: '../../img/characters/Asa!/ImAsa.png',
        thumb: '../../img/characters/Asa!/ImAsa_Button.png',
        alias: ['아사', 'asa', 'imasa', '임아사']
      },
      {
        label: 'Base 2',
        title: 'Base 2',
        text: '감정이 겹칠 때 더 선명해지는 분위기와 몸의 선. 어둠 속에서도 중심을 잃지 않는 느낌을 준다.',
        image: '../../img/characters/asa.svg',
        alias: ['아사2', 'asa2']
      },
      {
        label: 'Base 3',
        title: 'Base 3',
        text: '잔잔한 배경과 반짝이는 포인트가 잘 어우러져, 분위기 있는 장면에서 자주 쓰기 좋은 비주얼이다.',
        image: '../../img/characters/asa.svg',
        alias: ['아사3', 'asa3']
      },
      {
        label: '테스트',
        title: 'Base 3',
        text: '잔잔한 배경과 반짝이는 포인트가 잘 어우러져, 분위기 있는 장면에서 자주 쓰기 좋은 비주얼이다.',
        image: '../../img/characters/asa.svg',
        alias: ['아사4', 'asa4']
      }
    ]
  },

  Heaven: {
    title: 'Heaven',
    alias: ['헤븐', 'heaven'],
    items: [
      {
        label: 'Base 1',
        title: 'Base 1',
        text: 'Heaven은 잔잔한 우주감과 미묘한 긴장을 동시에 가진 캐릭터다. 서정적인 장면에서 잘 어울린다.',
        image: '../../img/characters/heaven.svg',
        alias: ['헤븐1', 'heaven1']
      },
      {
        label: 'Base 2',
        title: 'Base 2',
        text: '차분한 시선과 폭넓은 여백이 특징이다. 그림이나 콘셉트 아트에서 존재감이 분명하게 살아난다.',
        image: '../../img/characters/heaven.svg',
        alias: ['헤븐2', 'heaven2']
      },
      {
        label: 'Base 3',
        title: 'Base 3',
        text: '민감한 감정선이 더 강조되는 분위기다. 긴장과 평온이라는 두 분위기를 동시에 담아낸다.',
        image: '../../img/characters/heaven.svg',
        alias: ['헤븐3', 'heaven3']
      }
    ]
  },

  Sazuki: {
    title: '砂月',
    alias: ['사월', 'sazuki', '砂月', '사'],
    items: [
      {
        label: 'Base 1',
        title: 'Base 1',
        text: '砂月 — 모래와 달이 교차하는 이름처럼, 경계에서 살아가는 존재감을 가진다.',
        image: '../../img/characters/sazuki.svg',
        alias: ['사월1', 'sazuki1']
      },
      {
        label: 'Base 2',
        title: 'Base 2',
        text: '절제된 감정 표현 안에 단단한 의지가 숨어있다. 강한 씬에서 조용히 빛난다.',
        image: '../../img/characters/sazuki.svg',
        alias: ['사월2', 'sazuki2']
      },
      {
        label: 'Base 3',
        title: 'Base 3',
        text: '흑백과 색채를 동시에 담아낸 구도. 시각적으로 선명한 대비를 연출하기 좋다.',
        image: '../../img/characters/sazuki.svg',
        alias: ['사월3', 'sazuki3']
      }
    ]
  },

  Trench: {
    title: 'trench',
    alias: ['트렌치', 'trench'],
    items: [
      {
        label: 'Base 1',
        title: 'Base 1',
        text: 'trench는 낯선 분위기와 묵직한 존재감을 가진 캐릭터다. 이질적인 느낌을 살리기 좋다.',
        image: '../../img/characters/trench.svg',
        alias: ['트렌치1', 'trench1']
      },
      {
        label: 'Base 2',
        title: 'Base 2',
        text: '눈과 자세를 강조한 구성으로, 차분한 긴장감이 더 살아난다. 하나의 포인트를 만들기 좋다.',
        image: '../../img/characters/trench.svg',
        alias: ['트렌치2', 'trench2']
      },
      {
        label: 'Base 3',
        title: 'Base 3',
        text: '붉은빛과 어둠이 섞인 분위기를 살려, 강한 인상으로 끝내기 좋은 장면을 만들 수 있다.',
        image: '../../img/characters/trench.svg',
        alias: ['트렌치3', 'trench3']
      }
    ]
  }

  /* ── 새 캐릭터는 여기 아래에 추가 ─────────────────────────
  ,
  NewChar: {
    title: '새캐릭터',
    alias: ['새캐릭터', 'newchar'],
    items: [
      {
        label: 'Base 1',
        title: 'Base 1',
        text: '설명...',
        image: '../../img/characters/newchar.svg',
        alias: ['새캐릭터1', 'newchar1']
      }
    ]
  }
  ─────────────────────────────────────────────────────── */
};
