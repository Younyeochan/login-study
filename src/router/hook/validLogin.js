import VueCookies from 'vue-cookies'

const beforeEach = (to) => {
    const isRequireLogin = to.matched.some(({ meta: { requiresAuth } }) => requiresAuth);
    const token = VueCookies.get("tokenData");
    
    console.log(token);
    console.log(isRequireLogin);
    console.log(Boolean(token));

    switch(Boolean(token)) {
        case true : 
        console.log('쿠키가 있음으로 바로 메인페이지로 이동합니다.');
        // next({ path: '/main' });
        to.fullPath = '/main'

        break;

        default: 
        console.log('쿠키가 없음으로 로그인 페이지로 이동합니다.');
        to.fullPath = '/'

        console.log(to);
        break;
    }
}

export { beforeEach };
