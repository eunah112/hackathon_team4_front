import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav({setPage}) {
	const navs = [
		{
			id: 1,
			navname: "약 체크하기",
			src: "Medicine",
		},
		{
			id: 2,
			navname: "맞춤운동",
			src: "<>",
		},
		{
			id: 3,
			navname: "하루건강",
			src: "<>",
		},
		{
			id: 4,
			navname: "마이페이지",
			src: "<>",
		},
		{
			id: 5,
			navname: "About",
			src: "<>",
		},
	];

	return (
		<nav className='flex flex-row items-center justify-between bg-white border-b-[1px] border-[#DEDEDE] py-[15px] px-[40px]'>
			<div
				to='/'
				className='title text-[30px] text-[#208DF9] font-medium'
				onClick={() => setPage("default")}
			>
				Id FiT
			</div>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>
					{navs.map((n) => (
						<NavLink
							key={n.id}
							to={n.src}
							onClick={() => setPage(n.src)}
							className='text-balck text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px]'
						>
							{n.navname}
						</NavLink>
					))}
				</div>
				<div>
					<div>
						<button
							to='/'
							className='bg-transparent border-[#208DF9] border-[1px] rounded-[25px] text-[#208DF9] hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
						>
							모니터링
						</button>
						<button
							to='/'
							className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[25px] text-[white] hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
						>
							로그아웃
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
