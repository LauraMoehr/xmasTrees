import express from 'express';
import {getAllTrees, getOneTree, postTree, updateTree, deleteTree} from '../controllers/trees.controller.js'

const router = express.Router();

router.get('/trees', getAllTrees)
router.get('/trees/:treeId', getOneTree)
router.post('/trees', postTree)
router.put('/trees/:treeId', updateTree)
router.delete('/trees/:treeId', deleteTree)

export default router //drüben TreesRoutes