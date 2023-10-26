import { NextResponse } from 'next/server';

export default function middleware(request) {
  // Check if the user is already authenticated by looking for the authToken cookie
  const authToken = request.cookies.get("userAuthToken")?.value;

  // Define the paths that should be restricted for authenticated users
  const restrictedPaths = ['/Login', '/SignUp', '/' ];

   if (request.nextUrl.pathname==="/api/login") {
       return;
   }

  // If the user is authenticated and tries to access a restricted path, redirect them to the profile page
  if (authToken && restrictedPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/profile/user", request.url));

  }
//   If the user is not authenticated and tries to access a protected route, redirect them to the //login page
  if (!authToken && !restrictedPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
  console.log(authToken);
  // console.log('Middleware is executing here');
}

export const config = {
  matcher: [
    '/',
    '/Login',
    '/SignUp',
    '/Viewtask',
    '/Addtask',
    '/profile/:path*',
    '/api/:path*',
  ],
};
