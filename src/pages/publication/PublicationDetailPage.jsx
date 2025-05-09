import React from 'react';
import { useParams } from 'react-router-dom';
import { usePublication } from '../../shared/hooks';
import { CommentList } from '../../components';

export const PublicationDetailPage = () => {
  const { publicationId } = useParams();
  const { publication } = usePublication();
  const selectedPublication = publication.find((p) => p.pid === publicationId);

  if (!selectedPublication) {
    return <p>Publicación no encontrada.</p>;
  }

  return (
    <div>
      <h1>{selectedPublication.title}</h1>
      <p>{selectedPublication.description}</p>
      <p><strong>Curso:</strong> {selectedPublication.course}</p>
      <p><strong>Fecha:</strong> {selectedPublication.date}</p>
      <CommentList />
    </div>
  );
};