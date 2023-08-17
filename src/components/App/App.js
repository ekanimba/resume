import { Component } from 'react';
import './App.css';
import Resume from '../Resume/Resume'
import SocialMediaIcon from '../SocialmediaIcon/SocialmediaIcon';
import Background from './background.jpg';


class App extends Component {
  handleImageLoaded() {
    this.setState({ imageStatus: "loaded"});
  }

  handleImageErrored() {
    this.setState( { imageStatus: "failed to load"});
  }

  render() {
    const divStyle = {
      backgroundImage: "url(" + Background + ")"
    };

    return (
      <div className='App-background'>
      <div
        className="App" 
        style={divStyle} 
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        >
        <Resume />
      </div>
      <div ref={div => (this.socialmediaicon = div)}>
        <SocialMediaIcon />
      </div>
      
      <footer>
        <div className="footer">
          <p>Copyright © 2020 Kanimba Eric • Web Designer & Developer</p>
        </div>
      </footer>
    </div>
    );
  }
}
export default App;
