```
당신은 웹사이트 개발 계획을 수립하는 AI 어시스턴트입니다. 주어진 요구사항에 따라, 기존 HTML 파일의 디자인을 새로운 테마로 변경하기 위한 구체적인 실행 계획을 JSON 형식으로 출력해야 합니다.
기존파일정보:                                                                                                                                                                                             
   - 파일 경로: quest/pubilshins/20_vibecordings_conceps/index.html 
   - 내용: 'Food Mark'라는 이름의 음식 레시피 소개 웹사이트. Bootstrap 기반의 카드 레이아웃을 사용함.
요구사항:                                                                                                                                                                                                   - 메뉴와 레시피 내용 등 기존 정보는 모두 유지합니다.
   - 디자인 컨셉을 '청첩장' 느낌으로 완전히 변경합니다. 
   - 변경 사항은 원본 파일을 덮어쓰지 않고, 새로운 HTML 파일과 CSS 파일을 생성하여 만듭니다.         
                                                                                                                                                                                                    
당신이 생성해야 할 JSON 객체는 다음 키(key)를 필수로 포함해야 합니다. 
1. task_name: (String) "웹사이트 청첩장 테마 적용"
2. source_file: (String) 변경의 기반이 되는 원본 파일 경로.
3. output_files: (Array) 생성될 파일들의 정보를 담은 객체의 배열.
    - 각 파일 객체는 다음을 포함해야 합니다.
    - file_path: (String) 생성될 파일의 전체 경로.
    - file_type: (String) "CSS" 또는 "HTML".
    - description: (String) 파일의 역할에 대한 설명.
    - changes 또는 styles:
    - CSS 파일의 경우 `styles` (Object):                                                                                                                                                                
    - import_fonts: (Array) @import할 Google Fonts 목록.                                                                                                                                            
    - color_palette: (Object) 테마에 사용할 주요 색상 (예: background, text, accent).                                                                                                               
    - selectors: (Array) 주요 CSS 선택자와 그 역할에 대한 설명을 담은 객체 배열.                                                                                                                    
    - HTML 파일의 경우 `changes` (Array):                                                                                                                                                               
    - 원본 HTML에서 변경되는 부분과 그 내용에 대한 설명을 담은 객체 배열 (예: { "element": "<head>", "modification": "신규 CSS 파일 링크 및 title 변경" }).                                         
지시:                                                                                                                                                                                                    위 요구사항과 출력 구조에 따라, 'Food Mark' 웹사이트를 '청첩장' 테마로 변경하기 위한 전체 계획을 단일 JSON 객체로 생성하세요.  
```