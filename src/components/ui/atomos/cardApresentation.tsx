import React from 'react';
import Link from 'next/link';
interface CardPresentationProps {
  nombre: string;
  id: number;
}

const CardPresentation: React.FC<CardPresentationProps> = (props) => {
  const { nombre } = props;

  return (
    <div className="tarjeta">
      <Link href={`/pages/${nombre.toLowerCase().replace(/\s+/g, '-')}`}><h2 className='p-3 h-max w-32'>{nombre}</h2></Link>
    </div>
  );
};

export default CardPresentation;