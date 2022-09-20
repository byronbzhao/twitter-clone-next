import Image from 'next/image';
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import {
	BellIcon,
	BookmarkIcon,
	ClipboardIcon,
	HashtagIcon,
	InboxIcon,
	UserIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
	return (
		<div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
			{/* LOGO */}
			<div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
				<Image
					height="50"
					width="50"
					src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
					alt="Twitter Logo"
				/>
			</div>
			{/* MENU */}
			<div className='mt-4 mb-2.5 xl:items=start'>
				<SidebarMenuItem text="Home" Icon={HomeIcon} active />
				<SidebarMenuItem text="Explore" Icon={HashtagIcon} />
				<SidebarMenuItem text="Notifications" Icon={BellIcon} />
				<SidebarMenuItem text="Messages" Icon={InboxIcon} />
				<SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
				<SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
				<SidebarMenuItem text="Profile" Icon={UserIcon} />
				<SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
			</div>
			{/* Button */}
			<button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

			{/* Mini Profile */}
			<div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
				<img
					src="https://avatars.githubusercontent.com/u/1071625?v=4"
					alt="user image"
                    className='h-10 w-10 rounded-full xl: mr-2'
				/>
				<div className='leading-5 hidden xl:inline'>
					<h4 className='font-bold'>NAME HERE</h4>
					<p className='text-gray-500'>@TWITTERHANDLE</p>
				</div>

				<EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
			</div>
		</div>
	);
};

export default Sidebar;
