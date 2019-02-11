import React, { Component } from 'react';
import './App.css';

//Refs 和 DOM

/* class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // 创建 ref 存储 textInput DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：通过 "current" 取得 DOM 节点
		this.textInput.current.focus();
		console.log(this.textInput.current.value);
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
} */
/**
 * 可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件
 */
/* function CustomTextInput(props) {
	// 这里必须声明 textInput，这样 ref 回调才可以引用它
	let textInput = null;
	function handClick() {
		textInput.focus()
		console.log(textInput.value);
	}
	return (
		<div>
			<input
				type="text"
				ref={input=>textInput = input}
			/>

			<input
				type="button"
				value="Click"
				onClick={handClick}
			/>
		</div>
	)
} */
//回调Refs
/*class CustomTextInput extends Component {
	constructor(props) {
		super(props);
		this.textInput = null;
		this.setTextInputRef = elemt => { this.textInput = elemt };
		this.focusTextInput = () => {
			// 直接使用原生 API 使 text 输入框获得焦点
			if (this.textInput) this.textInput.focus();
		}
	}

	componentDidMount() {
		// 渲染后文本框自动获得焦点
		this.focusTextInput();
	}
	render() {
		return (
			<div className="App">
				<input type="text"
					ref={this.setTextInputRef}
				/>

				<input type="button"
					value="Click"
					onClick={this.focusTextInput}
				/>
			</div>
		)
	}
}*/
//Ref受控组件
/*class CustomTextInput extends Component {
	constructor(props) {
		super(props);
		this.handSubmit = this.handSubmit.bind(this);
	}
	handSubmit() {
		console.log(`${this.input.value}`);
	}
	render() {
		return (
			<div className="App">
				<form>
					<input
						defaultValue="React"
						type="text"
						ref={(input)=>this.input=input}
					/>
					<input
						type="submit"
						value="Submit"
						onClick={this.handSubmit} />
				</form>
			</div>
		)
	}
}*/
// export default CustomTextInput

//Ref 文件
/**
 * 在 React 中，<input type="file" /> 始终是一个不受控制的组件，
 * 因为它的值只能由用户设置，而不是以编程方式设置。
 */
class FilesName extends Component {
	constructor(props) {
		super(props);
		this.handFiles = this.handFiles.bind(this);
	}
	handFiles(e) {
		e.preventDefault();
		console.log(`Files name ${JSON.stringify(this.file.files[0].name)}`);
		console.log(`Files type ${JSON.stringify(this.file.files[0].type)}`);
		console.log(`Files size ${JSON.stringify(this.file.files[0].size)}`);
	}
	render() {
		return (
			<div className="App">
				<form>
					<input
						type="file"
						ref={(file)=>this.file=file}
					/>
					<input
						type="button"
						value="Submit"
						onClick={this.handFiles}
					/>
				</form>
			</div>
		)
	}
}
export default FilesName  