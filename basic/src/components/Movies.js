import React, { useState } from 'react';
import Header from './Header';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const Movies = () => {
    const GET_MOVIES = gql`
    {
        movies {
            type
            primaryTitle
            originalTitle
            isAdult
            startYear
            endYear
            runtimeMinutes
        }
    }
    `;
    const { data, loading, error } = useQuery(GET_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return `Error ${error.message}`;



    return (
        <React.Fragment>
            <Header />
            <div class="container">
                <table class="table table-hover">
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Adult</th>
                        <th>Start year</th>
                        <th>End year</th>
                        <th>Minutes</th>
                    </tr>

                    {data &&
                        data.movies &&
                        data.movies.map((movie, index) => (
                            <tr>
                                <td>{movie.originalTitle}</td>
                                <td>{movie.type}</td>
                                {movie.isAdult === '0' ? <td>No</td> : <td>Yes</td>}
                                <td>{movie.startYear}</td>
                                <td>{movie.endYear}</td>
                                <td>{movie.runtimeMinutes}</td>
                            </tr>
                        ))}
                </table>
            </div>

        </React.Fragment>
    );
};

export default Movies;