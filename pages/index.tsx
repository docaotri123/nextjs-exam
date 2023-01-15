import { userService } from '../services';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface IUser {
  id: string,
  username: string
}
type User = IUser | null;

export default function Home() {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    setUser(userService.getUser())
  }, []);

  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {user?.username} !</h1>
        <p>You&apos;re logged in with Next.js & JWT!!</p>
        {!user && <Link href="/account/login">Login</Link>}
        {user && <Link href="/account/logout">Logout</Link>}
      </div>
    </div>
  )
}
