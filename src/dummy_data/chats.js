export default
{
	chats: {
		0 : { 	
			user_id : 23523,
			last_m:'어딘데 출근 안하니, 죽고싶니?',
			last_t:'09:32',
			unread_num : 512,
		},
		1225 : { 	
			user_id : 2,
			last_m:'오시는 길에 와인 몇병만 사다주세요.오시는 길에 와인 몇병만 사다주세요.오시는 길에 와인 몇병만 사다주세요.오시는 길에 와인 몇병만 사다주세요.',
			last_t:'02:24',
			unread_num : 11,
		},
		23 : { 
			user_id : 552,
			last_m:'휴가 잘보내고 계신가요? 다름이 아니라 이번',
			last_t:'금요일',
			unread_num : 2,
		},
		55 : { 	
			user_id : 1122,
			last_m:'아 휴가셨군요. 약속은 다음으로 미루시죠!',
			last_t:'목요일',
			unread_num : 0,
		},
		14 : { 
			user_id : 5,
			last_m:'',
			last_t:'',
			unread_num : 0,
		},
	},
	users : {
		0 : {
			user_name : '한태재',
			profile : require('../assets/imgs/img-profile-5.jpg'),
		},
		23523 : {
			user_name : '장만월 사장님',
			profile : require('../assets/imgs/img-profile-1.jpg'),
		},
		2 : {
			user_name : '신정근 바텐더',
			profile : require('../assets/imgs/img-profile-2.jpg'),
		},
		552 : {
			user_name : '이미라 의사',
			profile : require('../assets/imgs/img-profile-3.jpg'),
		},
		1122 : {
			user_name : '구찬성 지배인',
			profile : require('../assets/imgs/img-profile-4.jpg'),
		},
		5 : {
			user_name : '노준석 총지배인',
			profile : require('../assets/imgs/img-profile-5.jpg'),
		}
	},
	messages:{
		0 : [
				{
					user_id: 23523,
					file : null,
					msg : '출근했니?'
				},
				{
					user_id: 23523,
					file : null,
					msg : '출근했냐구?'	
				},
				{
					user_id: 23523,
					file : null,
					msg : '어딘데 출근 안하니, 죽고싶니?'	
				},
				{
					user_id: 0,
					msg : '해외 출장중입니다.',	
					file : null,
				},
				{
					user_id: 0,
					msg : null,	
					file : require('../assets/imgs/img-shot-1.jpg'),
				}
		],
		23 : [
				{
					user_id: 552,
					file : null,
					msg : '휴가 잘보내고 계신가요? 다름이 아니라 이번진료 날짜 잡으려고 연락드렸습니다.'
				}
		],
		1225 : [
				{
					user_id: 2,
					file : null,
					msg : '오시는 길에 와인 몇병만 사다주세요.'
				},
				{
					user_id: 2,
					file : null,
					msg : '와인'	
				},
				{
					user_id: 2,
					file : null,
					msg : '아무거나'	
				},
				{
					user_id: 0,
					msg : '알겠습니다',	
					file : null,
				},
				{
					user_id: 0,
					msg : null,	
					file : require('../assets/imgs/img-shot-7.jpg'),
				}
		],
		55 : [
				{
					user_id: 1122,
					file : null,
					msg : '아 휴가셨군요. 약속은 다음으로 미루시죠!'
				},

		],
		14 : [],
	},
	navTitle : '채팅',
	postFontSize: 1 
}