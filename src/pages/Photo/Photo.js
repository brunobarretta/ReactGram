import './Photo.css'

import { uploads } from '../../utils/config'

//components
import Message from "../../components/Message"
import { Link } from "react-router-dom"
import PhotoItem from '../../components/PhotoItem'

// Hooks
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { getPhoto } from '../../slices/photoSlice'


//Redux


const Photo = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)
  const {photo, loading, error, message} = useSelector((state) => state.photo)

  // coments

  // load photo data
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  // Like e comentario

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='photo'>
      <PhotoItem photo={photo} />
    </div>
  )
}

export default Photo