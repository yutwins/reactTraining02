// import { useState, useCallback } from 'react';
// import { InlineStyle } from './components/InlineStyle';
// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponents } from './components/StyledComponents';
// import { Emotion } from './components/Emotion';
// import { ChildArea } from "./ChildArea";
import { 
  BrowserRouter,
  Link,
  Switch,
} from "react-router-dom";

import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import "./App.css";

export default function App() {
  // console.log("App");
  // const [text, setText] = useState('');
  // const [open, setOpen] = useState(false);

  // const onChangeText = (e) => setText(e.target.value);

  // const onClickOpen = () => setOpen(!open);
  // const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // const temp = useMemo(() => 1 + 3, []);
  // console.log(temp);

  return (
    <BrowserRouter>
    <div className="App">
      {/* <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} /> */}
      {/* <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <motion /> */}
      <Link to="/">Home</Link>
      <br />
      <Link to="/Page1">Page1</Link>
      <br />
      <Link to="/Page2">Page2</Link>
      <Home />
      <Page1 />
      <Page2 />
    </div>
    </BrowserRouter>
  );
}
