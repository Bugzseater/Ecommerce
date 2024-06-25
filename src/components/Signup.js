import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <div>
      <div className='container'>
        
        <motion.div 
          className='left'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='cont'>
            <h3>New to here ?</h3>
            <Link to={"/signin"}>
              <motion.button 
                className='btn'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sign up
              </motion.button>
            </Link>
          </div>
          <motion.img 
            src="/imgs/login.svg" 
            alt="Logo" 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
        
        <motion.div 
          className='right'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.form 
            className='form'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='title'>Sign in</h2>
            <div className='inputs'>
              <i><FaEnvelope /></i>
              <motion.input 
                type="email" 
                placeholder="Email"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className='inputs'>
              <i><FaLock /></i>
              <motion.input 
                type="password" 
                placeholder="Password"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <motion.input 
              type='submit' 
              value={"Login"} 
              className='btn'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.form>
        </motion.div>

      </div>
    </div>
  );
}

export default Signup;
