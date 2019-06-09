# Beginner1
### BCSD_Beginnner_Trainning
###### BCSD Lab HTML & CSS & JavaScript Trainning for FE Beginner in 2019 Q2
- HTML & CSS Trainning(Final)
>>
    - 회원가입 
        - topnav
		    - login/sign-up a: 로그인/ 회원가입
        - section 1(회원가입 섹션)
            - id input : 이메일 형식
            - pw input : 패스워드
            - pw-check input : 패스워드 확인
            - student number input : 학번
            - major div : 학과(드롭다운 이용)
            - phone-number input : 휴대폰번호
            - signup button: 회원가입버튼
            - cancel button : 취소버튼
        - footer 
		    - developer a : 개발자의 페북 혹은 gmail 링크
            - font는 나눔바른고딕
        
    - 로그인 
        - topnav
			- a : 로그인/ 회원가입
    	- section 1(로그인 섹션)
    		- id input : 이메일
    		- pw input : 패스워드
    		- login button : 로그인 버튼
        - footer 
    		- developer a : 개발자의 페북 혹은 gmail 링크
            - font는 나눔바른고딕

- JavaScript Trainning(Second Finish)
>>
    - 회원가입 
        - section 1(회원가입 섹션)
            - id input : **이메일 정규식 확인 기능**
            - pw input : **패스워드 타입으로 안보이게 처리**
            - pw-check input : **패스워드 확인**(pw input value와 다를 경우 회원가입 조건 미충족)
            - student number input : **학번입력시 학과 자동 입력 기능**
            - major div : **학번입력시 학과 자동 입력 기능**
	    		- ex: 2013136123 >> "컴퓨터공학과" major value에 추가
            - phone-number input : **휴대폰번호 정규식 확인 기능**
            - signup button: **회원가입 기능**
		    	- 모든 필수 입력 및 가입 조건 맞는 경우 가입완료 alert 생성
		    	- 필수 입력 및 가입 조건 미충족 시 미충족 조건 내용 출력하는 alert 생성
            - cancel button : **취소 기능**
			    - www.google.com 으로 페이지 이동
        
    - 로그인 
        	- topnav
		       	- a : 로그인/ 회원가입
    	- section 1(로그인 섹션)
	    	- id input : 이메일
		    - pw input : 패스워드
		    - login button : **로그인 기능**
			- pw 입력 창에 커서가 있고(선택되어 있고) enter 입력 시 로그인 버튼 눌리는 이벤트 등록
