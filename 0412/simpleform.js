import React from 'react'

// 입력 양식 컴포넌트입니다.
export default class SimpleForm extends React.Component {
    constructor (props) {
        // 상태를 초기화합니다.
        super(props);
        this.state = { value: '' };
    }

// 값이 변경됐을 때
    doChange (e) {
        const newValue = e.target.value;
        this.setState({value: newValue});
    }

// 전송 버튼을 눌렀을 때
    doSubmit (e) {
        window.alert('전송: ' + this.state.value);
        e.preventDefault();
}

// 화면 렌더링
    render () {

        // 이벤트를 메서드에 바인딩합니다.
        const doSubmit = (e) => this.doSubmit(e);
        const doChange = (e) => this.doChange(e);

        return (
            <form onSubmit={doSubmit}>
            <input type='text'
                value={this.state.value}
                onChange={doChange} />
            <input type='submit' value='전송' />
            </form>
        );
    }
}