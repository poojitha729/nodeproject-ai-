const express=require("express");
const postController=require("../controllers/users");

const router=express.Router();


router.post("",postController.createUser);
router.put("/:id",postController.updateUser);
router.get("",postController.getAll);
router.delete("/:id",postController.deleteUser);
router.get("/:id",postController.getbyid);
module.exports=router