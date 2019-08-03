import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import color from '../contexts/color';

class Button extends React.Component {
    static contextType = LanguageContext; 
    render() {
        return (
            <color.Consumer>
              {(color) => 
                <button className={`ui button ${color}`}> 
                <LanguageContext.Consumer>
                  {({language}) => language === 'english' ? 'Submit' : 'dfajig' }
                </LanguageContext.Consumer>
              </button>
              }
            </color.Consumer>
        );
     }
}

export default Button;  