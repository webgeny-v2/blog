import {render} from 'react-dom';
import {ErrorBoundary} from 'app/providers/error-boundary';
import {BrowserRouter} from 'react-router-dom';
import {StoreProvider} from 'app/providers/store-provider';
import App from './app/app';
import ThemeProvider from './app/providers/theme-provider/ui/theme-provider';
import './shared/config/i18n/i18n';

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root'),
);
