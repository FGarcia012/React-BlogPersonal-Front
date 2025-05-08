import React from 'react';

export const CommentTable = ({ comments }) => (
    <table className="comments-table">
        <thead>
            <tr>
                <th>Publicación</th>
                <th>Autor</th>
                <th>Descripción</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {comments.map((com) => (
                <tr key={com.ccid}>
                    <td>{com.publication}</td>
                    <td>{com.author}</td>
                    <td>{com.description}</td>
                    <td>{com.date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);