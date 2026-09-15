import './App.css'
import Tabs from './Tabs';

function App() {
  const tabsData = [
        { title: "Tab 1", content: "This is the content of Tab 1" },
        { title: "Tab 2", content: "This is the content of Tab 2" },
        { title: "Tab 3", content: "This is the content of Tab 3" },
        {}
    ];
    
    return <Tabs tabs={tabsData} />;
}

export default App
