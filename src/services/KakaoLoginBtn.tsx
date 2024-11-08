const KakaoLoginBtn = () => {

const REDIRECT_URI = 'http://localhost:3000';
const REST_API_KEY = '531d63d0737f13134bb2417073a24a0e';
const KAKAO_LOGIN_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleClick = () => {
    window.location.href = KAKAO_LOGIN_LINK;
    // 어떤 버튼을 눌렀는지 localstorage에 저장
};

return(
    <button onClick={handleClick}>kakao login</button>
);};

export default KakaoLoginBtn;