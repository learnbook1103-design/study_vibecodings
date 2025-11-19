```
{
  "task": "create_website",
  "tech_stack": ["HTML", "Bootstrap5", "JavaScript"],
  "output": "study_vibecodings/codes/prompt_ui_studio.html",
  "style_reference": "ShotDeck 스타일의 시네마틱 다크톤과 애플 사이트 같은 미니멀 화이트를 테마 토글로 전환할 수 있는 포트폴리오형 UI",
  "description": "AI 프롬프트와 그 결과물을 카드 형태로 정리하고, 카테고리/태그로 탐색하며, 다크/라이트 테마를 전환할 수 있는 개인 포트폴리오 페이지.",

  "sections": [
    {
      "name": "theme_toggle",
      "type": "theme_switch",
      "content": {
        "title": "Theme",
        "description": "원하는 무드를 선택하세요.",
        "default_theme": "cinematic_dark",
        "options": [
          {
            "code": "cinematic_dark",
            "label": "Cinematic Dark",
            "subtitle": "ShotDeck 느낌의 시네마틱 다크톤"
          },
          {
            "code": "minimal_light",
            "label": "Minimal White",
            "subtitle": "애플/노션 느낌의 미니멀 화이트"
          }
        ]
      }
    },

    {
      "name": "hero_section",
      "type": "hero",
      "content": {
        "title": "Prompt & UI Studio",
        "subtitle": "AI 프롬프트와 결과물을 한 곳에 모은 나만의 실험실 겸 포트폴리오",
        "description": "이미지, 쇼츠 스크립트, 제품 광고, 캐릭터 콘셉트까지. 내가 직접 만든 프롬프트와 결과물을 카테고리별로 정리하고, 시네마틱 다크/미니멀 화이트 테마로 감각 있게 보여줍니다.",
        "cta_buttons": [
          {
            "label": "모든 프롬프트 보기",
            "target_section": "prompt_gallery",
            "style": "primary"
          },
          {
            "label": "카테고리부터 선택",
            "target_section": "category_menu",
            "style": "outline"
          }
        ]
      }
    },

    {
      "name": "category_menu",
      "type": "button_menu",
      "content": {
        "title": "프롬프트 카테고리",
        "subtitle": "보고 싶은 종류를 골라서 아래 갤러리를 필터링합니다.",
        "layout": "horizontal_scroll_buttons"
      },
      "items": [
        {
          "key": "all",
          "label": "전체",
          "description": "모든 프롬프트 보기"
        },
        {
          "key": "image_prompt",
          "label": "이미지 생성",
          "description": "일러스트, 시네마틱 스틸컷, 컨셉 아트 등"
        },
        {
          "key": "shorts_script",
          "label": "쇼츠 스크립트",
          "description": "유튜브 쇼츠/릴스용 내레이션 및 콘티"
        },
        {
          "key": "product_ad",
          "label": "제품 광고",
          "description": "화장품/브랜드/제품 홍보 프롬프트"
        },
        {
          "key": "character_concept",
          "label": "캐릭터 콘셉트",
          "description": "세계관, 설정, 캐릭터 디자인용 프롬프트"
        },
        {
          "key": "experiment",
          "label": "실험/연구",
          "description": "톤, 스타일, 조명, 느낌을 테스트하는 실험용"
        }
      ]
    },

    {
      "name": "prompt_gallery",
      "type": "prompt_cards",
      "content": {
        "title": "Prompt Gallery",
        "subtitle": "카드를 클릭하면 프롬프트 전문과 상세 정보를 볼 수 있습니다.",
        "layout": "responsive_grid"
      },
      "items": [
        {
          "id": "cinematic_portrait_01",
          "title": "시네마틱 인물 포트레이트",
          "category": "image_prompt",
          "tags": ["cinematic", "portrait", "soft light"],
          "thumbnail": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
          "short_description": "부드러운 사이드 라이트와 얕은 심도의 시네마틱 인물 샷.",
          "model": "예: SDXL / Midjourney v6",
          "detail": {
            "full_prompt": "영어/한국어 프롬프트 전문이 들어갈 자리. 인물의 표정, 조명, 색감, 배경, 카메라 렌즈, 조리개 등을 구체적으로 서술.",
            "parameters": {
              "resolution": "예: 1024x1536",
              "aspect_ratio": "2:3",
              "cfg_scale": "예: 7",
              "steps": "예: 30"
            },
            "notes": "어떤 의도로 이 프롬프트를 만들었는지, 실험하면서 얻은 인사이트 등을 적는 영역."
          }
        },
        {
          "id": "shorts_script_01",
          "title": "커피가 아침에 더 맛있는 과학",
          "category": "shorts_script",
          "tags": ["shorts", "science", "coffee"],
          "thumbnail": "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
          "short_description": "45초 분량의 쇼츠용 내레이션 스크립트 프롬프트.",
          "model": "예: GPT 계열 LLM",
          "detail": {
            "full_prompt": "아침에 마시는 커피가 왜 더 맛있게 느껴지는지 과학적으로 설명해주는 45초 분량의 쇼츠 스크립트를 만들어줘. 인트로는 후킹, 중간은 핵심 원리 2~3개, 마지막은 위트 있는 한 줄로 마무리해줘. 한국어로, 말하듯이 자연스럽게.",
            "parameters": {
              "target_length": "약 300~400자",
              "tone": "친근하고 설명적인 톤",
              "use_sections": true
            },
            "notes": "이 스크립트를 기반으로 실제 쇼츠 영상을 제작. 후킹 문장 여러 버전을 시도해 보았다는 메모 등."
          }
        },
        {
          "id": "cosmetic_ad_01",
          "title": "미백·주름개선 기능성 화장품 광고 카피",
          "category": "product_ad",
          "tags": ["cosmetics", "ad copy", "legal-safe"],
          "thumbnail": "https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?auto=format&fit=crop&w=900&q=80",
          "short_description": "표시·광고법을 고려한 안전한 화장품 광고 프롬프트.",
          "model": "예: GPT 계열 LLM",
          "detail": {
            "full_prompt": "미백·주름개선 기능성 화장품을 홍보하는 15초 분량 쇼츠용 카피를 작성해줘. 과장 표현과 의약품 오인 표현은 모두 피하고, 화장품법과 표시·광고법을 준수하는 문장만 사용해. 주요 USP는 저자극, 데일리 케어, 촉촉한 사용감이야.",
            "parameters": {
              "length": "약 150~200자",
              "legal_constraints": true
            },
            "notes": "이 프롬프트로 생성된 문장 중 실제 사용할 문장을 손봐서 최종본을 만들었다는 기록 등을 남길 수 있는 영역."
          }
        },
        {
          "id": "hamster_character_01",
          "title": "정서불안 햄스터 캐릭터 콘셉트",
          "category": "character_concept",
          "tags": ["character", "hamster", "youtube"],
          "thumbnail": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
          "short_description": "정서불안 캐릭터 유튜브용 햄스터 콘셉트 프롬프트.",
          "model": "예: GPT 계열 LLM + 이미지 생성 모델",
          "detail": {
            "full_prompt": "정서불안을 겪는 햄스터 캐릭터를 설정해줘. 이름, 말투, 특징적인 행동, 좋아하는 것/싫어하는 것, 시청자가 공감할 수 있는 포인트를 구체적으로 정리해줘. 유튜브 쇼츠 채널용 캐릭터라서, 짧은 에피소드로 풀기 좋은 설정 중심으로.",
            "parameters": {
              "format": "설정표 + 한 줄 요약",
              "target_use": "유튜브 쇼츠 캐릭터"
            },
            "notes": "이 캐릭터로 실제 어떤 콘텐츠를 제작했는지 후에 링크를 걸 수 있는 메모 영역."
          }
        }
      ]
    },

    {
      "name": "prompt_detail_template",
      "type": "modal_layout",
      "content": {
        "title": "프롬프트 상세보기 레이아웃",
        "description": "카드를 클릭했을 때 열리는 모달의 기본 구조 정의.",
        "layout": {
          "left": "큰 결과 이미지 또는 썸네일",
          "right": "제목, 카테고리, 태그, 모델 정보, 프롬프트 전문, 파라미터, 노트",
          "footer": "닫기 버튼, (선택) 외부 링크 버튼"
        }
      }
    },

    {
      "name": "footer",
      "type": "simple_footer",
      "content": {
        "text": "© 2025 Prompt & UI Studio",
        "links": [
          {
            "label": "YouTube",
            "url": "#"
          },
          {
            "label": "GitHub",
            "url": "#"
          },
          {
            "label": "Contact",
            "url": "#"
          }
        ]
      }
    }
  ],

  "design_guidelines": {
    "default_theme": "cinematic_dark",
    "themes": {
      "cinematic_dark": {
        "background": "#050816",
        "surface": "#0b1020",
        "accent": "#5b8cff",
        "accent_soft": "#7f5af0",
        "text_primary": "#f5f5f5",
        "text_secondary": "#9ca3af",
        "border_subtle": "#1f2933",
        "card_radius": "0.9rem",
        "shadow": "strong",
        "imagery": "시네마틱한 배경 그라디언트와 약한 글로우 효과"
      },
      "minimal_light": {
        "background": "#f5f5f7",
        "surface": "#ffffff",
        "accent": "#0070c9",
        "accent_soft": "#e5f1ff",
        "text_primary": "#111827",
        "text_secondary": "#6b7280",
        "border_subtle": "#e5e7eb",
        "card_radius": "0.9rem",
        "shadow": "soft",
        "imagery": "여백이 많고, 얇은 라인과 아이콘 중심의 미니멀 디자인"
      }
    },
    "layout": {
      "use_bootstrap_container": true,
      "max_width": "1200px",
      "section_spacing": "py-5",
      "gallery_columns_desktop": 3,
      "gallery_columns_tablet": 2,
      "gallery_columns_mobile": 1
    },
    "interactions": {
      "smooth_scroll": true,
      "hover_effects": "카드 hover 시 약한 scale(1.02) + shadow 증가",
      "active_category_style": "선택된 카테고리 버튼은 accent 색상 배경과 볼드 텍스트"
    }
  }
}

```