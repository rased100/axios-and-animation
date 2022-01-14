import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring'

function App() {
  return (
    <div className="App">
      <animated.div style={useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })}>I am some text</animated.div>
    </div>
  );
}

export default App;
