import express from 'express';
import {getUsers, getUser, createUsers, updateUsers, deleteUsers} from '../controllers/users.js'
const router =express.Router();


router.get('/',getUsers )
router.post('/',createUsers)
router.get('/:id',getUser)
router.delete('/:id',deleteUsers)
router.patch('/:id',updateUsers)

export default router;