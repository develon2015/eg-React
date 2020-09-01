/**
 * 类组件及其状态与UI的更新与同步
 */
import ReactDOM from 'react-dom';
import { Component, createElement } from 'react';

document.body.innerHTML = `<div id="app"></div>`;

class MyTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        console.log('render被调用');
        return createElement('div', {
            style: {
                fontSize: '38px',
                color: '#880088',
                background: 'pink',
            },
        }, `我觉得不行 +${this.state.count}`, ' => ',
            createElement('button', {
                style: {
                    fontSize: '38px',
                },
                onClick: () => { // 事件被绑定到DOM上时, this会丢失, 因此必须使用箭头函数.
                    this.setState({ count: this.state.count + 1 });
                    // 等价于:
                    // ++this.state.count && this.forceUpdate();
                },
            }, '+1'),
        );
    }
}

function render() {
    ReactDOM.render(createElement(MyTitle), app);
}
render(); // 立即挂载根节点