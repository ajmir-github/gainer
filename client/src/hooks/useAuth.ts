import { useEffect } from "react";
import { Server } from "../services";
import { actions, useAppDispatch } from "../state";

export default function () {
  const dispatch = useAppDispatch();
  useEffect(() => {
    Server.auth.getAuth.query().then((user) => {
      dispatch(actions.auth.setUser(user));
    });
  }, []);
}
