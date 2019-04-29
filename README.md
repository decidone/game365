# game365


실행을 위한 초기 설정
1. git에서 다운
2. npm install	//package-lock.json 파일에 설정이 다 되어있으므로 npm install만 입력하면 된다.
3. supervisor index.js


사용 모듈
1. express
2. pug
3. supervisor
4. body-parser
5. mysql


전체 공통적인 레이아웃 - 타이틀, 유저ID 및 로그아웃

- 최신 게임, 인기 게임 리스트
- 검색(키워드, 제작자, 제목)
	- 검색 결과 창
	- 클릭 시 자세한 게임 정보
		- 후원하기(구매하기) 버튼 or 참가자인 경우 프로젝트 창 버튼
			- 후원 페이지
		- 프로젝트 참여 지원
		- 프로젝트 참가자 및 후원자 버튼
			- 참가자 및 후원자 페이지
		- 소개글
		- 평가
			- 평가 및 리뷰 페이지
			- 평가 입력 box
			- 긍정적 평가 + 더보기 버튼
			- 긍정적 평가 리스트
			- 부정적 평가 + 더보기 버튼
				- 부정적 평가 리스트
			- 모든 평가 보기
				- 모든 평가 리스트	
		- 키워드(장르)
		- 심의 등급
 - 마이 프로젝트
	- 프로젝트 리스트 / PD아이디/ 역할(특정 프로젝트를 리스트에서 클릭 시 페이지 이동)
		- 프로젝트 파일 공유 시스템(git) 버튼
			- 깃으로 링크
		- 프로젝트 관리 버튼
			- 프로젝트 파일 공유 시스템(git) 버튼
				- 깃으로 링크
			- 프로젝트 공지사항
			- dlc 추가 버튼
				- dlc 추가 페이지
			- 인원 관리
				- 인원 관리 페이지
			- 제작 일정 설정
			- 자율 심의
			- 수익 설정 버튼
				- 펀딩
					- 목표금액 설정
					- 펀딩 내역 관리
				- 몫 분배
					- 배당 설정 페이지
					- 수익 내역 관리
			- 프로젝트 내 채팅 버튼
				- 채팅 페이지
			- 개발진 작업실( 작업 내역 등을 올리는 게시판 )
				- 개발 일지
				- 프로젝트 내 채팅 버튼
					- 채팅 페이지

	- 프로젝트 생성
		-제목, 내용, 키워드, 게임 소개 등 입력하는 페이지
	- 구인 구직 버튼


개발 순서
1. pug페이지 및 라우팅 잡는 작업
2. 페이지 별 기본적인 레이아웃 잡기
3. 로그인, 게임리스트 등 기본적인 DB 설정
4. 게임 등록, dlc추가 등 기능적인 부분 DB 설정, 기능 구현
5. 게시판, 채팅 등 심화적인 기능 구현

해야 할 일
1. 반복되는 타이틀 header로 묶어서 참조시키기
2. 아이디 정보는 쿠키나 세션으로 구현

라우팅
/ - /main으로 redirect
/main - home.pug
/main/login - login.pug									form /main/login_process시 확인 후 /main으로 
/main/project - project.pug
/main/project/review - project_review.pug
/main/project/review/list - project_review_list.pug
/main/search - searchgame.pug							검색 결과 다시 /main/search로 redirect
/main/shop - shoppage.pug

/project - project.pug
/project/new_project - addproject.pug
/project/list - project_list.pug
/users/library - library.pug
/users/mypage - mypage.pug
/users/register - register.pug							form /users/register_process거쳐서 등록 후 /main으로
/users/update_profile - update_profile.pug				form /users/update_process거쳐서 수정 후 /main으로