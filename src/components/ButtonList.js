import React from 'react';
import Button from './Button';

const list = [];

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Cricket"/>
      <Button name="Eros"/>
      <Button name="News"/>
      <Button name="Soccer"/>
      <Button name="BB"/>
      <Button name="Bollywood"/>
      <Button name="Sandalwood"/>
      <Button name="Kannada"/>
      <Button name="English"/>
      <Button name="Spanish"/>
      <Button name="TVF"/>
      <Button name="Comedy"/>
    </div>
  )
}

export default ButtonList