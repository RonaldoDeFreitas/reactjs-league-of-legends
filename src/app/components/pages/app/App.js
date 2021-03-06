/* Dependencies */
import React, {Component} from 'react';
import 'typeface-roboto';


/* Components */
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import DateCountdown from '../../components/date-countdown/DateCountdown';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Look below! there's a date countdown component updating itself via Redux!</p>
        <DateCountdown />
        <Footer />
      </div>
    );
  }
}

export default App;
