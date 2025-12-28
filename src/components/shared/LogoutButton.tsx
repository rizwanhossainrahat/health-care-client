"use client"
import { Button } from '../ui/button'
import { logoutUser } from '@/service/auth/logoutUser';

const LogoutButton = () => {
    const handleLogout = async () => {
    await logoutUser();
  };
  return (
     <Button variant={"destructive"} onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton