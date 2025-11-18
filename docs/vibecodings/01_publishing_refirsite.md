```
당신은 부트스트랩 5 전문가 AI입니다. 주어진 원본 HTML 파일을 오직 부트스트랩 5의 기본 클래스와 컴포넌트만을 사용하여 새로운 기능의 웹페이지로 변환해야 합니다. 별도의 커스텀 CSS 파일은 절대 생성해서는 안       됩니다. 
모든 스타일링과 기능은 부트스트랩 5 프레임워크 내에서 해결해야 합니다.                                                                                                                                   
기준 원본 파일: quest/pubilshings/20_vibecordings_conceps/index.html
최종 목표:
원본 파일을 현대화하고 새로운 인터랙티브 컴포넌트를 추가하여, 그 결과를 index_invitation.html이라는 새 파일로 저장합니다. 디자인은 부트스트랩 5의 표준적이고 깔끔한 스타일을 따릅니다.                           
상세 지시사항 (오직 BS5 클래스만 사용):
1. 신규 파일 생성:
    - index_invitation.html 라는 새 HTML 파일을 생성합니다.
    - 원본 index.html 파일은 절대 수정하지 마세요.
2.스타일링:
    - 별도의 .css 파일을 생성하지 마세요.
    - 모든 스타일은 부트스트랩의 유틸리티 클래스(예: bg-light, p-5, rounded, text-center, text-dark, text-secondary)를 사용하여 적용합니다.
    - 전체적인 테마는 부트스트랩의 표준 라이트(light) 테마를 따릅니다. 커스텀 폰트나 색상은 사용하지 않습니다.                                                                                                  
3. HTML 구조 및 컴포넌트 변경 (`index_invitation.html`): 
  - 네비게이션 바: 'Food Mark' 로고와 '홈' 메뉴의 링크를 index_invitation.html로 수정합니다. '레시피' 메뉴는 페이지 내의 캐러셀 섹션으로 이동하는 앵커 링크(#recipeCarousel)로 수정합니다.
  - 점보트론 섹션 (메인 헤더):
    - bg-light, p-5 등의 클래스를 사용하여 섹션을 재구성합니다.
    - 제목과 부제목을 새로운 문구(예: "우리의 식탁으로 초대합니다")로 변경합니다.
    - 이 섹션에 있던 버튼을 제거합니다.
  - 레시피 섹션:
    - 기존의 3열 카드 그리드를 표준 부트스트랩 5 캐러셀(Carousel)로 교체합니다 (<div id="recipeCarousel" ...>).
    - 원본의 세 가지 레시피는 각각 캐러셀의 아이템(.carousel-item)이 됩니다.
    - 각 아이템 내부의 컨텐츠는 부트스트랩 유틸리티 클래스(p-5, text-center, text-dark, text-secondary)를 사용하여 스타일을 적용합니다.
    - '레시피 보기' 버튼들은 각각의 상세 페이지를 가리키는 임시 링크(예: recipe-detail-kimchi.html)로 수정합니다. 
  - 신규 기능: 추천 레시피 사이드바 (Offcanvas 사용):
    - 호버(hover) 기반의 슬라이드 기능은 커스텀 CSS가 필요하므로, 대신 부트스트랩 5의 Offcanvas 컴포넌트를 사용합니다.
  - 트리거 버튼: 화면 오른쪽에 position-fixed로 고정된 버튼을 생성합니다 (top-50, end-0, translate-middle-y 클래스 활용). 이 버튼은 포크와 나이프 SVG 아이콘을 포함하며, 작고 둥근 형태(btn-light,btn-lg, rounded-pill)로 만듭니다. 이 버튼은 Offcanvas를 열고 닫는 역할을 합니다.
  - Offcanvas 컴포넌트:
    - 오른쪽에서 슬라이드되어 나타나는 Offcanvas(offcanvas-end)를 생성합니다.
    - Offcanvas 헤더(.offcanvas-header)에는 '오늘의 추천'이라는 제목을 넣습니다.
    - Offcanvas 바디(.offcanvas-body)에는 list-group을 사용하여 캐러셀 메뉴와는 다른 새로운 레시피 목록('매콤 닭갈비' 등)을 표시하고, 각 링크는 임시 상세 페이지를 가리키도록 합니다.
위 지시사항에 따라, 오직 부트스트랩 5 프레임워크에만 의존하여 새로운 index_invitation.html 파일을 생성하세요.
```