import React from 'react';
import './App.css';
import Input from './03/Input';
import Text from './04/Text';
import Button from './04/Button';

function App() {
  return (
    <>
      {/* <Input /> */}
      {/* <Text>defalut</Text>
      <Text xsmall>xsmall</Text>
      <Text small>small</Text>
      <Text xlarge primary>
        xlarge
      </Text>
      <Text large>large</Text>
      <Text primary>primary</Text>
      <Text secondary>secondary</Text> */}
      <Button small>small</Button>
      <Button xsmall>xsmall</Button>
      <Button large>large</Button>
      <Button xlarge>xlarge</Button>
      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
      <Button xlarge primary>
        xlarge primary
      </Button>
      <Button xlarge secondary>
        xlarge secondary
      </Button>
      <div>
        <Button small>small responsive</Button>
      </div>
    </>
  );
}

export default App;
