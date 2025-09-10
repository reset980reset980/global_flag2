<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Global Flag Master Quiz

세계 국기를 맞추는 재미있는 퀴즈 게임입니다! 두 가지 게임 모드로 즐길 수 있습니다.

## 🎮 게임 모드

- **🏁 국기 맞추기**: 국기를 보고 나라 이름을 맞추기
- **🏛️ 수도 맞추기**: 나라 이름을 보고 수도를 맞추기

## ✨ 주요 기능

- 대륙별 필터링
- 실시간 리더보드 (Supabase)
- 배경음악 및 효과음
- 반응형 디자인
- 게임 기록 저장

## 🚀 로컬 실행

**Prerequisites:** Node.js

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 환경변수 설정 (.env 파일 생성):
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   # 또는
   npm start
   ```

4. 브라우저에서 `http://localhost:8080` 접속

## 📦 배포

```bash
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```
