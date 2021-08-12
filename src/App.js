import React from 'react';
import './App.css';
import Input from './03/Input';
import Text from './04/Text';
import Button from './04/Button';
import withHoC from './05/withHoC';
import withLoading from './05/withLoading';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

const ButtonWithLoading = withLoading('데이터를 불러오는 중입니다.')(Button);
const TextWithLoading = withLoading('로딩중입니다...')(Text);

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
      {/* <Button small>small</Button>
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
      </Button> */}
      {/* <ButtonWithHoC primary large>
        ButtonWithHoC
      </ButtonWithHoC>
      <Button secondary small>
        Button
      </Button>
      <TextWithHoC>TextWithHoC</TextWithHoC>
      <Text>Text</Text> */}
      <ButtonWithLoading isLoading>로딩 버튼</ButtonWithLoading>
      <ButtonWithLoading>로딩완료</ButtonWithLoading>
    </>
  );
}

export default App;
