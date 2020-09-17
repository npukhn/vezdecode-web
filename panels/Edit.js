import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import List from '@vkontakte/vkui/dist/components/List/List';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Link from '@vkontakte/vkui/dist/components/Link/Link';

const osName = platform();

const Edit = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
			<PanelHeader 
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
		Новый подкаст</PanelHeader>
       <FormLayout>
        <FormLayoutGroup before={<Avatar mode="app" />} top="Название">
        <Input type="text" defaultValue="Подкаст прекрасных людей"/>
      </FormLayoutGroup>
        </FormLayout>
        <Group header={<Header mode="secondary">Описание</Header>}>
         <Div> 
Подкаст, который рассказывает про то, как много в мире прекрасных вещей, которые можно совершить, а также сколько людей, которые могут помочь вам в реализации ваших заветных мечт.
         </Div> 
        </Group>
         <Group header={<Header mode="secondary">Содержание</Header>}>
         <Div> 
         <Link> 05:41 </Link>— Начало обсуждения 
         <br /> 
         <br /> 
        <Link> 15:23 </Link>— Основная тема подкаста
         <br />
         <br />  
        <Link> 25:37 </Link> — Разговор с гостем
         <br />
         <br /> 
        <Link> 43:15 </Link>— Рекламная интеграция
         <br />
         <br /> 
         <Link> 47:00 </Link> — Вопросы от зрителей
         <br />
         <br /> 
         <Link> 58:00 </Link> — Подведение итогов розыгрыша
         </Div> 
        </Group>
    <Div>
       <Button size="xl" onClick={go} data-to="save">Опубликовать подкаст</Button>
     </Div>
	</Panel>
);

Edit.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Edit;
