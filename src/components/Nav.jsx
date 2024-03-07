import { Form, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

//assets
import logomark from '../assets/logomark.svg';

//icons
import { TrashIcon } from '@heroicons/react/24/solid';

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to='/' aria-label='Go to home'>
        <img src={logomark} alt='' height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method='post'
          action='/logout'
          onSubmit={event => {
            if (!confirm('Delete user and all data?')) {
              event.preventDefault();
            }
          }}
        >
          <button type='submit' className='btn btn--warning'>
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

// // Define prop types for Nav component
// Nav.propTypes = {
//   userName: PropTypes.string, // Define the type for userName prop
// };

export default Nav;
