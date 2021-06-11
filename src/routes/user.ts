import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { User } from '../entity/User'

export const routes = Router()
const userController = new UserController()

routes.post('/', async (req, res) => {
    const { name, email, password, apartment } = req.body
    const user = new User(name, email, password, apartment)
    const userInserted = await userController.insertUser(user)
    res.json(userInserted)
})

routes.get('/', async (req, res) => {
    const users = await userController.getUsers()
    res.json(users)
})