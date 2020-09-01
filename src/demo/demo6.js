/**
 * 受控组件
 */
import ReactDOM from 'react-dom';
import { Component, createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Develon', // 默认值
        };
    }
    handleInput(event) {
        if (event.target.value.length > 20) return; // 控制Input最多只接受20个字符
        this.setState({
            user_name: event.target.value,
        });
    }
    render() {
        return createElement(
            'input',
            {
                value: this.state.user_name, // 绑定受控组件的value到state
                readOnly: false, // 设置受控组件的value值是否只读
                onChange: event => this.handleInput(event), // 使用onChange管理受控组件的value, 而不是onInput
            },
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return createElement(
            'div',
            { style: { fontSize: '38px', color: '#880088', background: '#880088', minHeight: '100vh', minWidth: '100vw', }, },
            createElement(Input),
        );
    }
}

function render() {
    ReactDOM.render(createElement(App), app);
}
render(); // 立即挂载根节点