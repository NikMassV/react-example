import './App.css';
import Test from './Test'
import Test1 from './Test1'
import Header from './Header/Header'
import Goods from './Goods'

const headerData = {
  site_name: 'my test site name',
  nav: [
    {"link": "nav1", "text": "my link1"},
    {"link": "nav2", "text": "my link2"},
    {"link": "nav3", "text": "my link3"},
  ]
}

const goods = [
  {"title": "grape", "cost": 330, "image": "image1"},
  {"title": "pear", "cost": 200, "image": "image2"},
]

function App() {
  return (
    <>
      <Header data={headerData}/>
      <Test />
      <Test1 />
      {goods.map(item => <Goods key={item.title} title={item.title} cost={item.cost} image={item.image} />)}
    </>
  )
}

export default App;
