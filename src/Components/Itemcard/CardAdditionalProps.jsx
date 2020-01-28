import React from 'react';
import itemCard from '../../styles/ItemCard.css';
import { InputSelect } from './InputSelect';
import { InputNormal } from './InputNormal';

export const CardAdditionalProps = (props) => {
  const { card } = props;
  return (
    <div className={itemCard.additionalProps}>
      {card.allPropertiesData.length === 0 && (
      <p>
     Дополнительное описание товара отсутсвует
      </p>
      )}
      {card.allPropertiesData.length !== 0 && (
      <div className={itemCard.conteinerAdditional}>
        {card.allPropertiesData.map((data) => (data.type === 'Dropdown' ? <InputSelect data={data} /> : <InputNormal data={data} />))}
      </div>
      )}
    </div>
  );
};
