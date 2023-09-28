import './App.css';
// import React, { Component } from 'react';
import Jsx from './Chapter2/a/Jsx';
import Props from './Chapter2/B/Props';
import Clock from './Chapter2/C/Clock';
import Event from './Chapter2/D/Event';
import Lists from './Chapter2/E/Lists';
import Forms from './Chapter2/F/Forms';
import Cardss from './Chapter2/G/Cardss';
import Styles from './Chapter2/H/Styles';

function App() {
  return (
    <div className="App">
      <Jsx />
      <Props Name = "hii" Bio = "hello there, how are you. My name is ... . I am a Web Developer." image = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"/>
      <Clock />
      <Event />
      <Lists />
      <Forms/>
      <Cardss />
      <Styles />
    </div>
  );
}

export default App;