import React from 'react';

export const PublicationTable = ({ publications, onPublicationClick }) => (
    <table className="publications-table">
        <thead>
            <tr>
                <th>Curso</th>
                <th>Título</th>
                <th>Descripcion</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {publications.map((pub) => (
                <tr key={pub.pid} onClick={() => onPublicationClick(pub.pid)}>
                    <td>{pub.course}</td>
                    <td>{pub.title}</td>
                    <td>{pub.description}</td>
                    <td>{pub.date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);