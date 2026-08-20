# 손근수 — Data Engineer · Data Analyst 이력서

정적 HTML 사이트입니다. Cloudflare Pages에 올려 공개하는 것을 기준으로 두었습니다.

## 로컬에서 보기

```bash
python3 -m http.server 4173 --directory site
```

브라우저에서 `http://localhost:4173` 을 엽니다.

## 내용 수정

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 소개·경력·연락처 문구 | `site/index.html` |
| 색·여백·레이아웃 | `site/styles/variables.css`, `site/styles/main.css` |
| 프로필 사진 | `site/assets/profile_photo_comic.png` |
| 이력 원천·참고 문서 | `docs/career/` (`INDEX.md` 참고) |

이력에 없는 성과·수치는 넣지 않습니다. 공개 문구를 바꿀 때는 `docs/career/` 자료를 근거로 합니다.

## Cloudflare Pages 배포

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → Git 저장소 연결
2. 빌드 설정
   - Framework preset: `None`
   - Build command: 비움
   - Build output directory: `site`
3. **Save and Deploy**

이후 `main`(또는 이 브랜치)에 push하면 다시 배포됩니다.

커스텀 도메인은 Pages 프로젝트의 **Custom domains**에서 연결합니다. API 키나 계정 정보는 저장소에 넣지 않습니다.
