import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LS extends React.Component {
    static contextType = LanguageContext;
    render(){
        return(
        <div>
            select a language:
            <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
            <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
        </div>
        );
    }
}
export default LS;