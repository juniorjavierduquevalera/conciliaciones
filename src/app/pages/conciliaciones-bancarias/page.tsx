// import React from 'react'
// import ListaDeConciliacionesBancarias from 'src/components/ui/organismo/ListaDeConciliacionesBancarias'

// export default function() {
//   return (
//     <>
//       <ListaDeConciliacionesBancarias/>
//     </>
//   )
// }
'use client';
import { useEffect } from 'react';
import { useConciliacionStore } from '../../../hooks/useConciliacionStore';

const ConciliacionesPage = () => {
  const { conciliaciones, isLoading, fetchConciliaciones } = useConciliacionStore();

  useEffect(() => {
    fetchConciliaciones();
  }, []);

  if (isLoading) {
    return <p>Cargando conciliaciones...</p>;
  }

  return (
    <div>
      <h1>Conciliaciones Bancarias</h1>
      <pre>{JSON.stringify(conciliaciones, null, 2)}</pre>
    </div>
  );
};

export default ConciliacionesPage;

