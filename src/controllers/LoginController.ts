import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller('/auth')
class LoginController{
  @get('/login')
  @use(middleware)
  getLogin(req: Request, res: Response) :void{
    res.send(`
      <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
      </form>
    `);
  }
}