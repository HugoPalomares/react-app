import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

const ButtonsTest = () => (
  <div>
    <Button icon='bookmark' label='Bookmark' accent />
    <Button icon='bookmark' label='Bookmark' raised primary />
    <Button icon='inbox' label='Inbox' flat />
    <Button icon='add' floating />
    <Button icon='add' floating accent mini />
    <Button icon='add' label='Add this' flat primary />
    <Button icon='add' label='Add this' flat disabled />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <ButtonsTest />
        </div>
      </ThemeProvider>
    );
  }
}
export default App;