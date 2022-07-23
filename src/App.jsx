import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Definitions from './components/Definitions';
import Progress from './components/Progress';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import BtnGroup from './components/BtnGroup';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';
import MyForm from './components/MyForm';
import Counter from './components/Counter';
import TodoBox from './components/TodoBox';
import Card4 from './components/Card4';
import App2 from './components/App2';
import ComponentThatToggleModal from './components/ComponentThatToggleModal';
import Autocomplete from './components/Autocomplete';
import MarkdownEditor from './components/MarkdownEditor';


const definitions = [
  { dt: "Бандерівці", dd: "патріоти України, ненависники русні" },
  { dt: "русня", dd: "свинособаки" },
];

const images = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(129).webp",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(70).webp"
];

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Card/>
        <Card2/>
        <Card3 title="Настане день" text="закінчиться війна"/>
        <Card3 title="Ще не вмерла України" text="ні слава ні воля"/>
        <Definitions data={definitions}/>
        <Progress percentage="15" />
        <Alert type="success"/>
        <ListGroup>
          <p>Кохайтеся, чорноброві,</p>
          <p>та не з москалями</p>
        </ListGroup>	
        <BtnGroup />
        <Carousel images={images} />
        <Collapse text="Доброго вечора, ми з України!" opened={true} />
        <MyForm />
        <Counter />
        <TodoBox />
        <Card4>
          <Card4.Body>
            <Card4.Title>Title</Card4.Title>
            <Card4.Text>Text</Card4.Text>
          </Card4.Body>
        </Card4>
        <App2 />
        <ComponentThatToggleModal />
        <Autocomplete />
        <MarkdownEditor onContentChange={console.log}/>
      </div>
    </div>
  );
}


export default App;
