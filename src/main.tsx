import { render } from 'preact';
import DisableDevtool from 'disable-devtool';
import { App } from './app.tsx';
import './index.scss';

if (process.env.NODE_ENV !== 'development') DisableDevtool();

render(<App />, document.getElementById('app')!);
