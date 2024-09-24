import { render } from 'preact';
import DisableDevtool from 'disable-devtool';

import { App } from './app.tsx';
import './index.scss';

DisableDevtool();

render(<App />, document.getElementById('app')!);
