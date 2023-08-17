import { Component } from 'react';
import './Section.css'
class Section extends Component {

    section = this.props.section;
    
    renderSection(){
        return Object.keys(this.section).map(key => {
            let startend = `${this.section[key].start} - ${this.section[key].end}`
            let header = `${this.section[key].headerLeft}, ${this.section[key].headerRight}`;
            let bulletPoints = [];
            
            for (var i = 0; i < this.section[key].bulletPoints.length; i++) {
                bulletPoints.push(
                    <div key={i} className="bulletPoint">
                        <div className="wrapper"><div className="blackDotbulletPoint"></div></div>
                        <p>{this.section[key].bulletPoints[i]}</p>
                    </div>
                )
            }
            return (
                <div key={key} >
                    <div className="header">
                        <p>{header}</p>
                        <p id="location">{this.section[key].location}</p>
                    </div>
                    <p className="startend">{startend}</p>
                    {this.section[key].extraInfo &&  <p className="extraInfo">{this.section[key].extraInfo}</p>}
                   
                    {bulletPoints}
                </div>
            )
        });
    }
    render(){
        return (
            <div className="Section">
                {this.renderSection()}
            </div>
        );
    }
    
}

export default Section;