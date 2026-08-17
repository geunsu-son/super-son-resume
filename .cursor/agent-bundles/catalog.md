# Agent Bundle Catalog (local)

이 파일은 **현재 저장소** `.cursor/`에 설치된 **에이전트 번들** 목록이다.

- 번들 소스: https://github.com/geunsu-son/agent_skill_bundle
- 소스 catalog: `workshop-kit/catalog.md`
- 소스 ref: `main`

## Installed Bundles

| 번들 | 유형 | 상태 | 원본 | Rule | Skill | 설치일 |
|---|---|---|---|---|---|---|
| Bundle Catalog | 공방 키트 | `installed` | `workshop-kit/` | `bundle-catalog.mdc` | `audit-installed-bundles`, `manage-agent-bundles` | 2026-08-17 |
| Career Management | 예시 (소스 catalog 미등록) | `installed` | `examples/career-management-ver0/` | `career-management.mdc` (`alwaysApply: true`, 로컬 설정) | `career-management-session`, `career-market-research`, `resume-strength-discovery`, `portfolio-hosting-choice`, `portfolio-design-research`, `portfolio-site-build`, `job-posting-fit`, `interview-story-crafting`, `profile-optimization`, `learning-path-planning`, `networking-outreach`, `compensation-research` | 2026-08-17 |

## 설치하지 않음

이 저장소는 이력서 배포용이다. 사용자는 Career Management 외 번들을 추가하지 않기로 했다. 아래 후보는 다시 묻지 않는다.

| 번들 | 결정 |
|---|---|
| Agent Skill Workshop | 설치하지 않음 |
| Session Market Briefing | 설치하지 않음 |
| Web Crawler Craft | 설치하지 않음 |

## 마지막 관리 기록

- 2026-08-17: Bundle Catalog gate 선설치.
- 2026-08-17: 사용자 선택으로 Career Management 예시 번들 설치. 소스 catalog에는 아직 등록되어 있지 않음.
- 2026-08-17: 이 저장소가 이력서 배포용임을 반영해 `career-management.mdc`를 `alwaysApply: true`로 로컬 변경. Career Management 외 번들은 추가하지 않음.
