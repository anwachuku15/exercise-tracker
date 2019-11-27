import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark navbar-expand-lg' style={{paddingLeft:'50px', paddingRight:'50px'}}>
				<Link to='/' className='navbar-brand'>ExcerTracker</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className='collapse navbar-collapse' id="navbarSupportedContent">
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>Exercises</Link>
						</li>
						<li className='nav-item'>
							<Link to='/create' className='nav-link'>Create Exercise Log</Link>
						</li>
						<li className='nav-item'>
							<Link to='/user' className='nav-link'>Create User</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar