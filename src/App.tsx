import './App.css'
import { FC } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { ToDo } from './components/to-do'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  )
}

export default App
