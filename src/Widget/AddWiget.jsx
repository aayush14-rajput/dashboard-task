
import React, { useState } from 'react';
import Container from '../components/Container';
import Widget from './Widget';

const AddWiget = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    const openWidget = () => {
        setIsWidgetOpen(true);
    };

    const closeWidget = () => {
        setIsWidgetOpen(false);
    };
  return (
    <div>
         <Container onAddWidget={openWidget} />
         {isWidgetOpen && <Widget onClose={closeWidget} />}
    </div>
  )
}

export default AddWiget