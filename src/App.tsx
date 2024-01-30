import { Layout } from 'antd';
import FooterCM from 'components/Common/Footer';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/scss/index.scss';
import Products from './features/home/Products';

const { Content } = Layout;

function App() {

  return (
    <div className='container-app'>
      <Layout className="site-layout" >
        <Content style={{ margin: '10px 10px', overflow: 'initial' }}>
          <Switch>
            <Route exact path="/" component={() => <Products />} />
          </Switch>
        </Content>
      </Layout>
      <FooterCM />
    </div>
  );
}

export default App;
