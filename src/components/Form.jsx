import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  CircleMarker,
  Polygon
} from 'react-leaflet';

  const center =[55.744997, 52.403659];
  const colorsOtions = {color: 'purple'}
  const centerPolygon = [[
    [55.731491, 52.387529],
    [55.759483, 52.416100],
    [55.732767, 52.459230],
    [55.723895, 52.421127]
  ]]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>    
      <form id='form' onSubmit={handleSubmit(onSubmit)} className="p-5 m-5 text-left">
        <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3 w-50'>
          <input 
          {...register('surname', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/i
          })}
          type="text"
          className="form-control"
          placeholder="Фамилия"/>
        </div>      
        {errors?.surname?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.surname?.type === 'maxLength' &&(
          <p>Поле не может содержать больше 50 символов</p>
        )}
        {errors?.surname?.type === 'pattern' &&(
          <p>Поле заполненно некорректно</p>
        )}


        <div className='input-group mb-3 w-50'>
          <input 
          {...register('name', {
              required: true,
              maxLength: 30,
              pattern: /^[А-Яа-я]+$/i
          })}
          type="text"
          className="form-control"
          placeholder="Имя"/>
        </div>  
        {errors?.name?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.name?.type === 'maxLength' &&(
          <p>Поле не может содержать больше 30 символов</p>
        )}
        {errors?.name?.type === 'pattern' &&(
          <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3 w-50'>
          <input 
          {...register('patronymic', {
              maxLength: 30,
              pattern: /^[А-Яа-я]+$/i
          })}
          type="text"
          className="form-control"
          placeholder="Отчество"/>
        </div>          
        {errors?.patronymic?.type === 'maxLength' &&(
          <p>Поле не может содержать больше 30 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern' &&(
          <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3 w-50'>
          <input 
          {...register('email', {
              required: true,
              maxLength: 30
          })}
          type="email"
          className="form-control"
          placeholder="email@example.com"/>
        </div>  
        {errors?.name?.type === 'required' &&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.name?.type === 'maxLength' &&(
          <p>Поле не может содержать больше 30 символов</p>
        )}
        <input className='btn btn-dark' type="submit" />
      </form>
          <br></br>
      <MapContainer
        center = {center}
        zoom={10}        
        style={{          
          width: '100vw',
          height: "500px"
        }}
      >
        <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=3QKTdFmseMv4habvNHOo"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <CircleMarker 
        center={center}
        pathOptions={{color: 'black'}}
        radius={10}
        />
        <Marker position={center}>
          <Popup>Мы находимся здесь</Popup>
          <Tooltip>Мы находимся здесь</Tooltip>
        </Marker>

        <Polygon positions={centerPolygon} pathOptions={colorsOtions}/>
      </MapContainer>
    </div>
  )
}

export default Form