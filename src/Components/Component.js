import React from 'react';
//定义组件
function Welcome(prop) {
  return (
    <div className="App">
      <h1>Hello,{prop.name}</h1>
    </div>
  );
}
function formData(date) {
  return date.toLocaleDateString();
}
function Comment(prop) {
  return (
    <div className="App">
      <img src={prop.logo} alt="logo" />
      <div>
        <h1>Hello,{prop.name}</h1>
        <p>{prop.text}</p>
      </div>
      {formData(prop.date)}
    </div>
  );
}
function ActionLink() {
  function handleClick(e) {
    //阻止默认点击事件 必须使用具体方法 不能使用return false;
    e.preventDefault();
    console.log('shtop click');
  }
  return (
    <div className="App">
      <a href="www.baidu.com" onClick={handleClick}>
				Click Me
      </a>
    </div>
  );
}

export  {
  Welcome,
  Comment,
  ActionLink
};
