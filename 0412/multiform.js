import React, {Component} from 'react'
import './multiform.css';

// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
    constructor (props) {
    super(props)
    // 입력 양식의 초깃값을 설정합니다.
        this.state = {
            name: '홍길동',
            age: 300,
            hobby: '개발'
        }
    }

    // 값이 변경됐을 때
    doChange (e) {
        const userValue = e.target.value
        const key = e.target.name
        this.setState({[key]: userValue})
    }

    // 전송 버튼을 눌렀을 때
    doSubmit (e) {
        e.preventDefault()
        const j = JSON.stringify(this.state)
        window.alert(j)
    }

    // 화면 렌더링 
    render () {
        
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);

    return (
        <div>
        <form onSubmit={doSubmit}>
            <div>
                <label>
                    이름: <br />
                    <input type='text' name='name' value={this.state.name}
                    onChange={doChange} />
                </label>
            </div>
            <div>
                <label>
                    나이: <br />
                    <input type='number' name='age' value={this.state.age}
                    onChange={doChange} />
                </label>
            </div>
            <div>
                <label>
                    취미: <br />
                        <input name='hobby'
                            type='text'
                            value={this.state.hobby}
                            onChange={doChange} />
                </label>
                <input type='submit' value='전송' />
            </div>
        </form>
        </div>
        )
    }
}