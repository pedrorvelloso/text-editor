import React from 'react'
import styled from 'styled-components'

import TextEditor from './components/TextEditor/TextEditor'

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppContainer>
      <TextEditor />
    </AppContainer>
  )
}

export default App
