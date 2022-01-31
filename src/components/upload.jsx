// import React, {useEffect, useRef, useState} from "react";
// import axios from "axios";
// import {useHistory} from "react-router-dom";
// ​
// import {SaveChange} from "./ButtonProfile/ButtonProfile";
// import './Profile.scss';
// import noPhoto from "../../assets/img/nophoto.png"
// import FormData from "form-data";
// ​
// export const Profile = () => {
// ​
// 	const [getUser, setGetUser] = useState([])
// 	const history = useHistory()
// 	const [image,setImage] = useState('')
// 	const formDataAvatar = new FormData();
// 	const [file, setFile] = useState(null)
// 	const addPhotoInput = useRef(null)
// 	const handleChange = (e) => {
// 		const {name, value} = e.target
// 		setGetUser((prevState) => ({
// 			...prevState,
// 			[name]: value
// 		}))
// 	}
// 	const emptyObj = getUser.description === undefined
// 	const addPhoto = () => {
// 		addPhotoInput.current.click()
// 	}
// 	const changeData = () => {
// ​
// 		/*запрос на изменение данных*/
// 			axios.patch(
// 				`http://localhost:5000/api/profile/update/${getUser._id}`,
// 				{
// 					firstName: getUser.firstName,
// 					lastName: getUser.lastName,
// 					description: getUser.description
// 				},
// 				{
// 					headers: {
// 						"Authorization": JSON.parse(localStorage.getItem('token'))
// 					}
// 				})
// 				.then((res)=>{
// 					console.log(res)
// 				})
// 				.catch((error)=>{
// 					console.log(error)
// 				})
// 		/*запрос на изменение данных*/
// 	}
// ​
// 	/*получить пользователя*/
// 	useEffect(()=>{
// 		axios.post(
// 			'http://localhost:5000/api/articles/get_user',
// 			{},
// 			{
// 				headers: {
// 					"Authorization": JSON.parse(localStorage.getItem('token'))
// 				}
// 			}
// 		)
// 			.then((res)=>{
// 				console.log('===>res', res);
// 				setGetUser(res.data)
// 			})
// 			.catch((error)=>{
// 				console.log('===>error', error);
// 			})
// 	},[])
// 	/*получить пользователя*/
// ​
// 	useEffect(()=>{
// 		if (!JSON.parse(localStorage.getItem('login'))) {
// 			history.push('/signin')
// 			document.location.reload();
// 		}
// 	},[])
// ​
// 	/*change photo*/
// 	const sendToServer = () => {
// 		formDataAvatar.append('image',file)
// 		axios.patch(
// 			`http://localhost:5000/api/profile/update_avatar/${getUser._id}`,
// 			formDataAvatar,
// 			{
// 				headers: {
// 					"Authorization": JSON.parse(localStorage.getItem('token'))
// 				}
// 			})
// 			.then((res)=>{
// 				console.log(res)
// 				setGetUser(res.data)
// 			})
// 			.catch((error)=>{
// 				console.log(error)
// 			})
// 	}
// ​
// 	const getFileAvatar = (e) => {
// 			const file = e.target.files[0]
// 			setFile(e.target.files[0])
// 	}
// 	/*change photo*/
// ​
// 	/*delete avatar*/
// 	const deleteAvatar = () => {
// 		axios.patch(
// 			`http://localhost:5000/api/profile/delete_avatar/${getUser._id}`,
// 			formDataAvatar,
// 			{
// 				headers: {
// 					"Authorization": JSON.parse(localStorage.getItem('token'))
// 				}
// 			})
// 			.then((res)=>{
// 				console.log(res)
// 				setGetUser(res.data)
// 			})
// 			.catch((error)=>{
// 				console.log(error)
// 			})
// 	}
// 	/*delete avatar*/
// ​
// 	useEffect(()=>{
// 		const setAvatar = () => {
// 			if (getUser.avatar) {
// 				const image = getUser.avatar.split('/')
// 				setImage(image)
// 			} else {
// 				return
// 			}
// 		}
// 		setAvatar()
// 	},[getUser])
// ​
// 	return (
// 		<div className="container">
// 			<div className="content profile">
// 				<div className="title profile">
// 					<h1>Profile</h1>
// 				</div>
// 				<div className="block profile">
// 					{
// 							<div className='user'>
// 								<div className='rame'></div>
// 								{
// 										<div className='iconUser'>
// 											<img src={getUser.avatar ? `http://localhost:5000/${image[image.length-1]}` : noPhoto} alt={getUser.namePicture ? getUser.namePicture : 'picture' }/>
// 										</div>
// 								}
// 								<div className='textBlockUser'>
// 									<input
// 										type='file'
// 										onChange={getFileAvatar}
// 										style={{display: "none"}}
// 										ref={addPhotoInput}
// 									/>
// 									<div
// 										className="button"
// 										onClick={addPhoto}
// 									>
// 										Add photo
// 									</div>
// 									<div
// 										className="button"
// 										onClick={sendToServer}
// 									>
// 										Change
// 									</div>
// 									<div
// 										className="button"
// 										onClick={deleteAvatar}
// 									>
// 										Delete photo
// 									</div>
// 								</div>
// 							</div>
// 					}
// 					<div className="formUser">
// 						<form>
// 							<div className="inputName">
// 								<div className="block">
// 									<span>First name</span>
// 									<input
// 										type="text"
// 										name="firstName"
// 										value={getUser.firstName}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className="block">
// 									<span>Last name</span>
// 									<input
// 										name="lastName"
// 										type="text"
// 										value={getUser.lastName}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 							</div>
// 							<div className="inputDescription">
// 								<div className="block">
// 									<span>Description</span>
// 									<input
// 										name='description'
// 										value={emptyObj ? '' : getUser.description}
// 										type="text"
// 										onChange={handleChange}
// 									/>
// 								</div>
// 							</div>
// 							<SaveChange
// 								text={'Save Changes'}
// 								changeData={changeData}
// 							/>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
