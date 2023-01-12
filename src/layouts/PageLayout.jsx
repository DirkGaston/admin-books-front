import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

export default function PageLayout() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}
