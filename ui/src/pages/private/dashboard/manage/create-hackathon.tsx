import { Form } from "react-router-dom";

export const CreateHackathon = () => (
  <div>
  <Form className="flex flex-col gap-3 p-3" action="/dashboard/manage" method="post">
      <input type="text" name="name" />
      <input type="text" name="desc" />
      <textarea name="description">

      </textarea>
      <input type="submit" value={'Create Hackathon'} />
    </Form>
  </div>
)

