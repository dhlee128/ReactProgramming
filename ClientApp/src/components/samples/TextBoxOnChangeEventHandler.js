import React, {Component} from 'react';

class TextBoxOnChangeEventHandler extends Component{
    constructor(){
        super();
        this.state = {userName:"", userPassWord:""};
        //클래스기반 컴포넌트에서 이벤트핸들러 처리시에 bind함수 사용
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handlePassWordChange=this.handlePassWordChange.bind(this);
    }

    handleUserNameChange(e){
        this.setState({userName: e.target.value});
    }
    handlePassWordChange(e){
        this.setState({userPassWord: e.target.value});
    }

    render(){
        return(
            <>
                <input type="text" placeholder="아이디" onChange={this.handleUserNameChange}/>
                <br/>
                <input type="text" placeholder="패스워드" onChange={this.handlePassWordChange}/>
                <hr/>
                아이디:{this.state.userName}
                <br/>
                패스워드:{this.state.userPassWord}
            </>
        );
    }
}

export default TextBoxOnChangeEventHandler;