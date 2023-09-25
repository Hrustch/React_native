import { Pressable } from "react-native";
import LogOutIcon from "../assets/icons/LogOutIcon";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../Redux/auth/operations";

const LogOut = () => {
  const dispatch = useDispatch()
  return (
    <Pressable
      onPress={() => {
        dispatch(logOutThunk(null))
      }}
    >
      <LogOutIcon />
    </Pressable>
  );
};

export default LogOut;
