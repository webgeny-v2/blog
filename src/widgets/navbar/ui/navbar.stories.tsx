import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/theme-decorator/theme-decorator';
import {Theme} from 'app/providers/theme-provider';
import {Navbar} from './navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
