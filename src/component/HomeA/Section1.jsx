import React, {useState} from "react";

export default function Section1() {
	const [activeForm, setActiveForm] = useState("guardian");

	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 place-content-center py-[140px]'>
			<div className=''>
				<img
					className='pb-[80px] pt-[20px] px-[80px] '
					src='img/mainpage.png'
					alt=''
				/>
			</div>
			<div className='flex flex-col '>
				<div className='font-semibold flex flex-col justify-start text-[#333c47]'>
					<span className='text-[30px]'>
						지적·발달 장애인을 위한
					</span>
					<span className='text-[50px]'>
						건강 동반자, 헬스 메이트
					</span>
				</div>
				<div className='bg-white rounded-[10px] mt-[70px] pt-[30px] pb-[50px] px-[20px] drop-shadow w-[80%]'>
					<div className='flex flex-row items-center justify-evenly mb-[40px]'>
						<button
							className={
								activeForm === "guardian"
									? "bg-[#54A7FA] rounded-[10px] text-white px-[25px] py-[8px]"
									: "px-[12px] py-[8px]"
							}
							onClick={() => setActiveForm("guardian")}
						>
							보호자 로그인
						</button>
						<button
							className={
								activeForm === "uniqueKey"
									? "bg-[#54A7FA] rounded-[10px] text-white px-[25px] py-[8px]"
									: "px-[12px] py-[8px]"
							}
							onClick={() => setActiveForm("uniqueKey")}
						>
							고유키 로그인
						</button>
					</div>
					{activeForm === "guardian" && (
						<form action=''>
							{/* 보호자(모니터링) 로그인 */}
							<div className='flex flex-col items-center'>
								<input
									className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] px-[16px] py-[5px]'
									placeholder='아이디'
									type='text'
								/>
							</div>
							<div className='flex flex-col items-center'>
								<input
									className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									placeholder='비밀번호'
									type='password'
								/>
							</div>
							<div className='flex flex-col items-center'>
								<button className='w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'>
									로그인
								</button>
							</div>
						</form>
					)}
					{activeForm === "uniqueKey" && (
						<form action=''>
							{/* 고유키 로그인 */}
							<div className='flex flex-col items-center'>
								<input
									className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									placeholder='고유키'
									type='text'
								/>
							</div>
							<div className='flex flex-col items-center'>
								<button className='w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'>
									로그인
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
