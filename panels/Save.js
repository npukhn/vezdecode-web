import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';
import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Save = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="edit">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Подкасты
		</PanelHeader>
		  <Placeholder
            icon={<Icon56CheckCircleOutline fill="#008cff"/>}
            header="Подкаст добавлен"
            action={<Button size="l">Поделиться подкастом</Button>}
            stretched
          >
            Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
          </Placeholder>
	</Panel>
);

Save.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Save;
