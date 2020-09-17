import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Start from './panels/Start';
import Save from './panels/Save';
import Edit from './panels/Edit';

const App = () => {
	const [activePanel, setActivePanel] = useState('start');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState();

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
		    <Start id='start' fetchedUser={fetchedUser} go={go} />
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Edit id='edit' fetchedUser={fetchedUser} go={go} />
			<Save id='save' go={go} />
		</View>
	);
}

export default App;

