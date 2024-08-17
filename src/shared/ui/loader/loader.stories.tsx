import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/theme-decorator/theme-decorator';
import {Theme} from 'app/providers/theme-provider';
import {Loader} from './loader';

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
