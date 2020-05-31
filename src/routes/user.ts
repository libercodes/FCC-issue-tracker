import { Router } from "express"
import * as userController from '../controller/user'
import { ValidarAgregarIssue, CheckValidations, ValidarModificarIssue } from "../middlewares/validations"
const router:Router = Router()

router.post('/issues/:projectname',
    ValidarAgregarIssue,
    CheckValidations,
    userController.AddIssue
)

router.put('/issues/:projectname', 
    ValidarModificarIssue,
    CheckValidations,
    userController.UpdateIssue
)
router.delete('/issues/:projectname/:id', userController.DeleteIssue)
router.get('/issues/:projectname', userController.GetIssues)

export default router