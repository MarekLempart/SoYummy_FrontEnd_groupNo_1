// src/hooks/useAuth.js

import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectisRegistered,
  selectUser,
} from "redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);
  const isRegistered = useSelector(selectisRegistered);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    errorMessage,
    isRegistered,
  };
};
