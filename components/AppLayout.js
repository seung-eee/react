//PropTypes = 부모로부터 전달받은 prop의 데이터 type을 검사하는 것
//(자식 컴포넌트에서 명시해 놓은 데이터 타입과 부모로부터 넘겨받은 데이터 타입이 일치하지 않으면 콘솔에 에러 경고문이 띄워짐)
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return (
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    );
};

AppLayout.PropTypes = {
    //children = 태그와 태그 사이의 모든 내용을 표시하기 위해 사용되는 특수한 props
    children: PropTypes.node.isRequired,
}

export default AppLayout;