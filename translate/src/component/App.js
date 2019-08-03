import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import color from '../contexts/color';
import LS from './LS'

class App extends React.Component{

    render(){
        return (
        <div className="ui container">
        <LanguageStore>
          <LS />
            <color.Provider value="red">
              <UserCreate />
            </color.Provider>
        </LanguageStore>
        </div>
        );
    }
}

export default App;