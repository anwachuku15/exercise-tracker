import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional React Component; no state or lifecyle methods
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
            <button className='btn btn-warning' style={{marginRight:'5px'}}><Link to={'/edit/' + props.exercise._id}>Edit</Link></button>
            <button className='btn btn-danger' href="#" onClick={() => { props.deleteExercise(props.exercise._id)}}>Delete</button>
        </td>
    </tr>
)

// Class Components
export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/exercises')
        .then(res => {
            this.setState({
                exercises: res.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteExercise(id) {
        axios
        .delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise 
                        exercise={currentexercise}
                        deleteExercise={this.deleteExercise}
                        key={currentexercise._id}
                    />
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}