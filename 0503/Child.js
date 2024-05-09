import { forwardRef, useImperativeHandle } from 'react'; 

const Child = forwardRef((props, ref) => { 
    // 부모 컴포넌트에서 사용할 함수 설정
    useImperativeHandle(ref, () => ({
        req1, 
        req2 
    })) 
    
    // 함수 1 
    const req1 = () => {} 
    // 함수 2 
    const req2 = () => {} 
    }
)


export default Child;