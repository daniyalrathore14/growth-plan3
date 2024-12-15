import React from 'react';
import { Provider } from 'react-redux';
import BookListing from './src/book';
import store from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <BookListing />
    </Provider>
  );
};


export default App;
