import '../styles/global.scss';
import Header from '../components/Header';
import Scroll from './../components/scroll/Scroll';
import App from 'next/app';
import {Layout} from './../components/Layout';
export default class _App extends App {
  render() {
    const {Component, pageProps, router} = this.props;
    return (
      <>
        <Header />
        <Scroll>
          <div className="content-section">
            <Component {...pageProps} key={router.route} />
          </div>
        </Scroll>
      </>
    );
  }
}
