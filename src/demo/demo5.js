/**
 * this关键字问题: 为什么要使用箭头函数? cause 方便
 */
import ReactDOM from 'react-dom';
import { Component, createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

class Input1 extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this); // 使用bind绑定关键字, 生成新的函数再赋值给实例
    }
    handleInput(event) {
        console.log(this); // 正常打印Input1
        console.log(event); // React"综合事件"--SyntheticEvent
        console.log(event.target); // 事件目标
        console.log(event.nativeEvent); // 原生事件
    }
    render() {
        return createElement(
            'input',
            {
                onInput: this.handleInput, // 正常获取函数引用, 不过this丢失
            },
        );
    }
}

class Input2 extends Component {
    constructor(props) {
        super(props);
    }
    handleInput(event) {
        console.log(this); // 正常打印Input2
        console.log(event);
    }
    render() {
        return createElement(
            'input',
            {
                onInput: event => this.handleInput(event), // 使用箭头函数捕获this
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
            createElement(Input1),
            createElement('br'),
            createElement(Input2),
        );
    }
}

function render() {
    ReactDOM.render(createElement(App), app);
}
render(); // 立即挂载根节点