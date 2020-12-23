import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItems = [
	
	{
		title: 'Dashboard',
		path: '/',
		icon: <AiIcons.AiOutlineDashboard />,
		cName: 'nav-text'
	},
	{
		title: 'Flashcards',
		path: '/decks',
		icon: <FaIcons.FaStackOverflow />,
		cName: 'nav-text'
	},
	{
		title: 'To-Do',
		path: '/todo',
		icon: <AiIcons.AiOutlineBook />,
		cName: 'nav-text'

	},

]
