import axios from "axios";
import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export default function Section({
	handleLogin,
	input,
	setPage,
}) {
	const navigate = useNavigate();
	const [, setCookies] = useCookies(["token"]);
	const [activeForm, setActiveForm] = useState("guardian");

	async function loginGuardian(e) {
		e.preventDefault();
		try {
			const response = await axios.post("/guardianLogin", {
				id: input.id,
				pwd: input.pwd,
			});
			console.log(response);
			if (response.status === 200) {
				setCookies("token", response.data);
				navigate("/Parents");
			}
		} catch (e) {
			console.log(e);
		}
	}

	async function getUserLogin(e) {
		e.preventDefault();
		try {
			const response = await axios.post("/login", {
				uniqueKey: input.uniqueKey,
			});
			console.log(response);
			if (response.status === 200) {
				setCookies("token", response.data);
				setPage("HealthCare");
			}
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<section className='bg-[#F0F7FF] grid grid-cols-1 lg:grid-cols-2 place-content-center pt-[80px] pb-[40px]'>
			<img
				className='pb-[80px] pt-[20px] px-[120px] '
				src='img/mainpage.png'
				alt=''
			/>
			<div className='flex flex-col '>
				<div className='font-semibold flex flex-col justify-start text-[#333c47]'>
					<span className='text-[30px]'>
						지적·발달 장애인을 위한
					</span>
					<span className='text-[50px]'>
						건강 동반자, 헬스 메이트
					</span>
				</div>
				<div className='flex flex-col itmes-center w-[480px] bg-white rounded-[10px] mt-[70px] pt-[30px] pb-[50px] px-[20px] drop-shadow w-[80%]'>
					<div className='flex justify-evenly itmes-center bg-[#F5F7F9] rounded-[10px] mb-[40px] mx-[22px]'>
						<button
							className={
								activeForm === "guardian"
									? "w-full bg-[#208df9] rounded-[10px] text-white px-[25px] py-[8px]"
									: "w-full px-[12px] py-[8px]"
							}
							onClick={() => setActiveForm("guardian")}
						>
							보호자 로그인
						</button>
						<button
							className={
								activeForm === "uniqueKey"
									? "w-full bg-[#208df9] rounded-[10px] text-white px-[25px] py-[8px]"
									: "w-full px-[12px] py-[8px]"
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
									onChange={(e) =>
										handleLogin("id", e.target.value)
									}
									value={input.id}
								/>
							</div>
							<div className='flex flex-col items-center'>
								<input
									className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									placeholder='비밀번호'
									type='password'
									onChange={(e) =>
										handleLogin("pwd", e.target.value)
									}
									value={input.pwd}
								/>
							</div>
							<div className='flex flex-col items-center'>
								<button
									onClick={(e) => loginGuardian(e)}
									className='flex items-center justify-center w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'
								>
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
									onChange={(e) =>
										handleLogin("uniqueKey", e.target.value)
									}
									value={input.uniqueKey}
								/>
							</div>
							<div className='flex flex-col items-center'>
								<button
									onClick={(e) => getUserLogin(e)}
									className='flex items-center justify-center w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'
								>
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
