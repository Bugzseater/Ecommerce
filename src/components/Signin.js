import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <div className='container'>
      <div className='left'>
        <div className='cont'>
          <h3>Already with us ?</h3>
          <Link to={"/signup"}>
            <button className='btn'>Sign in</button>
          </Link>
        </div>
        <img src="/imgs/login.svg" alt="Logo" className="logo" />
      </div>

      <div className='right'>
        <motion.form 
          className='form'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='title'>Sign up</h2>
          <motion.div 
            className='inputs'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <i><FaUser /></i>
            <input type="text" placeholder="Username" />
          </motion.div>
          <motion.div 
            className='inputs'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <i><FaEnvelope /></i>
            <input type="email" placeholder="Email" />
          </motion.div>
          <motion.div 
            className='inputs'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <i><FaLock /></i>
            <input type="password" placeholder="Password" />
          </motion.div>
          <motion.input 
            type='submit' 
            value={"Sign up"} 
            className='btn'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.form>
      </div>
    </div>
  );
}

export default Signup;
