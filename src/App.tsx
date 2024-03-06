import { FC } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { ToDo } from './components/to-do/to-do'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import GlobalStyle from './styles/global'

const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToDo />
      </ThemeProvider>
    </Provider>
  )
}

export default App
